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

// но если язык сайта совпадает с языком браузера, то ничего не происходит  
// если язык браузера совпадает с одним из языков сайта, то перенаправляет на соответствующую версию сайта
// но если язык браузера не совпадает ни с одним из языков сайта, то перенаправляет на казахский язык