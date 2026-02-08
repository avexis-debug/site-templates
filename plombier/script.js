/* ========================================
   PLOMBIER - Script
   Charge siteData.json et peuple le DOM
   ======================================== */

// --- SVG Icons (line-art style, 64x64 viewBox) ---
var ICONS = {
  wrench: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M40 8a14 14 0 00-14 14c0 2 .4 3.8 1 5.6L10 44.6a6 6 0 008.4 8.4l17-17c1.8.6 3.6 1 5.6 1a14 14 0 0014-14l-8 8-6-2-2-6 8-8c-2-.6-4-1-6-1z"/></svg>',
  shower: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12h24a4 4 0 014 4v4H16v-4a4 4 0 014-4z"/><line x1="16" y1="20" x2="48" y2="20"/><line x1="22" y1="20" x2="22" y2="28"/><line x1="30" y1="20" x2="30" y2="28"/><line x1="38" y1="20" x2="38" y2="28"/><line x1="26" y1="28" x2="26" y2="34"/><line x1="34" y1="28" x2="34" y2="34"/><line x1="42" y1="20" x2="42" y2="28"/><circle cx="22" cy="30" r="1.5"/><circle cx="30" cy="30" r="1.5"/><circle cx="38" cy="30" r="1.5"/><circle cx="26" cy="36" r="1.5"/><circle cx="34" cy="36" r="1.5"/><circle cx="42" cy="30" r="1.5"/></svg>',
  flame: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6c0 0-16 14-16 30a16 16 0 0032 0C48 20 32 6 32 6z"/><path d="M32 58a8 8 0 01-8-8c0-8 8-16 8-16s8 8 8 16a8 8 0 01-8 8z"/></svg>',
  house: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 30L32 10l24 20"/><path d="M14 28v22h36V28"/><path d="M26 50V38h12v12"/></svg>',
  droplet: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6S14 24 14 38a18 18 0 0036 0C50 24 32 6 32 6z"/><path d="M24 40a8 8 0 008 8"/></svg>',
  pipe: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 20h16v24H10z"/><path d="M26 28h12v8H26z"/><path d="M38 20h16v24H38z"/><line x1="10" y1="32" x2="26" y2="32"/><line x1="38" y1="32" x2="54" y2="32"/></svg>',
  lightning: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="36,4 16,36 30,36 28,60 48,28 34,28"/></svg>',
  money: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="24"/><path d="M32 14v36"/><path d="M24 22h12a6 6 0 010 12H22"/><path d="M22 34h16a6 6 0 010 12H24"/></svg>',
  trophy: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h28v16a14 14 0 01-28 0V10z"/><path d="M18 16H10a4 4 0 00-4 4v2a10 10 0 0010 10h2"/><path d="M46 16h8a4 4 0 014 4v2a10 10 0 01-10 10h-2"/><line x1="32" y1="40" x2="32" y2="50"/><path d="M22 50h20v4H22z"/></svg>',
  check: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="24"/><polyline points="20,32 28,42 44,22"/></svg>',
  phone: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M52 44v6a4 4 0 01-4.4 4A39.6 39.6 0 018 10.4 4 4 0 0112 6h6a4 4 0 014 3.4 25.7 25.7 0 001.4 5.6 4 4 0 01-.9 4.2L18.2 23.6a32 32 0 0022.2 22.2l4.4-4.3a4 4 0 014.2-.9 25.7 25.7 0 005.6 1.4A4 4 0 0152 44z"/></svg>',
  mapPin: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M48 24c0 14-16 30-16 30S16 38 16 24a16 16 0 0132 0z"/><circle cx="32" cy="24" r="6"/></svg>',
  mail: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="52" height="36" rx="4"/><polyline points="6,14 32,38 58,14"/></svg>',
  clock: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="24"/><polyline points="32,16 32,32 42,38"/></svg>'
};

