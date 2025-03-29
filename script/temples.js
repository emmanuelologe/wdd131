document.addEventListener("DOMContentLoaded", function () {
    // Dynamic year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Last modified date
    document.getElementById("lastModified").textContent = document.lastModified;

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});
