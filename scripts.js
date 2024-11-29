document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links li");
  const tabContents = document.querySelectorAll(".tab-content");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const tab = link.dataset.tab;

      // Hide all sections and show the active one
      tabContents.forEach(content => {
        content.classList.remove("active");
        if (content.id === tab) {
          content.classList.add("active");
        }
      });
    });
  });
});
