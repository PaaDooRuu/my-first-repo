// Этап 4.7 - Вывод сообщения в консоль
console.log("Привет! Скрипт подключен и работает.");

// Этап 4.10 - Вставка текущей даты в подвал
const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");