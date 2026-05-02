  // Intersection observer for fade-up
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    nav.style.borderBottomColor = window.scrollY > 60 ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)';
  });

  // Portfolio filter
  function filterPortfolio(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.portfolio-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
        card.style.gridColumn = cat === 'all' && card.classList.contains('wide') ? 'span 2' : '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Submit button
  function handleSubmit(btn) {
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#3a8a5a';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.innerHTML = 'Send Message ↗';
      btn.style.background = '';
      btn.style.color = '';
    }, 3000);
  }

  // Counter animation for stats
  function animateCounter(el, target, suffix) {
    let current = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.innerHTML = Math.floor(current) + '<span>' + suffix + '</span>';
      if (current >= target) clearInterval(timer);
    }, 16);
  }
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const nums = [
          { el: e.target.querySelector('.stat-num'), val: 12, suf: '+' },
        ];
      }
    });
  }, { threshold: 0.5 });

  // Mobile nav
  if (window.innerWidth <= 900) {
    document.body.style.cursor = 'default';
    cursor.style.display = 'none';
    ring.style.display = 'none';
  }