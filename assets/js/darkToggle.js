// Функция для смены темы
function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	const newTheme = currentTheme === "light" ? "dark" : "light";
 
	// Установка новой темы
	document.documentElement.setAttribute("data-theme", newTheme);
 
	// Сохранение выбранной темы в локальном хранилище
	localStorage.setItem("theme", newTheme);
 }
 
 // Проверка сохраненной темы при загрузке страницы
 document.addEventListener("DOMContentLoaded", function () {
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
	 document.documentElement.setAttribute("data-theme", savedTheme);
	}
 });
 