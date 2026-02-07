/* ========================================
   COIFFEUR - Script principal
   Charge siteData.json et peuple le DOM
   ======================================== */

// --- SVG Icon Map ---
const ICONS = {
  scissors: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
  comb: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="4" height="18" rx="1"/><line x1="7" y1="6" x2="14" y2="6"/><line x1="7" y1="9" x2="14" y2="9"/><line x1="7" y1="12" x2="14" y2="12"/><line x1="7" y1="15" x2="14" y2="15"/><line x1="7" y1="18" x2="14" y2="18"/></svg>',
  brush: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 00-3-3.02z"/></svg>',
  hairdryer: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12c0-3.87-3.13-7-7-7H9l-2 3v8l2 3h6c3.87 0 7-3.13 7-7z"/><circle cx="16" cy="12" r="2"/><path d="M2 10h5"/><path d="M2 14h5"/><line x1="9" y1="16" x2="6" y2="22"/></svg>',
  razor: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10v4a2 2 0 01-2 2H9a2 2 0 01-2-2V3z"/><line x1="12" y1="9" x2="12" y2="21"/><line x1="9" y1="3" x2="15" y2="3"/></svg>',
  mirror: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="7"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>',
  spray: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="8" height="12" rx="1"/><path d="M10 10V7a2 2 0 012-2v0a2 2 0 012 2v3"/><line x1="12" y1="5" x2="12" y2="2"/><line x1="9" y1="3" x2="12" y2="2"/><line x1="15" y1="3" x2="12" y2="2"/></svg>',
  shampoo: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6v4H9z"/><path d="M8 6h8l1 16H7L8 6z"/><line x1="12" y1="2" x2="12" y2="0"/><path d="M10 12c1 1 3 1 4 0"/></svg>',
  beard: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10c0-4.42 3.58-8 8-8s8 3.58 8 8"/><path d="M4 10c0 3 1.5 5.5 4 7l4 4 4-4c2.5-1.5 4-4 4-7"/><line x1="9" y1="10" x2="9" y2="13"/><line x1="15" y1="10" x2="15" y2="13"/></svg>',
  coloring: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3H5a2 2 0 00-2 2v2h18V5a2 2 0 00-2-2z"/><path d="M3 7l2 14h14l2-14"/><path d="M8 7v4c0 2 1.5 3 4 3s4-1 4-3V7"/></svg>',
  styling: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 2 4 6 4 10c0 3 2 5.5 4 7v3a2 2 0 002 2h4a2 2 0 002-2v-3c2-1.5 4-4 4-7 0-4-4-8-8-8z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="9" y1="21" x2="15" y2="21"/></svg>',
  highlights: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>',
  treatment: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21h10l1-7H6l1 7z"/><path d="M12 3c-2 0-4 1.5-4 4 0 1.5.5 3 1.5 4h5c1-1 1.5-2.5 1.5-4 0-2.5-2-4-4-4z"/><path d="M10 11v3"/><path d="M14 11v3"/><line x1="6" y1="14" x2="18" y2="14"/></svg>',
  towel: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v6a4 4 0 01-4 4H8a4 4 0 01-4-4V4z"/><path d="M4 4c0-1 1-2 2-2h12c1 0 2 1 2 2"/><line x1="8" y1="14" x2="8" y2="22"/><line x1="16" y1="14" x2="16" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>',
};

function getIcon(name, size) {
  var svg = ICONS[name];
  if (!svg) return '';
  if (size && size !== 32) {
    svg = svg.replace(/width="32"/g, 'width="' + size + '"').replace(/height="32"/g, 'height="' + size + '"');
  }
  return svg;
}

function starSVG(size, fill) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + fill + '" stroke="#f5c518" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
}

function starHalfSVG(size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="#f5c518" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/><defs><clipPath id="halfClip"><rect x="0" y="0" width="12" height="24"/></clipPath></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#f5c518" clip-path="url(#halfClip)"/></svg>';
}

