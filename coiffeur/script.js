/* ========================================
   COIFFEUR - Shelone-style Script
   Charge siteData.json et peuple le DOM
   ======================================== */

// --- SVG Icons (line-art style) ---
var ICONS = {
  scissors: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="8"/><circle cx="18" cy="46" r="8"/><line x1="52" y1="10" x2="24" y2="40"/><line x1="36" y1="36" x2="52" y2="54"/><line x1="24" y1="24" x2="30" y2="30"/></svg>',
  coloring: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M32 8c-8 0-16 6-16 16 0 6 2 10.5 6 14v6h20v-6c4-3.5 6-8 6-14 0-10-8-16-16-16z"/><line x1="22" y1="44" x2="42" y2="44"/><line x1="22" y1="50" x2="42" y2="50"/><path d="M26 56h12"/><path d="M32 8v-4"/><path d="M20 12l-4-4"/><path d="M44 12l4-4"/></svg>',
  styling: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6c-6 0-12 4-14 10-2 6 0 12 4 16"/><path d="M32 6c6 0 12 4 14 10 2 6 0 12-4 16"/><path d="M22 32c-2 4-2 8 0 12"/><path d="M42 32c2 4 2 8 0 12"/><path d="M22 44h20"/><path d="M26 44v10"/><path d="M38 44v10"/><line x1="22" y1="54" x2="42" y2="54"/><circle cx="32" cy="20" r="4"/></svg>',
  brush: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 34l22-22a6 6 0 018 8L32 42"/><path d="M18 38c-4 0-8 4-8 8 0 4-4 4-4 6 2 2 6 4 10 4 6 0 10-4 10-10a8 8 0 00-8-8z"/></svg>',
  highlights: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="10"/><path d="M32 6v8"/><path d="M32 50v8"/><path d="M6 32h8"/><path d="M50 32h8"/><path d="M13.6 13.6l5.6 5.6"/><path d="M44.8 44.8l5.6 5.6"/><path d="M50.4 13.6l-5.6 5.6"/><path d="M19.2 44.8l-5.6 5.6"/></svg>',
  treatment: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 54h28l2-18H16l2 18z"/><path d="M32 10c-6 0-10 4-10 10 0 4 2 8 4 10h12c2-2 4-6 4-10 0-6-4-10-10-10z"/><path d="M26 30v6"/><path d="M38 30v6"/><line x1="16" y1="36" x2="48" y2="36"/></svg>',
  beard: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 26c0-11 9-20 20-20s20 9 20 20"/><path d="M12 26c0 8 4 14 10 18l10 10 10-10c6-4 10-10 10-18"/><line x1="24" y1="26" x2="24" y2="34"/><line x1="40" y1="26" x2="40" y2="34"/></svg>',
};

