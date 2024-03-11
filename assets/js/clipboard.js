// Функция для копирования текста с элемента, указанного по ID
function copyText(htmlElementId) {
 let htmlElement = document.getElementById(htmlElementId);
 if (!htmlElement) {
  return;
 }

 let elementText = htmlElement.innerText;

 let inputElement = document.createElement("input");
 inputElement.setAttribute("value", elementText);
 document.body.appendChild(inputElement);

 inputElement.select();
 document.execCommand("copy");
 inputElement.parentNode.removeChild(inputElement);

 showCopiedMessage(htmlElement);
}

// Функция для показа всплывающего сообщения о копировании
function showCopiedMessage(htmlElement) {
 let messageElement = document.createElement("div");
 messageElement.textContent = getMessage(); // Получаем сообщение на основе языка
 messageElement.classList.add("copied-message");

 let buttonRect = htmlElement.getBoundingClientRect();
 messageElement.style.top = buttonRect.top + "px";
 messageElement.style.left = buttonRect.right + "px";
 messageElement.style.width = "auto";
 messageElement.style.height = "auto";

 document.body.appendChild(messageElement);

 setTimeout(function () {
  messageElement.parentNode.removeChild(messageElement);
 }, 1800);
}

// Функция для получения сообщения в зависимости от языка страницы
function getMessage() {
 // Получаем язык страницы
 let language = document.documentElement.lang.toLowerCase();

 // В зависимости от языка возвращаем соответствующее сообщение
 switch (language) {
  case "en":
   return "Copied!";
  case "ru":
   return "Скопировано!";
  // Добавьте другие языки по мере необходимости
  case "kz":
   return "Көшірілген!";
 }
}

// Привязываем обработчики к кнопкам с разными ID для копирования текста
document.querySelectorAll("#copy-text-1").forEach(function (button) {
 button.onclick = function () {
  copyText("text-1");
 };
});

// Повторите для остальных кнопок и текстовых элементов
document.querySelectorAll("#copy-text-2").forEach(function (button) {
 button.onclick = function () {
  copyText("text-2");
 };
});
document.querySelectorAll("#copy-text-3").forEach(function (button) {
 button.onclick = function () {
  copyText("text-3");
 };
});
document.querySelectorAll("#copy-text-4").forEach(function (button) {
 button.onclick = function () {
  copyText("text-4");
 };
});
document.querySelectorAll("#copy-text-5").forEach(function (button) {
 button.onclick = function () {
  copyText("text-5");
 };
});
document.querySelectorAll("#copy-text-6").forEach(function (button) {
 button.onclick = function () {
  copyText("text-6");
 };
});
