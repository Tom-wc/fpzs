(function () {
  function textIncludes(node, keywords) {
    if (!node) return false;
    const text = (node.innerText || node.textContent || '').trim();
    return keywords.some((k) => text.includes(k));
  }

  function isClickable(node) {
    return (
      node.matches &&
      (node.matches("button, a, [role='button'], [data-slot='button']") ||
        (node.closest && node.closest("button, a, [role='button'], [data-slot='button']")))
    );
  }

  function getClickable(node) {
    if (!node) return null;
    return node.matches && node.matches("button, a, [role='button'], [data-slot='button']")
      ? node
      : (node.closest && node.closest("button, a, [role='button'], [data-slot='button']")) || null;
  }

  let lastPdfUrl = null;
  function setLastPdfUrl(url) {
    if (!url) return;
    lastPdfUrl = url;
  }

  const originalCreateObjectURL = URL.createObjectURL;
  URL.createObjectURL = function () {
    try {
      const obj = arguments[0];
      const type = (obj && obj.type) || '';
      const url = originalCreateObjectURL.apply(URL, arguments);
      if (type.includes('pdf') || /\.pdf(\?|$)/i.test(url)) {
        setLastPdfUrl(url);
      }
      return url;
    } catch (e) {
      return originalCreateObjectURL.apply(URL, arguments);
    }
  };

  const originalFetch = window.fetch;
  window.fetch = async function () {
    const res = await originalFetch.apply(this, arguments);
    try {
      const ct = (res.headers && res.headers.get && res.headers.get('content-type')) || '';
      if (ct && ct.includes('application/pdf')) {
        const blob = await res.clone().blob();
        const pdfUrl = URL.createObjectURL(blob);
        setLastPdfUrl(pdfUrl);
      }
    } catch (e) {}
    return res;
  };

  function scanForPdfLinks(root = document) {
    const nodes = root.querySelectorAll(
      'a[href$=".pdf"], a[href^="blob:"], a[href*=".pdf?"], embed[type="application/pdf"], object[type="application/pdf"], iframe[src$=".pdf"], iframe[src^="blob:"]'
    );
    nodes.forEach((n) => {
      const url = n.href || n.src;
      if (url) setLastPdfUrl(url);
    });
  }

  async function printPdf(url) {
    if (!url) return false;
    try {
      let iframe = document.getElementById('__hidden_pdf_printer');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = '__hidden_pdf_printer';
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        iframe.style.opacity = '0';
        iframe.style.pointerEvents = 'none';
        document.body.appendChild(iframe);
      }
      return new Promise((resolve) => {
        const onLoad = () => {
          setTimeout(() => {
            try {
              if (iframe.contentWindow) {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();
              }
            } catch (e) {
              console.warn('打印失败，尝试回退到整页打印', e);
              window.print();
            }
          }, 300);
          iframe.removeEventListener('load', onLoad);
          resolve(true);
        };
        iframe.addEventListener('load', onLoad);
        iframe.src = url;
      });
    } catch (e) {
      console.error('PDF 打印失败', e);
      return false;
    }
  }

  const printKeywords = ['一键打印', '立即打印', 'Print'];
  const downloadKeywords = ['下载', 'Download', '下载合并', '保存统计'];

  document.addEventListener(
    'click',
    async (ev) => {
      const target = ev.target;
      if (!isClickable(target)) return;
      const btn = getClickable(target);

      const isHeader = btn && (btn.closest('header') || btn.tagName === 'H1' || btn.tagName === 'H2' || btn.tagName === 'H3');
      if (isHeader) return;

      if (btn && textIncludes(btn, downloadKeywords)) return;

      if (btn && textIncludes(btn, printKeywords)) {
        ev.preventDefault();
        ev.stopPropagation();
        try {
          let url = window.__mergedPdfBlobUrl;
          if (!url) {
            const deadline = Date.now() + 8000;
            url = lastPdfUrl;
            while (!url && Date.now() < deadline) {
              scanForPdfLinks();
              url = lastPdfUrl;
              if (url) break;
              await new Promise((r) => setTimeout(r, 400));
            }
          }
          if (url) {
            await printPdf(url);
          } else {
            window.print();
          }
        } catch (e) {}
      }
    },
    true
  );

  const originalConfirmGlobal = window.confirm;
  window.confirm = function () {
    return true;
  };

  scanForPdfLinks();
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((n) => {
        if (!(n instanceof Element)) return;
        scanForPdfLinks(n);
      });
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('beforeunload', () => {
    window.confirm = originalConfirmGlobal;
  });
})();