(function () {
  window.__invoiceDataCache = window.__invoiceDataCache || {};

  function initPdfJs() {
    try {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            window.__PDF_WORKER_SRC || 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs';
        return true;
      }
    } catch (e) {

    }
    return false;
  }

  async function waitForPdfJs(maxWait) {
    if (window.pdfjsLib) return true;
    const end = Date.now() + (maxWait || 8000);
    while (Date.now() < end) {
      await new Promise(r => setTimeout(r, 300));
      if (window.pdfjsLib) return true;
    }
    return false;
  }

  async function extractInvoiceDataFromPdf(fileName, file) {
    try {
      await waitForPdfJs(8000);
      if (!initPdfJs()) {
        return { amount: 0, date: new Date(), itemName: '电子发票', fileName };
      }
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({
        data: arrayBuffer,

        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/cmaps/',
        cMapPacked: true,
      }).promise;

      let fullText = '';
      const posItems = []; // 第1页带坐标的文本项，用于铁路票站名定位
      for (let i = 1; i <= Math.min(pdf.numPages, 3); i++) {
        const page = await pdf.getPage(i);
        const tc = await page.getTextContent();
        fullText += tc.items.map((it) => it.str).join(' ') + '\n';
        if (i === 1) {
          for (const it of tc.items) {
            if (it.transform && it.str.trim()) {
              posItems.push({ str: it.str.trim(), x: it.transform[4], y: it.transform[5] });
            }
          }
        }
      }
      const compactText = fullText.replace(/\s+/g, '');

      let amount = 0;
      const normalizedLines = fullText
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean);
      const compactLines = compactText
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean);

      const amountPatterns = [
        { key: '价税合计', weight: 100, pattern: /价税合计[（(]小写[）)]\s*[¥￥]?\s*([\d,]+\.?\d{0,2})/ },
        { key: '价税合计', weight: 98, pattern: /价税合计\s*[（(]\s*小写\s*[）)]\s*[¥￥]?\s*([\d,]+\.?\d{0,2})/ },
        { key: '价税合计', weight: 96, pattern: /价税合计\s*[：:]?\s*[¥￥]\s*([\d,]+\.?\d{0,2})/ },
        { key: '价税合计', weight: 92, pattern: /价\s*税\s*合\s*计[^¥￥\d]*([\d,]+\.?\d{0,2})\s*[¥￥]/ },
        { key: '价税合计', weight: 90, pattern: /价\s*税\s*合\s*计[^¥￥\d]*[¥￥]\s*([\d,]+\.?\d{0,2})/ },
        { key: '支付金额', weight: 95, pattern: /支付金额\s*[：:]?\s*[¥￥]?\s*([\d,]+\.?\d{0,2})/ },
        { key: '应付金额', weight: 94, pattern: /应付金额\s*[：:]?\s*[¥￥]?\s*([\d,]+\.?\d{0,2})/ },
        { key: '小写', weight: 93, pattern: /小写[）)]?\s*[：:]?\s*[¥￥]?\s*([\d,]+\.\d{2})/ },
        { key: '票价', weight: 95, pattern: /票\s*价\s*[：:]?\s*[¥￥]?\s*([\d,]+\.\d{2})/ },
        { key: '总金额', weight: 88, pattern: /总\s*金\s*额\s*[：:]?\s*[¥￥]?\s*([\d,]+\.?\d{0,2})/ },
        { key: '金额', weight: 60, pattern: /金\s*额\s*[：:]?\s*[¥￥]?\s*([\d,]+\.?\d{0,2})/ },
      ];
      const amountKeywords = amountPatterns.map((item) => item.key);

      const contextBoostWords = ['合计', '小写', '支付金额', '应付金额', '价税合计', '总金额'];
      const noiseWords = ['单价', '税额', '税率', '税率/征收率', '数量', '金额税', '金额(不含税)', '金额不含税'];
      const amountsFromText = (text) => {
        const candidates = [];
        for (const item of amountPatterns) {
          const re = new RegExp(item.pattern.source, item.pattern.flags.includes('g') ? item.pattern.flags : item.pattern.flags + 'g');
          let m;
          while ((m = re.exec(text)) !== null) {
            const value = parseFloat(m[1].replace(/,/g, ''));
            if (value > 0 && value < 100000000) {
              candidates.push({ value, score: item.weight, source: item.key, text });
            }
          }
        }
        return candidates;
      };

      const scoreCandidate = (candidate) => {
        let score = candidate.score;
        const t = candidate.text;
        if (contextBoostWords.some((w) => t.includes(w))) score += 10;
        if (noiseWords.some((w) => t.includes(w))) score -= 20;
        if (/\-\s*[\d,]+\.\d{2}/.test(t)) score -= 25;
        if (/单价|税额|税率/.test(t) && !/合计|支付金额|应付金额|小写/.test(t)) score -= 30;
        if (/单价/.test(t) && !/合计|支付金额|应付金额|小写|总金额/.test(t)) score -= 40;
        if (/\b0\.0{1,2}\b/.test(t)) score -= 10;
        return score;
      };

      const lineCandidates = [];
      for (const line of normalizedLines) {
        lineCandidates.push(...amountsFromText(line));
      }
      for (const line of compactLines) {
        lineCandidates.push(...amountsFromText(line));
      }

      if (lineCandidates.length > 0) {
        const sorted = lineCandidates
          .map((c) => ({ ...c, finalScore: scoreCandidate(c) }))
          .sort((a, b) => b.finalScore - a.finalScore || b.value - a.value);
        amount = sorted[0].value;
      }

      if (!amount) {
        const allAmounts = [
          ...fullText.matchAll(/[¥￥]\s*([\d,]+\.\d{2})/g),
          ...fullText.matchAll(/([\d,]+\.\d{2})\s*[¥￥]/g),
        ]
          .map((m) => parseFloat(m[1].replace(/,/g, '')))
          .filter((v) => v > 0 && v < 100000000);

        const sorted = [...new Set(allAmounts)].sort((a, b) => b - a);
        if (sorted.length > 0) {
          amount = sorted[0];
        }
      }

      let date = new Date();
      const datePatterns = [
        /开票日期\s*[：:]\s*(\d{4})\s*年?\s*(\d{1,2})\s*月?\s*(\d{1,2})\s*日?/,
        /(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/,
        /(\d{4})\s*[年.\-\/]\s*(\d{1,2})\s*[月.\-\/]\s*(\d{1,2})/,
      ];
      for (const p of datePatterns) {
        const m = fullText.match(p) || compactText.match(p);
        if (m) {
          const y = parseInt(m[1]), mo = parseInt(m[2]), d = parseInt(m[3]);
          if (y >= 2015 && y <= 2035 && mo >= 1 && mo <= 12 && d >= 1 && d <= 31) {
            date = new Date(y, mo - 1, d);
            break;
          }
        }
      }

      let itemName = '';
      const headerWords = ['车牌号', '车辆类型', '通行日期', '单价', '数量', '金额', '税率', '税额', '征收率', '类型'];
      const invalidItemWords = ['税收分类编码', '货物或应税劳务', '服务名称', '规格型号', '单位', '合计'];
      const plateMatch = fullText.match(/([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁])\s*([A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,6})/);
      const plateNumber = plateMatch ? plateMatch[1] + plateMatch[2] : '';
      const starMatches = [...fullText.matchAll(/[*＊]\s*([^*＊\n]{1,30})\s*[*＊]\s*([^\s*＊\n]{1,30})/g)]
        .map((m) => (m[1].trim() + m[2].trim()).trim())
        .filter((name) => name && !headerWords.includes(name) && !invalidItemWords.some((w) => name.includes(w)));
      const serviceItem = starMatches.find((name) => /通行费|客运|运输|服务|停车|加油|餐饮|住宿/.test(name));
      if (serviceItem) itemName = serviceItem;
      else if (starMatches.length > 0) itemName = starMatches[0];
      // 铁路电子客票：无 *项目* 格式，识别为「火车票 起站-到站」
      // 站名顺序必须按页面 x 坐标(左=出发,右=到达),不能用文本流顺序(会反)
      if (!itemName && /铁路电子客票|中国铁路|12306/.test(compactText)) {
        // 找出所有「站」标记，站名是其同一行、紧靠左侧的中文项
        const markers = posItems.filter((p) => p.str === '站');
        const names = [];
        for (const mk of markers) {
          const cand = posItems
            .filter((p) => p !== mk && Math.abs(p.y - mk.y) < 5 && p.x < mk.x &&
              /^[一-龥]{2,8}$/.test(p.str) && p.str !== '站')
            .sort((a, b) => b.x - a.x)[0]; // 最靠近「站」左侧的中文
          if (cand) names.push({ name: cand.str, x: cand.x });
        }
        names.sort((a, b) => a.x - b.x); // 左=出发，右=到达
        if (names.length >= 2) {
          itemName = `火车票 ${names[0].name}-${names[names.length - 1].name}`;
        } else {
          itemName = '火车票';
        }
      }
      if (!itemName) {
        const itemLine = normalizedLines.find((line) => /通行费|客运|运输服务|停车|加油|餐饮|住宿/.test(line));
        if (itemLine) {
          const m = itemLine.match(/(?:\*[^*＊\n]+\*)?([^\s¥￥\d]{2,20}(?:费|服务|服务费))/);
          if (m) itemName = m[1].trim();
        }
      }
      if (plateNumber && itemName && !itemName.includes(plateNumber)) {
        itemName = itemName + ' ' + plateNumber;
      } else if (plateNumber && !itemName) {
        itemName = plateNumber;
      }
      if (!itemName || headerWords.some((w) => itemName === w) || invalidItemWords.some((w) => itemName.includes(w))) itemName = '';
      if (!itemName) {
        const base = fileName.replace(/\.pdf$/i, '').replace(/[_\-]/g, ' ');
        const cjk = base.match(/[一-龥]{2,10}/g);
        if (cjk) itemName = cjk[0];
      }
      if (!itemName) itemName = '电子发票';
      return { amount, date, itemName, fileName };
    } catch (err) {
      console.warn(`⚠️ 提取失败 ${fileName}:`, err.message);
      return { amount: 0, date: new Date(), itemName: '电子发票', fileName };
    }
  }

  window.__expenseReportCore = {
    initPdfJs,
    extractInvoiceDataFromPdf,
  };


  setTimeout(() => { initPdfJs(); }, 1000);
})();