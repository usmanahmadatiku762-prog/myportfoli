
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const themeBtn = document.getElementById("themeBtn");

// Open and close the mobile navigation
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a link
navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Switch between dark and light themes
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    themeBtn.textContent = isLight ? "☾" : "☀";
    themeBtn.setAttribute("aria-pressed", isLight);
});

// Automatically show the current year
document.getElementById("year").textContent =
    new Date().getFullYear();
