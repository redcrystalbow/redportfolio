// =====================
// Intro Transition
// =====================
window.addEventListener("load", () => {
  const intro = document.querySelector(".intro");

  setTimeout(() => {
    intro.style.animation = "fadeToHeader 1s ease forwards";
    document.body.classList.add("loaded");
  }, 2200); // slightly faster transition
});

// =====================
// Navbar Toggle
// =====================
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// =====================
// Live Search
// =====================
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    const text = section.innerText.toLowerCase();
    section.style.display = text.includes(term) ? "block" : "none";
  });
});

// =====================
// Scroll Reveal Animation
// =====================
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => {
  observer.observe(section);
});
