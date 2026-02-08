/* ========== BARBER TEMPLATE - script.js ========== */
(function () {
  var D = window.SITE_DATA;
  if (!D) return;

  /* ---------- Accent color ---------- */
  if (D.accentColor) {
    document.documentElement.style.setProperty('--accent', D.accentColor);
  }

  /* ---------- Meta & Title ---------- */
  document.title = D.name + ' - ' + (D.category || 'Barbier');
  var metaDesc = document.getElementById('metaDesc');
  if (metaDesc && D.metaDescription) metaDesc.setAttribute('content', D.metaDescription);

  /* ---------- SVG Icons ---------- */
  var icons = {
    beard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 2 5 5 5 9c0 3 1.5 5.5 3.5 7C10 17.5 10 20 12 22c2-2 2-4.5 3.5-6 2-1.5 3.5-4 3.5-7 0-4-3-7-7-7z"/><path d="M12 2v4"/><path d="M9 6c1 1 2 1.5 3 1.5s2-.5 3-1.5"/></svg>',
    scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
    razor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h4l-1 18H8L7 3z"/><path d="M10 3h5a2 2 0 012 2v2a2 2 0 01-2 2h-4"/><line x1="8" y1="9" x2="11" y2="9"/></svg>',
    styling: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 015 5c0 2-1 3.5-2.5 4.5L13 22h-2l-1.5-10.5C8 10.5 7 9 7 7a5 5 0 015-5z"/><path d="M9 7h6"/></svg>',
    comfort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h1a2 2 0 012 2v4a2 2 0 01-2 2H3V12z"/><path d="M21 12h-1a2 2 0 00-2 2v4a2 2 0 002 2h1V12z"/><path d="M6 12V8a6 6 0 1112 0v4"/></svg>',
    expert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>',
    safety: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    quality: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>'
  };

  function icon(name) {
    return icons[name] || '';
  }

  function starsHTML(rating) {
    var full = Math.floor(rating);
    var html = '';
    for (var i = 0; i < full; i++) {
      html += icon('star');
    }
    return html;
  }

  /* ---------- Navbar ---------- */
  var navLogo = document.getElementById('navLogo');
  if (navLogo) navLogo.textContent = D.name;

  var navToggle = document.getElementById('navToggle');
  var navMobile = document.getElementById('navMobile');
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMobile.classList.toggle('open');
    });
    navMobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMobile.classList.remove('open');
      });
    });
  }

  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (navbar) {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
    }
  });

  /* ---------- Hero ---------- */
  var heroBg = document.getElementById('heroBg');
  if (heroBg && D.heroImage) {
    var img = new Image();
    img.onload = function () {
      heroBg.innerHTML = '';
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
      heroBg.appendChild(img);
    };
    img.src = D.heroImage;
  }

  var heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.textContent = D.heroTitle || '';

  var heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) heroSubtitle.textContent = D.heroSubtitle || '';

  var heroRating = document.getElementById('heroRating');
  if (heroRating && D.rating) {
    heroRating.innerHTML =
      '<div class="stars">' + starsHTML(D.rating) + '</div>' +
      '<span>' + D.rating + '/5 (' + D.reviewCount + ' avis)</span>';
  }

  /* ---------- About ---------- */
  var aboutImage = document.getElementById('aboutImage');
  if (aboutImage && D.aboutImage) {
    aboutImage.src = D.aboutImage;
    aboutImage.alt = D.name;
  }

  var aboutTitle = document.getElementById('aboutTitle');
  if (aboutTitle) aboutTitle.textContent = D.aboutTitle || '';

  var aboutDesc = document.getElementById('aboutDesc');
  if (aboutDesc) aboutDesc.textContent = D.aboutText || '';

  /* ---------- Services ---------- */
  var servicesImage = document.getElementById('servicesImage');
  if (servicesImage && D.servicesImage) {
    servicesImage.src = D.servicesImage;
    servicesImage.alt = 'Services ' + D.name;
  }

  var servicesList = document.getElementById('servicesList');
  if (servicesList && D.services) {
    servicesList.innerHTML = D.services.map(function (s) {
      return '<div class="service-item">' +
        '<div class="service-item__icon">' + icon(s.icon) + '</div>' +
        '<div class="service-item__content">' +
          '<h3 class="service-item__title">' + s.title + '</h3>' +
          '<p class="service-item__desc">' + s.desc + '</p>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ---------- Why Choose Us ---------- */
  var whyIcons = ['comfort', 'expert', 'safety', 'quality'];
  var whyGrid = document.getElementById('whyGrid');
  if (whyGrid && D.whyChooseUs) {
    whyGrid.innerHTML = D.whyChooseUs.map(function (w, i) {
      return '<div class="why-card">' +
        '<div class="why-card__icon">' + icon(whyIcons[i % whyIcons.length]) + '</div>' +
        '<h3 class="why-card__title">' + w.title + '</h3>' +
        '<p class="why-card__desc">' + w.desc + '</p>' +
      '</div>';
    }).join('');
  }

  /* ---------- Testimonials ---------- */
  var testimonialsGrid = document.getElementById('testimonialsGrid');
  if (testimonialsGrid && D.testimonials) {
    testimonialsGrid.innerHTML = D.testimonials.map(function (t) {
      var initials = t.name.split(' ').map(function (n) { return n[0]; }).join('');
      var avatarHTML = t.image
        ? '<img src="' + t.image + '" alt="' + t.name + '" onerror="this.parentElement.innerHTML=\'<div class=testimonial-card__avatar-fallback>' + initials + '</div>\'">'
        : '<div class="testimonial-card__avatar-fallback">' + initials + '</div>';

      return '<div class="testimonial-card">' +
        '<div class="testimonial-card__stars">' + starsHTML(5) + '</div>' +
        '<p class="testimonial-card__text">"' + t.text + '"</p>' +
        '<div class="testimonial-card__author">' +
          '<div class="testimonial-card__avatar">' + avatarHTML + '</div>' +
          '<div>' +
            '<div class="testimonial-card__name">' + t.name + '</div>' +
            '<div class="testimonial-card__role">' + t.role + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ---------- FAQ ---------- */
  var faqList = document.getElementById('faqList');
  if (faqList && D.faq) {
    faqList.innerHTML = D.faq.map(function (f, i) {
      return '<div class="faq-item" data-index="' + i + '">' +
        '<button class="faq-item__question">' +
          '<span>' + f.q + '</span>' +
          '<span class="faq-item__icon">' + icon('chevron') + '</span>' +
        '</button>' +
        '<div class="faq-item__answer">' +
          '<div class="faq-item__answer-inner">' + f.a + '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    faqList.addEventListener('click', function (e) {
      var btn = e.target.closest('.faq-item__question');
      if (!btn) return;
      var item = btn.parentElement;
      var wasActive = item.classList.contains('active');
      faqList.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('active');
      });
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  }

  /* ---------- CTA Section ---------- */
  var ctaSection = document.getElementById('ctaSection');
  if (ctaSection && D.ctaImage) {
    ctaSection.style.backgroundImage = 'url(' + D.ctaImage + ')';
    ctaSection.style.backgroundSize = 'cover';
    ctaSection.style.backgroundPosition = 'center';
  }

  var ctaText = document.getElementById('ctaText');
  if (ctaText) {
    ctaText.textContent = D.description || '';
  }

  var ctaBtn = document.getElementById('ctaBtn');
  if (ctaBtn && D.phone) {
    ctaBtn.href = 'tel:' + D.phone;
    ctaBtn.textContent = 'Appeler : ' + (D.phoneDisplay || D.phone);
  }

  /* ---------- Contact ---------- */
  var contactInfo = document.getElementById('contactInfo');
  if (contactInfo) {
    var items = [];

    if (D.phone) {
      items.push(
        '<div class="contact-item">' +
          '<div class="contact-item__icon">' + icon('phone') + '</div>' +
          '<div>' +
            '<div class="contact-item__label">Telephone</div>' +
            '<div class="contact-item__value"><a href="tel:' + D.phone + '">' + (D.phoneDisplay || D.phone) + '</a></div>' +
          '</div>' +
        '</div>'
      );
    }

    if (D.address) {
      items.push(
        '<div class="contact-item">' +
          '<div class="contact-item__icon">' + icon('pin') + '</div>' +
          '<div>' +
            '<div class="contact-item__label">Adresse</div>' +
            '<div class="contact-item__value">' + D.address + '</div>' +
          '</div>' +
        '</div>'
      );
    }

    if (D.hours) {
      items.push(
        '<div class="contact-item">' +
          '<div class="contact-item__icon">' + icon('clock') + '</div>' +
          '<div>' +
            '<div class="contact-item__label">Horaires</div>' +
            '<div class="contact-item__value">' + D.hours + '</div>' +
          '</div>' +
        '</div>'
      );
    }

    contactInfo.innerHTML = items.join('');
  }

  /* ---------- Contact Map ---------- */
  var contactMap = document.getElementById('contactMap');
  if (contactMap && D.googleMapsUrl) {
    contactMap.innerHTML =
      '<a class="contact__map-link" href="' + D.googleMapsUrl + '" target="_blank" rel="noopener">' +
        icon('map') +
        '<span>Voir sur Google Maps</span>' +
      '</a>';
  }

  /* ---------- Footer ---------- */
  var footerBrand = document.getElementById('footerBrand');
  if (footerBrand) footerBrand.textContent = D.name;

  var footerDesc = document.getElementById('footerDesc');
  if (footerDesc) footerDesc.textContent = D.description || '';

  var footerContact = document.getElementById('footerContact');
  if (footerContact) {
    var fc = '<h4 class="footer__heading">Contact</h4><div class="footer__contact-list">';
    if (D.phone) {
      fc += '<div class="footer__contact-item">' + icon('phone') + '<a href="tel:' + D.phone + '">' + (D.phoneDisplay || D.phone) + '</a></div>';
    }
    if (D.address) {
      fc += '<div class="footer__contact-item">' + icon('pin') + '<span>' + D.address + '</span></div>';
    }
    if (D.hours) {
      fc += '<div class="footer__contact-item">' + icon('clock') + '<span>' + D.hours + '</span></div>';
    }
    fc += '</div>';
    footerContact.innerHTML = fc;
  }

  var footerCopy = document.getElementById('footerCopy');
  if (footerCopy) {
    footerCopy.textContent = '\u00A9 ' + new Date().getFullYear() + ' ' + D.name + '. Tous droits reserves.';
  }

  /* ---------- Scroll Animations ---------- */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.scroll-animate').forEach(function (el) {
    observer.observe(el);
  });

})();
