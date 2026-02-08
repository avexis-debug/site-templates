/* ========================================
   RESTAURANT - Script
   Charge siteData.json et peuple le DOM
   ======================================== */

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

  /* ---------- Accent color ---------- */
  if (d.accentColor) {
    document.documentElement.style.setProperty('--accent', d.accentColor);
  }

  /* ---------- Meta & Title ---------- */
  document.title = d.name + ' - ' + d.category;
  var metaDesc = document.getElementById('metaDesc');
  if (metaDesc && d.metaDescription) metaDesc.setAttribute('content', d.metaDescription);

  /* ---------- Header ---------- */
  document.getElementById('headerName').innerHTML = escapeHtml(d.name);
  document.getElementById('navReserveBtn').href = '#reservation';

  /* ---------- Hero ---------- */
  document.getElementById('heroTagline').textContent = d.heroTagline;
  document.getElementById('heroTitle').textContent = d.heroTitle;
  document.getElementById('heroSubtitle').textContent = d.heroSubtitle;
  document.getElementById('heroReserveBtn').href = '#reservation';
  document.getElementById('heroCarteBtn').href = '#carte';

  /* ---------- About ---------- */
  document.getElementById('aboutTitle').textContent = d.aboutTitle;
  var aboutHtml = '';
  d.aboutTexts.forEach(function (t) {
    aboutHtml += '<p>' + escapeHtml(t) + '</p>';
  });
  document.getElementById('aboutTexts').innerHTML = aboutHtml;

  /* ---------- Menu ---------- */
  var menuHtml = '';
  d.menu.forEach(function (cat) {
    menuHtml += '<div class="menu-category">';
    menuHtml += '<h3>' + escapeHtml(cat.category) + '</h3>';
    cat.items.forEach(function (item) {
      menuHtml += '<div class="menu-item">';
      menuHtml += '<div class="menu-item-header">';
      menuHtml += '<h4>' + escapeHtml(item.name) + '</h4>';
      menuHtml += '<span class="price">' + escapeHtml(item.price) + ' &euro;</span>';
      menuHtml += '</div>';
      menuHtml += '<p>' + escapeHtml(item.desc) + '</p>';
      menuHtml += '</div>';
    });
    menuHtml += '</div>';
  });
  document.getElementById('menuGrid').innerHTML = menuHtml;

  /* ---------- Formules ---------- */
  document.getElementById('formulesSubtitle').textContent = d.formulesSubtitle;
  var formulesHtml = '';
  d.formules.forEach(function (f) {
    formulesHtml += '<div class="formule-card">';
    formulesHtml += '<h3>' + escapeHtml(f.title) + '</h3>';
    formulesHtml += '<div class="price">' + escapeHtml(f.price) + ' &euro;</div>';
    formulesHtml += '<ul>';
    f.items.forEach(function (li) {
      formulesHtml += '<li>' + escapeHtml(li) + '</li>';
    });
    formulesHtml += '</ul>';
    formulesHtml += '</div>';
  });
  document.getElementById('formulesGrid').innerHTML = formulesHtml;

  /* ---------- Testimonials ---------- */
  var avisHtml = '';
  d.testimonials.forEach(function (t) {
    avisHtml += '<div class="avis-card">';
    avisHtml += '<span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>';
    avisHtml += '<p>' + escapeHtml(t.text) + '</p>';
    avisHtml += '<div class="author">&mdash; ' + escapeHtml(t.name) + '</div>';
    avisHtml += '</div>';
  });
  document.getElementById('avisGrid').innerHTML = avisHtml;

  /* ---------- Reservation / Contact ---------- */
  document.getElementById('contactAddress').textContent = d.address;
  document.getElementById('contactPhone').textContent = d.phoneDisplay;
  document.getElementById('contactPhone').href = 'tel:' + d.phone;
  document.getElementById('contactEmail').textContent = d.email;
  document.getElementById('contactEmail').href = 'mailto:' + d.email;

  /* ---------- Horaires ---------- */
  var horairesHtml = '';
  d.horaires.forEach(function (h) {
    horairesHtml += '<tr><td>' + escapeHtml(h.jour) + '</td><td>' + escapeHtml(h.heures) + '</td></tr>';
  });
  document.getElementById('horairesTable').innerHTML = horairesHtml;

  /* ---------- Footer ---------- */
  document.getElementById('footerCopy').innerHTML = '&copy; ' + new Date().getFullYear() + ' ' + escapeHtml(d.name) + ' - Tous droits reserves';

  /* ---------- Smooth scroll ---------- */
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