function getIcon(name) {
  return ICONS[name] || '';
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function svgIcon(name, size, color) {
  var paths = {
    phone: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
    mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  };
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + (color || 'currentColor') + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (paths[name] || '') + '</svg>';
}

// --- Main ---
document.addEventListener('DOMContentLoaded', function () {
  if (typeof SITE_DATA !== 'undefined') {
    initSite(SITE_DATA);
  }
});

function initSite(d) {
  // Meta
  document.title = d.name + ' - ' + d.category + ' a ' + d.city;
  document.getElementById('metaDesc').setAttribute('content', d.metaDescription);

  // Navbar
  document.getElementById('navLogo').textContent = d.name + '.';
  document.getElementById('navPhone').href = 'tel:' + d.phone;
  document.getElementById('navPhoneMobile').href = 'tel:' + d.phone;
  initNavbar();

  // Hero
  document.getElementById('heroTitle').textContent = d.heroTitle;
  document.getElementById('heroSubtitle').textContent = d.heroSubtitle;
  var heroImg = document.getElementById('heroImage');
  heroImg.src = d.heroImage;
  heroImg.alt = d.name;
  heroImg.addEventListener('load', function () { heroImg.classList.add('loaded'); });
  heroImg.addEventListener('error', function () { heroImg.style.display = 'none'; });

  // Hero stats
  var statsHtml = '';
  d.stats.forEach(function (s) {
    statsHtml += '<div class="hero__stat"><span class="hero__stat-value">' + escapeHtml(s.value) + '</span><span class="hero__stat-label">' + escapeHtml(s.label) + '</span></div>';
  });
  document.getElementById('heroStats').innerHTML = statsHtml;

  // Services
  var servHtml = '';
  d.services.forEach(function (s) {
    servHtml += '<div class="services__card"><div class="services__icon">' + getIcon(s.icon) + '</div><h3 class="services__card-title">' + escapeHtml(s.title) + '</h3><p class="services__card-desc">' + escapeHtml(s.desc) + '</p></div>';
  });
  document.getElementById('servicesGrid').innerHTML = servHtml;

  // About
  var aboutHtml = '';
  d.aboutTexts.forEach(function (t) {
    aboutHtml += '<p>' + escapeHtml(t) + '</p>';
  });
  document.getElementById('aboutTexts').innerHTML = aboutHtml;
  var aboutImg = document.getElementById('aboutImage');
  aboutImg.src = d.aboutImage;
  aboutImg.alt = 'Salon ' + d.name;
  aboutImg.addEventListener('load', function () { aboutImg.classList.add('loaded'); });
  aboutImg.addEventListener('error', function () { aboutImg.style.display = 'none'; });

  // Gallery
  initGallery(d);

  // Team
  var teamHtml = '';
  d.team.forEach(function (m) {
    teamHtml += '<div class="team__member"><div class="team__photo-wrapper"><img src="' + escapeHtml(m.image) + '" alt="' + escapeHtml(m.name) + '" class="team__photo" onload="this.classList.add(\'loaded\')" onerror="this.style.display=\'none\'"/><div class="team__photo-fallback">' + escapeHtml(m.name.charAt(0)) + '</div></div><p class="team__name">' + escapeHtml(m.name) + '</p><p class="team__role">' + escapeHtml(m.role) + '</p></div>';
  });
  document.getElementById('teamGrid').innerHTML = teamHtml;

  // CTA
  if (d.ctaImage) {
    var ctaSec = document.getElementById('ctaSection');
    ctaSec.style.backgroundImage = 'url(' + d.ctaImage + ')';
  }
  document.getElementById('ctaText').textContent = d.ctaText;
  document.getElementById('ctaBtn').href = 'tel:' + d.phone;

  // Testimonials
  initTestimonials(d);

  // Contact
  document.getElementById('contactInfo').innerHTML =
    '<div class="contact__info-item"><div class="contact__info-icon">' + svgIcon('phone', 20, '#c9a96e') + '</div><div><strong>Telephone</strong><a href="tel:' + d.phone + '">' + escapeHtml(d.phoneDisplay) + '</a></div></div>' +
    '<div class="contact__info-item"><div class="contact__info-icon">' + svgIcon('mapPin', 20, '#c9a96e') + '</div><div><strong>Adresse</strong><p>' + escapeHtml(d.address) + '</p></div></div>' +
    '<div class="contact__info-item"><div class="contact__info-icon">' + svgIcon('clock', 20, '#c9a96e') + '</div><div><strong>Horaires</strong><p>' + escapeHtml(d.hours) + '</p></div></div>';

  document.getElementById('contactMap').innerHTML =
    svgIcon('mapPin', 40, '#c9a96e') +
    '<p>' + escapeHtml(d.address) + '</p>' +
    '<a href="' + escapeHtml(d.googleMapsUrl) + '" target="_blank" rel="noopener noreferrer" class="contact__map-btn">Voir sur Google Maps</a>';

  // Footer
  document.getElementById('footerBrand').textContent = d.name + '.';
  document.getElementById('footerDesc').textContent = d.description;
  document.getElementById('footerContact').innerHTML =
    '<h4 class="footer__heading">Contact</h4>' +
    '<p><a href="tel:' + d.phone + '">' + escapeHtml(d.phoneDisplay) + '</a></p>' +
    '<p>' + escapeHtml(d.hours) + '</p>' +
    '<p>' + escapeHtml(d.address) + '</p>';
  document.getElementById('footerCopy').innerHTML = '&copy; ' + new Date().getFullYear() + ' ' + escapeHtml(d.name) + '. Tous droits reserves.';

  // Scroll animations + smooth scroll
  initScrollAnimations();
  initSmoothScroll();
}

// --- Navbar ---
function initNavbar() {
  var navbar = document.getElementById('navbar');
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
  }, { passive: true });

  toggle.addEventListener('click', function () {
    mobile.classList.toggle('navbar__mobile--open');
  });

  mobile.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      mobile.classList.remove('navbar__mobile--open');
    }
  });
}

