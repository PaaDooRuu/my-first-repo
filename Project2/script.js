
console.log("Привет! Скрипт подключен и работает.");


const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        // Убираем класс active у всех ссылок
        navLinks.forEach(l => l.classList.remove("active"));
        // Добавляем класс active только на ту, по которой кликнули
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