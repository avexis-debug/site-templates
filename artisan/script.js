/* ========================================
   ARTISAN - Script
   Charge siteData.json et peuple le DOM
   ======================================== */

// --- SVG Icons (line-art style, 64x64 viewBox) ---
var ICONS = {
  masonry: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="20" height="12"/><rect x="36" y="8" width="20" height="12"/><rect x="4" y="24" width="20" height="12"/><rect x="28" y="24" width="20" height="12"/><rect x="52" y="24" width="8" height="12"/><rect x="8" y="40" width="20" height="12"/><rect x="36" y="40" width="20" height="12"/></svg>',
  painting: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="34" height="22" rx="3"/><line x1="10" y1="16" x2="44" y2="16"/><path d="M27 30v6"/><path d="M22 36h10v4H22z"/><path d="M26 40v16"/><path d="M28 40v16"/><path d="M20 56h14"/></svg>',
  tiling: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="24" height="24"/><rect x="34" y="6" width="24" height="24"/><rect x="6" y="34" width="24" height="24"/><rect x="34" y="34" width="24" height="24"/><line x1="18" y1="6" x2="18" y2="30"/><line x1="46" y1="6" x2="46" y2="30"/><line x1="18" y1="34" x2="18" y2="58"/><line x1="46" y1="34" x2="46" y2="58"/></svg>',
  renovation: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 56V28l24-18 24 18v28H8z"/><rect x="24" y="38" width="16" height="18"/><line x1="32" y1="38" x2="32" y2="56"/><polyline points="4 30 32 6 60 30"/><rect x="14" y="32" width="8" height="8"/><rect x="42" y="32" width="8" height="8"/></svg>',
  insulation: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="8" width="40" height="48" rx="2"/><line x1="12" y1="20" x2="52" y2="20"/><line x1="12" y1="32" x2="52" y2="32"/><line x1="12" y1="44" x2="52" y2="44"/><path d="M20 14h4"/><path d="M36 14h8"/><path d="M18 26h8"/><path d="M34 26h10"/><path d="M22 38h6"/><path d="M38 38h6"/><path d="M16 50h10"/><path d="M36 50h8"/></svg>',
  exterior: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 56h52"/><path d="M10 56V36h16v20"/><path d="M14 42h8"/><path d="M14 48h8"/><path d="M38 56V20l10-8 10 8v36"/><rect x="42" y="30" width="8" height="8"/><rect x="42" y="42" width="8" height="10"/><path d="M30 16c0-6 4-10 10-10s10 4 10 10"/></svg>'
};

// --- SVG Icons for guarantees (64x64 viewBox) ---
var GUARANTEE_ICONS = {
  shield: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6L10 16v16c0 14 10 22 22 28 12-6 22-14 22-28V16L32 6z"/><polyline points="22 32 28 38 42 24"/></svg>',
  document: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 6h22l12 12v38H16V6z"/><polyline points="38 6 38 18 50 18"/><line x1="22" y1="28" x2="42" y2="28"/><line x1="22" y1="36" x2="42" y2="36"/><line x1="22" y1="44" x2="34" y2="44"/></svg>',
  certificate: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="44" height="36" rx="3"/><line x1="20" y1="18" x2="44" y2="18"/><line x1="20" y1="26" x2="44" y2="26"/><line x1="20" y1="34" x2="34" y2="34"/><circle cx="22" cy="52" r="8"/><path d="M18 58l-2 6 6-3 6 3-2-6"/><circle cx="42" cy="52" r="8"/><path d="M38 58l-2 6 6-3 6 3-2-6"/></svg>',
  handshake: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 26h10l8-4h6l8 4"/><path d="M54 26H44l-8-4h-6"/><path d="M14 26v14l12 8"/><path d="M50 26v14l-12 8"/><path d="M26 48l6 4 6-4"/><circle cx="32" cy="30" r="4"/><path d="M28 30c-4 2-6 6-6 10"/><path d="M36 30c4 2 6 6 6 10"/></svg>'
};

// --- SVG icons for contact info (24x24 viewBox) ---
function contactIcon(name, color) {
  var paths = {
    mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 4 12 13 2 4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
  };
  return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="' + (color || 'currentColor') + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (paths[name] || '') + '</svg>';
}

// --- SVG icons for realisations (64x64 viewBox) ---
var REALISATION_ICONS = {
  'Renovation': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 56V28l24-18 24 18v28H8z"/><rect x="24" y="38" width="16" height="18"/><polyline points="4 30 32 6 60 30"/></svg>',
  'Carrelage': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="24" height="24"/><rect x="34" y="6" width="24" height="24"/><rect x="6" y="34" width="24" height="24"/><rect x="34" y="34" width="24" height="24"/></svg>',
  'Exterieur': '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 56h52"/><rect x="14" y="34" width="36" height="22"/><line x1="14" y1="44" x2="50" y2="44"/><path d="M10 34l22-14 22 14"/></svg>'
};

function getIcon(name) {
  return ICONS[name] || '';
}

function getGuaranteeIcon(name) {
  return GUARANTEE_ICONS[name] || '';
}

