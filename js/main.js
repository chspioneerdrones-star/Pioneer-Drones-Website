// Pioneer Drones — Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // ===== Mobile Navigation Toggle =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Donate Page: Frequency Toggle =====
  const freqBtns = document.querySelectorAll('.donate-freq-btn');
  freqBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      freqBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  // ===== Donate Page: Amount Selection =====
  const amountBtns = document.querySelectorAll('.donate-amount-btn');
  const donateBtn = document.getElementById('donateBtn');

  amountBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      amountBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      if (donateBtn) {
        const amount = this.getAttribute('data-amount');
        const formatted = parseInt(amount) >= 1000 ? '$' + (parseInt(amount) / 1000) + 'K' : '$' + amount;
        donateBtn.textContent = 'Donate ' + (parseInt(amount) >= 1000 ? '$1,000' : '$' + amount);
      }
    });
  });
});
