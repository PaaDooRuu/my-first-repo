
console.log("Привет! Скрипт подключен и работает.");


const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});