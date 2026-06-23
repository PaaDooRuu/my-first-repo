const characters = [
    { id: 1, title: "Варка", category: "mondstadt", description: "Варка — рыцарь Анемо из Мондштадта. Очень харизматичный персонаж с интересной историей." },
    { id: 2, title: "Мавуика", category: "natlan", description: "Мавуика — Архонт Пиро из Натлана. Очень мудрый и сильный персонаж." },
    { id: 3, title: "Чжун Ли", category: "liyue", description: "Чжун Ли — Архонт Гео из Ли Юэ.Древний и мудрый персонаж." },
    { id: 4, title: "Райдэн", category: "other", description: "Райдэн — Архонт Электро из Инадзумы. Грозная и величественная воительница." },
    { id: 5, title: "Дилюк", category: "mondstadt", description: "Дилюк — владелец винодельни из Мондштадта. Мастер клинка и борец с преступностью." }
];

const regions = [
    { id: 1, title: "Мондштадт", category: "mondstadt", description: "Город свободы и ветра. Первый регион, который я исследовал в игре." },
    { id: 2, title: "Ли Юэ", category: "liyue", description: "Регион контрактов и камней. Очень красивый и вдохновляющий." },
    { id: 3, title: "Натлан", category: "natlan", description: "Регион огня и войны. Дом Мавуики и других сильных воинов." }
];

function createCard(project) {
    return `
        <article class="project-card" data-category="${project.category}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </article>
    `;
}

function renderProjects(list, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = list.map(createCard).join("");
    }
}

renderProjects(characters, "projects-grid");
renderProjects(regions, "projects-grid-2");

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        const filteredCharacters = filter === "all"
            ? characters
            : characters.filter(p => p.category === filter);

        const filteredRegions = filter === "all"
            ? regions
            : regions.filter(p => p.category === filter);

        renderProjects(filteredCharacters, "projects-grid");
        renderProjects(filteredRegions, "projects-grid-2");
    });
});

const searchInputs = document.querySelectorAll("#search-input");

searchInputs.forEach(input => {
    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();

        const filteredCharacters = characters.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );

        const filteredRegions = regions.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );

        renderProjects(filteredCharacters, "projects-grid");
        renderProjects(filteredRegions, "projects-grid-2");
    });
});

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

const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
    extraInfo.classList.toggle("expanded");
    toggleBtn.textContent = extraInfo.classList.contains("expanded")
        ? "Скрыть"
        : "Показать больше";
});

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    nameInput.classList.remove("error-input");
    emailInput.classList.remove("error-input");

    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Введите имя";
        nameInput.classList.add("error-input");
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Введите корректный email (пример: name@domain.com)";
        emailInput.classList.add("error-input");
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (isValid) {
        alert("Форма заполнена верно! ✅\nИмя: " + nameInput.value.trim() + "\nEmail: " + emailInput.value.trim());
        form.reset();
    }
});