function getRealisationIcon(tag) {
  return REALISATION_ICONS[tag] || REALISATION_ICONS['Renovation'];
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
  // Accent color as CSS variable
  document.documentElement.style.setProperty('--accent', d.accentColor);

  // Meta
  document.title = d.name + ' - ' + d.category + ' a ' + d.city;
  var metaDesc = document.getElementById('metaDesc');
  if (metaDesc) metaDesc.setAttribute('content', d.metaDescription);

  // Header
  document.getElementById('headerName').innerHTML = d.name.replace('Pro', '<span>Pro</span>');

  // Hero
  document.getElementById('heroBadge').textContent = d.badge;
  var heroTitleEl = document.getElementById('heroTitle');
  // Split on & to bold the second part
  var titleParts = d.heroTitle.split('&');
  if (titleParts.length === 2) {
    heroTitleEl.innerHTML = escapeHtml(titleParts[0]) + '& <strong>' + escapeHtml(titleParts[1].trim()) + '</strong>';
  } else {
    heroTitleEl.textContent = d.heroTitle;
  }
  document.getElementById('heroSubtitle').textContent = d.heroSubtitle;

  // Hero CTA buttons
  document.getElementById('heroCTAPhone').href = 'tel:' + d.phone;
  document.getElementById('heroCTAPhone').textContent = 'Appeler : ' + d.phoneDisplay;

  // Trust bar
  var trustHtml = '';
  d.trustStats.forEach(function (s) {
    trustHtml += '<div class="trust-item"><span class="number">' + escapeHtml(s.value) + '</span><span class="label">' + escapeHtml(s.label) + '</span></div>';
  });
  document.getElementById('trustBar').innerHTML = trustHtml;

  // Services
  var servHtml = '';
  d.services.forEach(function (s) {
    servHtml += '<div class="service-card"><div class="icon">' + getIcon(s.icon) + '</div><h3>' + escapeHtml(s.title) + '</h3><p>' + escapeHtml(s.desc) + '</p></div>';
  });
  document.getElementById('servicesGrid').innerHTML = servHtml;

  // Process
  var procHtml = '';
  d.process.forEach(function (p, i) {
    procHtml += '<div class="step"><div class="number">' + (i + 1) + '</div><h3>' + escapeHtml(p.title) + '</h3><p>' + escapeHtml(p.desc) + '</p></div>';
  });
  document.getElementById('processSteps').innerHTML = procHtml;

  // Realisations
  var realHtml = '';
  d.realisations.forEach(function (r) {
    realHtml += '<div class="realisation-card"><div class="realisation-img">' + getRealisationIcon(r.tag) + '</div><div class="realisation-info"><h4>' + escapeHtml(r.title) + '</h4><p>' + escapeHtml(r.desc) + '</p><span class="tag">' + escapeHtml(r.tag) + '</span></div></div>';
  });
  document.getElementById('realisationsGrid').innerHTML = realHtml;

  // Testimonials
  var avisHtml = '';
  d.testimonials.forEach(function (t) {
    avisHtml += '<div class="avis-card"><span class="stars">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>' +
      '</span><p>' + escapeHtml(t.text) + '</p><div class="author">' + escapeHtml(t.name) + '</div><div class="project">' + escapeHtml(t.project) + '</div></div>';
  });
  document.getElementById('avisGrid').innerHTML = avisHtml;

  // Guarantees
  var guarHtml = '';
  d.guarantees.forEach(function (g) {
    guarHtml += '<div class="garantie"><div class="icon">' + getGuaranteeIcon(g.icon) + '</div><h3>' + escapeHtml(g.title) + '</h3><p>' + escapeHtml(g.desc) + '</p></div>';
  });
  document.getElementById('garantiesGrid').innerHTML = guarHtml;

  // Contact info
  document.getElementById('contactAddress').innerHTML = contactIcon('mapPin', d.accentColor) + ' ' + escapeHtml(d.address);
  document.getElementById('contactPhone').innerHTML = contactIcon('phone', d.accentColor) + ' ' + escapeHtml(d.phoneDisplay);
  document.getElementById('contactPhone').href = 'tel:' + d.phone;
  document.getElementById('contactEmail').innerHTML = contactIcon('mail', d.accentColor) + ' ' + escapeHtml(d.email);
  document.getElementById('contactEmail').href = 'mailto:' + d.email;
  document.getElementById('contactHours').innerHTML = contactIcon('clock', d.accentColor) + ' ' + escapeHtml(d.hours);

  // Zone
  var zoneHtml = '';
  d.zone.forEach(function (z) {
    zoneHtml += '<li>' + escapeHtml(z) + '</li>';
  });
  document.getElementById('zoneList').innerHTML = zoneHtml;

  // Form select options from services
  var selectEl = document.getElementById('serviceSelect');
  if (selectEl) {
    var optHtml = '<option value="">Type de travaux</option>';
    d.services.forEach(function (s) {
      optHtml += '<option>' + escapeHtml(s.title) + '</option>';
    });
    optHtml += '<option>Autre</option>';
    selectEl.innerHTML = optHtml;
  }

  // Footer
  document.getElementById('footerText').innerHTML = '&copy; ' + new Date().getFullYear() + ' ' + escapeHtml(d.name) + ' - Tous droits reserves | SIRET : 000 000 000 00000 | Garantie decennale | Certifie RGE & Qualibat';

  // Init smooth scroll
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