// --- Gallery carousel ---
function initGallery(d) {
  var track = document.getElementById('galleryTrack');
  var html = '';
  d.gallery.forEach(function (img) {
    var overlayHtml = '';
    if (img.label) {
      overlayHtml = '<div class="gallery__item-overlay"><p class="gallery__item-label">' + escapeHtml(img.label) + '</p>' + (img.count ? '<p class="gallery__item-count">' + escapeHtml(img.count) + '</p>' : '') + '</div>';
    } else {
      overlayHtml = '<div class="gallery__item-overlay"><p class="gallery__item-label">' + escapeHtml(img.alt) + '</p></div>';
    }
    html += '<div class="gallery__item"><img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt) + '" onload="this.classList.add(\'loaded\')" onerror="this.style.display=\'none\'"/><div class="gallery__item-fallback"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg></div>' + overlayHtml + '</div>';
  });
  track.innerHTML = html;

  var pos = 0;
  var itemWidth = 260 + 20; // flex item + gap
  var maxScroll = Math.max(0, d.gallery.length * itemWidth - track.parentElement.offsetWidth);

  document.getElementById('galleryPrev').addEventListener('click', function () {
    pos = Math.max(0, pos - itemWidth * 2);
    track.style.transform = 'translateX(-' + pos + 'px)';
  });

  document.getElementById('galleryNext').addEventListener('click', function () {
    pos = Math.min(maxScroll, pos + itemWidth * 2);
    track.style.transform = 'translateX(-' + pos + 'px)';
  });
}

// --- Testimonials slider ---
function initTestimonials(d) {
  var slide = document.getElementById('testimonialSlide');
  var dots = document.getElementById('testimonialDots');
  var current = 0;

  function renderSlide(idx) {
    var t = d.testimonials[idx];
    slide.innerHTML =
      '<div class="testimonials__image-wrapper">' +
        '<img src="' + escapeHtml(t.image) + '" alt="' + escapeHtml(t.name) + '" class="testimonials__image" onload="this.classList.add(\'loaded\')" onerror="this.style.display=\'none\'"/>' +
        '<div class="testimonials__image-fallback">' + escapeHtml(t.name.charAt(0)) + '</div>' +
      '</div>' +
      '<div class="testimonials__content">' +
        '<div class="testimonials__quote-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7H7a4 4 0 00-4 4v1a3 3 0 003 3h1a2 2 0 012 2v0a2 2 0 01-2 2H6"/><path d="M21 7h-4a4 4 0 00-4 4v1a3 3 0 003 3h1a2 2 0 012 2v0a2 2 0 01-2 2h-1"/></svg></div>' +
        '<p class="testimonials__text">"' + escapeHtml(t.text) + '"</p>' +
        '<p class="testimonials__name">' + escapeHtml(t.name) + '</p>' +
        '<p class="testimonials__role">' + escapeHtml(t.role) + ' de ' + escapeHtml(d.name) + '</p>' +
      '</div>';

    // Update dots
    var allDots = dots.querySelectorAll('.testimonials__dot');
    allDots.forEach(function (dot, i) {
      dot.classList.toggle('testimonials__dot--active', i === idx);
    });
  }

  // Build dots
  var dotsHtml = '';
  d.testimonials.forEach(function (_, i) {
    dotsHtml += '<button class="testimonials__dot' + (i === 0 ? ' testimonials__dot--active' : '') + '" data-idx="' + i + '" aria-label="Avis ' + (i + 1) + '"></button>';
  });
  dots.innerHTML = dotsHtml;

  dots.addEventListener('click', function (e) {
    var btn = e.target.closest('.testimonials__dot');
    if (!btn) return;
    current = parseInt(btn.dataset.idx, 10);
    renderSlide(current);
  });

  renderSlide(0);

  // Auto-rotate every 6s
  setInterval(function () {
    current = (current + 1) % d.testimonials.length;
    renderSlide(current);
  }, 6000);
}

// --- Scroll animations ---
function initScrollAnimations() {
  var els = document.querySelectorAll('.scroll-animate');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { observer.observe(el); });
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
