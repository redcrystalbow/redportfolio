// Intro Animation: Play once per visit
window.addEventListener("load", () => {
  if (!localStorage.getItem("introPlayed")) {
    document.querySelector(".intro").style.display = "flex";
    localStorage.setItem("introPlayed", "true");
  } else {
    document.querySelector(".intro").style.display = "none";
  }
});

// Navbar search function
const searchBar = document.getElementById("searchBar");
if (searchBar) {
  searchBar.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    const sections = document.querySelectorAll(".section, .card");
    sections.forEach(section => {
      const text = section.innerText.toLowerCase();
      section.style.display = text.includes(term) ? "block" : "none";
    });
  });
}