function getIcon(name) {
  return ICONS[name] || '';
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// --- Main ---
document.addEventListener('DOMContentLoaded', function () {
  fetch('siteData.json')
    .then(function (res) { return res.json(); })
    .then(function (data) { initSite(data); })
    .catch(function (err) { console.error('Erreur chargement siteData.json:', err); });
});

function initSite(d) {
  // Meta
  document.title = escapeHtml(d.name) + ' - ' + escapeHtml(d.category) + ' a ' + escapeHtml(d.city);
  document.getElementById('metaDesc').setAttribute('content', d.metaDescription);

  // Header
  var logoName = d.name.replace(/Pro$/, '');
  var logoSuffix = d.name.replace(logoName, '');
  document.getElementById('headerLogo').innerHTML = escapeHtml(logoName) + '<span>' + escapeHtml(logoSuffix) + '</span>';

  // Hero
  document.getElementById('heroTitle').textContent = d.heroTitle;
  document.getElementById('heroSubtitle').textContent = d.heroSubtitle;
  document.getElementById('heroCallBtn').href = 'tel:' + d.phone;
  document.getElementById('heroCallBtn').textContent = 'Appeler Maintenant';

  // Urgence banner
  document.getElementById('urgenceText').textContent = d.urgenceText;
  var urgenceLink = document.getElementById('urgencePhone');
  urgenceLink.href = 'tel:' + d.phone;
  urgenceLink.textContent = d.phoneDisplay;

  // Services
  var servHtml = '';
  d.services.forEach(function (s) {
    servHtml += '<div class="service-card">' +
      '<div class="icon">' + getIcon(s.icon) + '</div>' +
      '<h3>' + escapeHtml(s.title) + '</h3>' +
      '<p>' + escapeHtml(s.desc) + '</p>' +
      '</div>';
  });
  document.getElementById('servicesGrid').innerHTML = servHtml;

  // Why choose us
  var whyHtml = '';
  d.whyChooseUs.forEach(function (f) {
    whyHtml += '<div class="feature">' +
      '<div class="icon">' + getIcon(f.icon) + '</div>' +
      '<h3>' + escapeHtml(f.title) + '</h3>' +
      '<p>' + escapeHtml(f.desc) + '</p>' +
      '</div>';
  });
  document.getElementById('featuresGrid').innerHTML = whyHtml;

  // Tarifs
  var tarifHtml = '';
  d.tarifs.forEach(function (t) {
    var itemsHtml = '';
    t.items.forEach(function (item) {
      itemsHtml += '<li>' + escapeHtml(item) + '</li>';
    });
    tarifHtml += '<div class="tarif-card">' +
      '<h3>' + escapeHtml(t.title) + '</h3>' +
      '<div class="price">' + escapeHtml(t.price) + '</div>' +
      '<ul>' + itemsHtml + '</ul>' +
      '</div>';
  });
  document.getElementById('tarifsGrid').innerHTML = tarifHtml;

  // Testimonials
  if (d.testimonials && d.testimonials.length > 0) {
    var testHtml = '';
    d.testimonials.forEach(function (t) {
      testHtml += '<div class="testimonial">' +
        '<p class="testimonial-text">"' + escapeHtml(t.text) + '"</p>' +
        '<p class="testimonial-name">- ' + escapeHtml(t.name) + '</p>' +
        '</div>';
    });
    document.getElementById('testimonialsGrid').innerHTML = testHtml;
  }

  // Contact info
  document.getElementById('contactInfo').innerHTML =
    '<p>' + getIcon('mapPin') + ' ' + escapeHtml(d.address) + '</p>' +
    '<p>' + getIcon('phone') + ' <a href="tel:' + d.phone + '">' + escapeHtml(d.phoneDisplay) + '</a></p>' +
    '<p>' + getIcon('mail') + ' <a href="mailto:' + d.email + '">' + escapeHtml(d.email) + '</a></p>' +
    '<p>' + getIcon('clock') + ' ' + escapeHtml(d.hours) + '</p>';

  // Contact form options
  if (d.formOptions && d.formOptions.length > 0) {
    var selectEl = document.getElementById('formSelect');
    d.formOptions.forEach(function (opt) {
      var option = document.createElement('option');
      option.textContent = opt;
      selectEl.appendChild(option);
    });
  }

  // Footer
  document.getElementById('footerText').innerHTML = '&copy; ' + new Date().getFullYear() + ' ' + escapeHtml(d.name) + ' - Tous droits reserves | Artisan certifie RGE';

  // Apply accent colors as CSS custom properties
  var root = document.documentElement;
  if (d.accentColor) root.style.setProperty('--accent', d.accentColor);
  if (d.accentColorDark) root.style.setProperty('--accent-dark', d.accentColorDark);
  if (d.urgenceColor) root.style.setProperty('--urgence', d.urgenceColor);

  // Smooth scroll
  initSmoothScroll();
}

// --- Smooth scroll ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
