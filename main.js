// Navbar Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// Live Search
const searchBar = document.getElementById("searchBar");
if (searchBar) {
  searchBar.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      const text = section.innerText.toLowerCase();
      section.style.display = text.includes(term) ? "block" : "none";
    });
  });
}

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });
sections.forEach(section => observer.observe(section));

// Intro Animation — play once per session
const intro = document.getElementById("intro");
if (intro) {
  if (sessionStorage.getItem("introPlayed")) {
    intro.style.display = "none";
  } else {
    sessionStorage.setItem("introPlayed", "true");
    setTimeout(() => { intro.style.display = "none"; }, 3000);
  }
}
