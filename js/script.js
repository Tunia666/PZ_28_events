"use strict";

// Готовые ссылки на элементы страницы.
const input = document.querySelector("#task-input");
const preview = document.querySelector("#task-preview");
const form = document.querySelector("#task-form");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const clearButton = document.querySelector("#clear-button");
const helpButton = document.querySelector("#help-button");
const helpText = document.querySelector("#help-text");

// ГОТОВЫЙ ПРИМЕР: событие click показывает или скрывает подсказку.
helpButton.addEventListener("click", () => {
  helpText.hidden = !helpText.hidden;
});

// ЗАДАНИЕ 1. Событие input: показывайте введённый текст в предпросмотре.
input.addEventListener("input", () => {
  preview.textContent = input.value;
  if (input.value.trim() === "") {
     preview.textContent = "Здесь появится ваша задача";
  }
});

// ЗАДАНИЕ 2. Событие submit: добавьте задачу в список.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();

  if (title === "") {
    message.textContent = "Введите название задачи.";
    return;
  }

  const item = document.createElement("li");
  item.className = "task-item";
  item.textContent = title;

  list.append(item);

  input.value = "";
  preview.textContent = "Здесь появится ваша задача";
  alert("Задача добавлена!");
});



  // TODO 3. Создайте li: const item = document.createElement("li");
  // TODO 4. Присвойте item.className = "task-item";
  // TODO 5. Запишите title в item.textContent.
  // TODO 6. Добавьте item в list через list.append(item).
  // TODO 7. Очистите поле: input.value = "";
  // TODO 8. Верните исходный текст в preview.textContent.
  // TODO 9. Выведите сообщение: "Задача добавлена!".

// ЗАДАНИЕ 3. Событие click: очистите список задач.
clearButton.addEventListener("click", () => {
  list.replaceChildren();
  alert("Список очищен.");
});
  // TODO 10. Удалите элементы списка: list.replaceChildren();
  // TODO 11. Покажите сообщение: "Список очищен.".

