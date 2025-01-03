document.addEventListener("DOMContentLoaded", function () {
	// Получаем языковые настройки браузера
	const userLang = navigator.language || navigator.userLanguage;

	// Определяем язык и перенаправляем на соответствующую версию сайта
	if (userLang.startsWith("ru")) {
		window.location.href = "/ru/";
	} else if (userLang.startsWith("en")) {
		window.location.href = "/en/";
	} else {
		window.location.href = "/kk/";
	}
});