function renderStars(rating, size) {
  var html = '';
  for (var i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += starSVG(size, '#f5c518');
    } else if (i - 0.5 <= rating) {
      html += starHalfSVG(size);
    } else {
      html += starSVG(size, 'none');
    }
  }
  return html;
}

function iconSVG(name, size, color) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + {
    phone: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
    mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  }[name] + '</svg>';
}

function imgFallbackSVG() {
  return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>';
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// --- Main Init ---
document.addEventListener('DOMContentLoaded', function () {
  fetch('siteData.json')
    .then(function (res) { return res.json(); })
    .then(function (data) { initSite(data); })
    .catch(function (err) { console.error('Erreur chargement siteData.json:', err); });
});

function initSite(d) {
  // Meta
  document.title = d.name + ' - ' + d.category + ' a ' + d.city;
  document.getElementById('metaDesc').setAttribute('content', d.metaDescription);

  // Navbar
  document.getElementById('navLogo').textContent = d.name;
  initNavbar();

  // Hero
  document.getElementById('heroBg').style.backgroundImage = 'url(' + d.heroImage + ')';
  document.getElementById('heroCategory').textContent = d.category;
  document.getElementById('heroTitle').textContent = d.name;
  document.getElementById('heroDesc').textContent = d.description;
  document.getElementById('heroStars').innerHTML = renderStars(d.rating, 18);
  document.getElementById('heroRatingText').textContent = d.rating + '/5 - ' + d.reviewCount + ' avis Google';
  var heroPhone = document.getElementById('heroPhone');
  heroPhone.href = 'tel:' + d.phone;

  // About
  var aboutImg = document.getElementById('aboutImg');
  aboutImg.src = d.aboutImage;
  aboutImg.alt = 'Interieur du salon ' + d.name;
  aboutImg.addEventListener('load', function () { aboutImg.classList.add('loaded'); });
  aboutImg.addEventListener('error', function () { aboutImg.style.display = 'none'; });
  document.getElementById('aboutDesc').textContent = d.description;
  document.getElementById('aboutStats').innerHTML =
    '<div class="about__stat">' + iconSVG('star', 20, d.accentColor) + '<span><strong>' + d.rating + '/5</strong> Note Google</span></div>' +
    '<div class="about__stat">' + iconSVG('clock', 20, d.accentColor) + '<span><strong>' + escapeHtml(d.hours) + '</strong></span></div>' +
    '<div class="about__stat">' + iconSVG('mapPin', 20, d.accentColor) + '<span><strong>' + escapeHtml(d.city) + '</strong></span></div>';

  // Services
  var servicesHTML = '';
  d.services.forEach(function (s) {
    servicesHTML +=
      '<div class="services__card">' +
        '<div class="services__icon">' + getIcon(s.icon, 32) + '</div>' +
        '<h3 class="services__card-title">' + escapeHtml(s.title) + '</h3>' +
        '<p class="services__card-desc">' + escapeHtml(s.desc) + '</p>' +
      '</div>';
  });
  document.getElementById('servicesGrid').innerHTML = servicesHTML;

  // Gallery
  var galleryHTML = '';
  d.gallery.forEach(function (img) {
    galleryHTML +=
      '<div class="gallery__item">' +
        '<img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt) + '" class="gallery__image" onload="this.classList.add(\'loaded\')" onerror="this.style.display=\'none\'" />' +
        '<div class="gallery__image-fallback">' + imgFallbackSVG() + '</div>' +
        '<div class="gallery__overlay"><p class="gallery__overlay-text">' + escapeHtml(img.alt) + '</p></div>' +
      '</div>';
  });
  document.getElementById('galleryGrid').innerHTML = galleryHTML;

  // Reviews
  var reviews = [
    { name: 'Marie Dupont', rating: 5, text: "Un salon exceptionnel ! Claire et son equipe sont a l'ecoute et de tres bon conseil. Ma coloration est exactement ce que je voulais. Je recommande vivement." },
    { name: 'Thomas Bernard', rating: 5, text: "Meilleur coiffeur de Paris. La coupe est parfaite, l'ambiance est agreable et les prix sont corrects pour la qualite du service. J'y retourne chaque mois." },
    { name: 'Sophie Laurent', rating: 4, text: "Tres satisfaite de mon balayage ! Le resultat est naturel et lumineux. Le salon est magnifique et l'equipe tres professionnelle. A refaire sans hesiter." },
  ];
  document.getElementById('reviewsGlobal').innerHTML =
    '<div class="reviews__global-stars">' + renderStars(d.rating, 24) + '</div>' +
    '<p class="reviews__global-text">' + d.rating + '/5 basee sur ' + d.reviewCount + ' avis Google</p>';

  var reviewsHTML = '';
  reviews.forEach(function (r) {
    reviewsHTML +=
      '<div class="reviews__card">' +
        '<div class="reviews__avatar">' + escapeHtml(r.name.charAt(0)) + '</div>' +
        '<div class="reviews__card-content">' +
          '<div class="reviews__card-header">' +
            '<strong class="reviews__name">' + escapeHtml(r.name) + '</strong>' +
            '<div class="reviews__stars">' + renderStars(r.rating, 16) + '</div>' +
          '</div>' +
          '<p class="reviews__text">' + escapeHtml(r.text) + '</p>' +
        '</div>' +
      '</div>';
  });
  document.getElementById('reviewsGrid').innerHTML = reviewsHTML;

  // Contact
  document.getElementById('contactInfo').innerHTML =
    '<div class="contact__info-item">' + iconSVG('phone', 22, d.accentColor) + '<div><strong>Telephone</strong><a href="tel:' + d.phone + '">' + escapeHtml(d.phoneDisplay) + '</a></div></div>' +
    '<div class="contact__info-item">' + iconSVG('mapPin', 22, d.accentColor) + '<div><strong>Adresse</strong><p>' + escapeHtml(d.address) + '</p></div></div>' +
    '<div class="contact__info-item">' + iconSVG('clock', 22, d.accentColor) + '<div><strong>Horaires</strong><p>' + escapeHtml(d.hours) + '</p></div></div>';

  document.getElementById('contactMap').innerHTML =
    iconSVG('mapPin', 48, d.accentColor) +
    '<p>' + escapeHtml(d.address) + '</p>' +
    '<a href="' + escapeHtml(d.googleMapsUrl) + '" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Voir sur Google Maps</a>';

  document.getElementById('contactCta').innerHTML =
    '<h3>Prenez rendez-vous des maintenant</h3>' +
    '<a href="tel:' + d.phone + '" class="btn btn--primary btn--large">' +
      iconSVG('phone', 20, '#ffffff') + escapeHtml(d.phoneDisplay) +
    '</a>';

  // Footer
  document.getElementById('footerBrand').textContent = d.name;
  document.getElementById('footerTagline').textContent = d.category;
  document.getElementById('footerAddress').textContent = d.address;
  document.getElementById('footerContact').innerHTML =
    '<h4 class="footer__heading">Contact</h4>' +
    '<p><a href="tel:' + d.phone + '">' + escapeHtml(d.phoneDisplay) + '</a></p>' +
    '<p>' + escapeHtml(d.hours) + '</p>' +
    '<p><a href="' + escapeHtml(d.googleMapsUrl) + '" target="_blank" rel="noopener noreferrer">Voir sur Google Maps</a></p>';
  document.getElementById('footerCopy').innerHTML = '&copy; ' + new Date().getFullYear() + ' ' + escapeHtml(d.name) + '. Tous droits reserves.';

  // Init scroll animations
  initScrollAnimations();

  // Smooth scroll for all anchor links
  initSmoothScroll();
}

// --- Navbar scroll behavior ---
function initNavbar() {
  var navbar = document.getElementById('navbar');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }, { passive: true });

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('navbar__links--open');
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('navbar__links--open');
    }
  });
}

// --- IntersectionObserver scroll animations ---
function initScrollAnimations() {
  var elements = document.querySelectorAll('.scroll-animate');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(function (el) { observer.observe(el); });
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
