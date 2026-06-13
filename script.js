/* ============================================================
   UNNATI SAXENA — PORTFOLIO SCRIPTS
   ============================================================ */

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx=0, my=0, rx=0, ry=0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

/* ── NAV SCROLL SHADOW ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 65);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));

/* ── ACTIVE NAV HIGHLIGHT ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-resume)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
  });
  navLinks.forEach(a => {
    const isActive = a.getAttribute('href') === '#' + current;
    a.style.color = isActive ? 'var(--b-500)' : '';
  });
});

/* ── TYPING EFFECT (hero subtitle) ── */
const roles = [
  'Software Engineer',
  'CSE Student @ IMS',
  'DSA Enthusiast',
  'Full Stack Developer',
  'Java & Python Dev',
];
const typingEl = document.getElementById('typing-role');
if (typingEl) {
  let roleIdx = 0, charIdx = 0, deleting = false;
  function typeLoop() {
    const current = roles[roleIdx];
    if (!deleting) {
      typingEl.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      typingEl.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  setTimeout(typeLoop, 1000);
}

/* ── SMOOTH NAV SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── PARTICLE CANVAS (hero background) ── */
const canvas = document.getElementById('particle-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); initParticles(); });

  function initParticles() {
    particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.15,
    }));
  }
  initParticles();

  const BLUES = ['rgba(37,99,235,', 'rgba(59,130,246,', 'rgba(99,102,241,', 'rgba(14,165,233,'];

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      // move
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      // draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = BLUES[i % BLUES.length] + p.alpha + ')';
      ctx.fill();

      // connect nearby
      particles.slice(i + 1).forEach(p2 => {
        const dx = p.x - p2.x, dy = p.y - p2.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(59,130,246,${0.06 * (1 - dist/120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });
    });
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

/* ── COUNTER ANIMATION ── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const dur = 1600;
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target % 1 === 0
        ? Math.round(target * eased)
        : (target * eased).toFixed(2);
      el.textContent = prefix + val + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}
// trigger once hero is visible
const heroSec = document.getElementById('hero');
if (heroSec) {
  const counterObs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { animateCounters(); counterObs.disconnect(); }
  }, { threshold: 0.3 });
  counterObs.observe(heroSec);
}
