"use strict";

// Готовые ссылки на элементы страницы.
const input = document.querySelector("#task-input");
const preview = document.querySelector("#task-preview");
const form = document.querySelector("#task-form");
const list = document.querySelector("#task-list");
const clearButton = document.querySelector("#clear-button");
const helpButton = document.querySelector("#help-button");
const helpText = document.querySelector("#help-text");

let message = document.querySelector("#message");
if (!message && form) {
  message = document.createElement("p");
  message.id = "message";
  message.className = "form-message";
  message.setAttribute("role", "status");
  message.setAttribute("aria-live", "polite");
  message.style.margin = "10px 0 0";
  message.style.fontWeight = "600";
  form.append(message);
}

// ГОТОВЫЙ ПРИМЕР: событие click показывает или скрывает подсказку.
helpButton.addEventListener("click", () => {
  helpText.hidden = !helpText.hidden;
});

// ЗАДАНИЕ 1. Событие input: показывайте введённый текст в предпросмотре.
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    preview.textContent = "Здесь появится ваша задача";
  } else {
    preview.textContent = input.value;
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
  message.textContent = "Задача добавлена!";
});

// ЗАДАНИЕ 3. Событие click: очистите список задач.
clearButton.addEventListener("click", () => {
  list.replaceChildren();
  message.textContent = "Список очищен.";
});

