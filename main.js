// ---- Intro: play once per session ----
(function(){
  const intro = document.getElementById('intro');
  // If the user already saw the intro in this browser tab/session, hide it immediately
  if (!intro) return;
  if (sessionStorage.getItem('introPlayed')) {
    // hide without animation (prevent flash)
    intro.remove();
    return;
  }
  // mark as played for this session
  sessionStorage.setItem('introPlayed','1');

  // after animation finishes (1.2s build + 0.9s text + small pause) remove the intro element
  const totalMs = 2600; // tuned to the CSS timings (1.2s + 0.9s + buffer)
  setTimeout(()=> {
    // fade out quickly then remove to reveal header
    intro.style.transition = 'opacity .35s ease';
    intro.style.opacity = '0';
    setTimeout(()=> intro.remove(), 400);
  }, totalMs);
})();

// ---- Navbar toggle ----
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', ()=> {
    const nav = document.getElementById('nav-links');
    if (nav) nav.classList.toggle('active');
  });

  // keyboard support
  menuToggle.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter' || e.key === ' ') menuToggle.click();
  });
}

// ---- Live search (filter sections) ----
const searchBar = document.getElementById('searchBar');
if (searchBar) {
  searchBar.addEventListener('input', (e) => {
    const term = e.target.value.trim().toLowerCase();
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (!term) {
        section.style.display = ''; // revert to CSS
        return;
      }
      const text = section.innerText.toLowerCase();
      section.style.display = text.includes(term) ? '' : 'none';
    });
  });
}

// ---- Scroll reveal ----
const sections = document.querySelectorAll('.section');
if (sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: .12});
  sections.forEach(s => observer.observe(s));
}
