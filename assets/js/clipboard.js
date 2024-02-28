function copyText(htmlElement) {
 if (!htmlElement) {
  return;
 }

 let elementText = htmlElement.innerText;

 // Создаем элемент input, чтобы скопировать текст
 let inputElement = document.createElement("input");
 inputElement.setAttribute("value", elementText);
 document.body.appendChild(inputElement);

 // Выделяем текст внутри элемента input
 inputElement.select();

 // Команда копирования текста в буфер обмена
 document.execCommand("copy");

 // Удаляем временный элемент input
 inputElement.parentNode.removeChild(inputElement);

 // Показываем всплывающее сообщение рядом с кнопкой
 showCopiedMessage(htmlElement);
}

// Функция для показа всплывающего сообщения
function showCopiedMessage(htmlElement) {
 let messageElement = document.createElement("div");
 messageElement.textContent = "Copied!";
 messageElement.classList.add("copied-message");

 // Получаем позицию кнопки
 let buttonRect = htmlElement.getBoundingClientRect();
 messageElement.style.top = buttonRect.top + "px";
 messageElement.style.left = buttonRect.right + "px";

 // Устанавливаем фиксированную ширину и высоту для сообщения
 messageElement.style.width = "100px";
 messageElement.style.height = "40px";

 document.body.appendChild(messageElement);

 // Удаляем сообщение через 2 секунды
 setTimeout(function () {
  messageElement.parentNode.removeChild(messageElement);
 }, 2000);
}

document.getElementById("copy-text-1").onclick = function () {
 copyText(this);
};

document.getElementById("copy-text-2").onclick = function () {
 copyText(this);
};
