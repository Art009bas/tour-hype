// TourHype - Main JS
document.addEventListener('DOMContentLoaded', function() {
  
  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('filter-btn--active'); });
      btn.classList.add('filter-btn--active');
      
      // Demo filter animation
      document.querySelectorAll('.tour-card').forEach(function(card, i) {
        card.style.transition = 'all .3s ease';
        card.style.opacity = '0.3';
        card.style.transform = 'scale(0.95)';
        setTimeout(function() {
          card.style.opacity = '1';
          card.style.transform = '';
        }, 100 + i * 80);
      });
    });
  });

  // Phone input mask
  var phoneInput = document.querySelector('.cta__input');
  if (phoneInput) {
    phoneInput.addEventListener('focus', function() {
      if (!this.value) this.value = '+7 (';
    });
    phoneInput.addEventListener('input', function(e) {
      var x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      if (x) this.value = !x[2] ? '+7 (' + x[1] : '+7 (' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });
  }

  // Scroll animation
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.benefit-card, .proof-card').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all .6s ease-out';
    observer.observe(el);
  });
});
