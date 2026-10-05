// Анонимен брояч на посещения: праща само адрес на страница и откъде идва посетителят.
// Без бисквитки, без IP адрес, без идентификатор на посетителя. Данните са в Cloudflare Worker на сайта.
(function () {
  'use strict';
  try {
    if (navigator.doNotTrack === '1') return;
    var u = 'https://dimittech-offers.dimitar-beograd.workers.dev/hit?p=' + encodeURIComponent(location.pathname) + '&r=' + encodeURIComponent(document.referrer || '');
    if (navigator.sendBeacon) navigator.sendBeacon(u); else fetch(u, { method: 'POST', keepalive: true, mode: 'no-cors' });
  } catch (e) {}
})();
