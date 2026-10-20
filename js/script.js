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
alert("Задача добавлена!"); 
});

// ЗАДАНИЕ 3. Событие click: очистите список задач.
clearButton.addEventListener("click", () => {
  // НАЙДИТЕ БЛОК «ЗАДАНИЕ 3»
clearButton.addEventListener('click', () => {
    // 2. Удаляем все li из списка
    list.replaceChildren();

    // 3. Показываем уведомление
    alert("Список очищен.");
});
});
