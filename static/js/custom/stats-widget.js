(function () {
  function init() {
    if (document.getElementById('ad-root')) return;
    var now = new Date();
    var todayStr = now.toISOString().slice(0, 10);
    if (!localStorage.getItem('site_visitor_id')) {
      localStorage.setItem('site_visitor_id', Math.random().toString(36).slice(2) + Date.now().toString(36));
      localStorage.setItem('site_unique_visitors', '0');
      localStorage.setItem('site_first_visit', todayStr);
    }
    if (!localStorage.getItem('site_counted')) {
      localStorage.setItem('site_counted', '1');
      localStorage.setItem('site_unique_visitors', String(Number(localStorage.getItem('site_unique_visitors') || 0) + 1));
    }
    var total = Number(localStorage.getItem('site_total_visits') || 0) + 1;
    localStorage.setItem('site_total_visits', String(total));
    var savedDate = localStorage.getItem('site_today_date');
    var todayVisits;
    if (savedDate !== todayStr) {
      if (savedDate) {
        var hist = JSON.parse(localStorage.getItem('site_visit_history') || '[]');
        hist.push({ date: savedDate, count: Number(localStorage.getItem('site_today_visits') || 0) });
        if (hist.length > 7) hist = hist.slice(-7);
        localStorage.setItem('site_visit_history', JSON.stringify(hist));
      }
      todayVisits = 1;
      localStorage.setItem('site_today_date', todayStr);
    } else {
      todayVisits = Number(localStorage.getItem('site_today_visits') || 0) + 1;
    }
    localStorage.setItem('site_today_visits', String(todayVisits));
    var firstVisit = localStorage.getItem('site_first_visit') || todayStr;
    var runDays = Math.floor((now - new Date(firstVisit)) / 86400000) + 1;
    var unique = Number(localStorage.getItem('site_unique_visitors') || 1);
    var history = JSON.parse(localStorage.getItem('site_visit_history') || '[]');
    var last7 = history.slice(-6);
    last7.push({ date: todayStr, count: todayVisits });

    var el = document.createElement('div');
    el.id = 'ad-root';
    el.innerHTML =
      '<div class="ad-inner">' +
        '<div class="ad-title"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg></div>' +
        '<div class="ad-cards">' +
          '<div class="ad-card"><div class="ad-num" data-target="' + total + '">0</div><div class="ad-label">总访问</div></div>' +
          '<div class="ad-card"><div class="ad-num" data-target="' + todayVisits + '">0</div><div class="ad-label">今日</div></div>' +
          '<div class="ad-card"><div class="ad-num" data-target="' + unique + '">0</div><div class="ad-label">访客</div></div>' +
          '<div class="ad-card"><div class="ad-num" data-target="' + runDays + '">0</div><div class="ad-label">天数</div></div>' +
        '</div>' +
      '</div>';

    var headerBar = document.querySelector('.container.mx-auto.px-4.h-16.flex');
    if (headerBar) {
      var btnDiv = headerBar.querySelector('.flex.items-center.gap-4');
      headerBar.insertBefore(el, btnDiv);
    } else {
      document.body.insertBefore(el, document.body.firstChild);
    }

    var style = document.createElement('style');
    style.textContent =
      '#ad-root{display:flex;align-items:center;flex:1;justify-content:center}' +
      '#ad-root .ad-inner{display:flex;align-items:center;gap:10px;background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.12);border-radius:8px;padding:4px 12px}' +
      '#ad-root .ad-title{display:flex;align-items:center;color:#6366f1}' +
      '#ad-root .ad-cards{display:flex;gap:10px;align-items:center}' +
      '#ad-root .ad-card{text-align:center}' +
      '#ad-root .ad-num{font-size:14px;font-weight:700;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.2}' +
      '#ad-root .ad-label{font-size:9px;color:#94a3b8;white-space:nowrap}' +
      '@media(max-width:640px){#ad-root .ad-inner{gap:6px;padding:3px 8px}#ad-root .ad-num{font-size:12px}}';
    document.head.appendChild(style);

    var nums = el.querySelectorAll('.ad-num');
    for (var i = 0; i < nums.length; i++) {
      (function (n) {
        var target = Number(n.getAttribute('data-target'));
        var start = performance.now();
        function tick(t) {
          var p = Math.min((t - start) / 800, 1);
          p = 1 - Math.pow(1 - p, 3);
          n.textContent = Math.round(p * target);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      })(nums[i]);
    }
  }



  function whenHydrated(cb) {
    var tries = 0;
    (function check() {
      var probe = document.querySelector('.container.mx-auto.px-4.h-16.flex');
      var hydrated = probe && Object.keys(probe).some(function (k) {
        return k.indexOf('__reactFiber') === 0 || k.indexOf('__reactProps') === 0;
      });
      if (hydrated || ++tries > 50) { cb(); return; }
      setTimeout(check, 100);
    })();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { whenHydrated(init); });
  } else {
    whenHydrated(init);
  }
})();