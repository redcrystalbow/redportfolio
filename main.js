// Navbar Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// Live Search
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    const text = section.innerText.toLowerCase();
    section.style.display = text.includes(term) ? "block" : "none";
  });
});
