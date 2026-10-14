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

  const TAX_PREFIXES = [
    /^[*＊]?[生生产]*生活服务[*＊]?/i,
    /^[*＊]?现代服务[*＊]?/i,
    /^[*＊]?交通运输[服务]*[*＊]?/i,
    /^[*＊]?石油制品[*＊]?/i,
    /^[*＊]?商业服务[*＊]?/i,
    /^[*＊]?居民日常服务[*＊]?/i,
    /^[*＊]?文化体育服务[*＊]?/i,
    /^[*＊]?金融服务[*＊]?/i,
    /^[*＊]?信息技术服务[*＊]?/i,
    /^[*＊]?物流辅助[服务]*[*＊]?/i,
    /^[*＊]?邮政服务[*＊]?/i,
  ];

  function cleanTaxPrefix(name) {
    let s = (name || '').trim();
    s = s.replace(/^[*＊][^*＊\n]+[*＊]/, '');
    for (const p of TAX_PREFIXES) {
      s = s.replace(p, '');
    }
    return s.trim();
  }

  const SCENE_RULES = [
    { match: (s) => /^火车票(\s+[^\s-]+-[^\s-]+)?$/.test(s), norm: (s) => s },
    { match: (s) => /航空|客运行程单|民航|机票|飞机票|航空运输/.test(s), norm: () => '飞机票' },
    { isVehicle: true, match: (s) => /汽油|柴油|燃油|加油|乙醇汽油|车用汽油|92#|95#|98#|0#柴油|天然气|CNG|LPG/.test(s), norm: () => '加油费' },
    { isVehicle: true, match: (s) => /通行费|高速|过路|过桥|ETC|路桥费/.test(s), norm: () => '通行费' },
    { isVehicle: true, match: (s) => /停车|停放|泊车|车位/.test(s), norm: () => '停车费' },
    { isVehicle: true, match: (s) => /修车|洗车|汽车维修|车辆维修|车辆保养|汽车保养|年检|补胎|换机油|机油/.test(s), norm: () => '车辆维保费' },
    { match: (s) => /客运|打车|出租车|网约车|出行|代驾|交通费|包车|轮渡/.test(s), norm: () => '客运服务费' },
    { match: (s) => /餐饮|餐费|堂食|外卖|正餐|快餐|工作餐|用餐|伙食|就餐|食品饮料|饭费|点心|茶饮/.test(s), norm: () => '餐饮费' },
    { match: (s) => /住宿|酒店|客房|宾馆|旅馆|房费|民宿/.test(s), norm: () => '住宿费' },
    { match: (s) => /办公用品|办公设备|耗材|打印纸|复印纸|文具|硒鼓|墨盒|笔记本|签字笔|办公杂品|纸张/.test(s), norm: () => '办公用品费' },
    { match: (s) => /快递|物流|邮政|顺丰|货运|托运|邮费|邮寄|派送/.test(s), norm: () => '快递物流费' },
    { match: (s) => /通讯|通信|话费|电话|移动通信|宽带|电信|移动|联通|流量/.test(s), norm: () => '通讯费' },
    { match: (s) => /会务|会议|培训|研讨|展览|展会|峰会/.test(s), norm: () => '会务培训费' },
    { match: (s) => /广告|推广|宣传|营销|展板|物料制作|海报/.test(s), norm: () => '广告宣传费' },
    { match: (s) => /技术服务|软件|信息技术|云服务|系统开发|运维|SaaS|会员费|云主机/.test(s), norm: () => '技术服务费' },
    { match: (s) => /物业|保洁|保安|水费|电费|燃气费|暖气|空调/.test(s), norm: () => '物业水电费' },
  ];

  function smartNormalizeProject(raw, plate) {
    const cleaned = cleanTaxPrefix(raw);
    for (const r of SCENE_RULES) {
      if (r.match(cleaned) || r.match(raw)) {
        const base = r.norm(cleaned || raw);
        if (r.isVehicle && plate) {
          return base + ' ' + plate;
        }
        return base;
      }
    }
    if (plate) {
      return (cleaned || raw || '电子发票') + ' ' + plate;
    }
    return cleaned || raw || '电子发票';
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
        .map((m) => m[2].trim() || (m[1].trim() + m[2].trim()).trim())
        .filter((name) => name && !headerWords.includes(name) && !invalidItemWords.some((w) => name.includes(w)));
      const serviceItem = starMatches.find((name) => /通行费|客运|运输|服务|停车|加油|汽油|柴油|餐饮|餐费|住宿/.test(name));
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
        const itemLine = normalizedLines.find((line) => /通行费|客运|运输服务|停车|加油|汽油|柴油|餐饮|餐费|住宿/.test(line));
        if (itemLine) {
          const m = itemLine.match(/(?:\*[^*＊\n]+\*)?([^\s¥￥\d]{2,20}(?:费|服务|服务费|汽油|柴油))/);
          if (m) itemName = m[1].trim();
        }
      }
      if (!itemName || headerWords.some((w) => itemName === w) || invalidItemWords.some((w) => itemName.includes(w))) itemName = '';
      if (!itemName) {
        const base = fileName.replace(/\.pdf$/i, '').replace(/[_\-]/g, ' ');
        const cjk = base.match(/[一-龥]{2,10}/g);
        if (cjk) itemName = cjk[0];
      }
      itemName = smartNormalizeProject(itemName, plateNumber);
      return { amount, date, itemName, fileName };
    } catch (err) {
      console.warn(`⚠️ 提取失败 ${fileName}:`, err.message);
      return { amount: 0, date: new Date(), itemName: '电子发票', fileName };
    }
  }

  window.__expenseReportCore = {
    initPdfJs,
    extractInvoiceDataFromPdf,
    cleanTaxPrefix,
    smartNormalizeProject,
  };


  setTimeout(() => { initPdfJs(); }, 1000);
})();