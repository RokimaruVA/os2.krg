function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Установка новой темы
  document.documentElement.setAttribute("data-theme", newTheme);

  // Сохранение выбранной темы в локальном хранилище
  localStorage.setItem("theme", newTheme);

  // Применение темы к содержимому iframe
  applyThemeToIframe(newTheme);
}

function applyThemeToIframe(theme) {
  const iframe = document.getElementById("editor");
  if (iframe) {
    const editorDoc = iframe.contentWindow.document;

    // Установка стилей для темной и светлой темы
    if (theme === "dark") {
      editorDoc.documentElement.style.setProperty(
        "--text",
        getComputedStyle(document.documentElement).getPropertyValue("--basic-clr-dark")
      );
      editorDoc.documentElement.style.setProperty(
        "--background",
        getComputedStyle(document.documentElement).getPropertyValue("--bg-clr-dark")
      );
    } else {
      editorDoc.documentElement.style.setProperty(
        "--text",
        getComputedStyle(document.documentElement).getPropertyValue("--base-clr-light")
      );
      editorDoc.documentElement.style.setProperty(
        "--background",
        getComputedStyle(document.documentElement).getPropertyValue("--bg-clr-light")
      );
    }

    // Обновление стиля для всего контента
    editorDoc.body.style.color = getComputedStyle(document.documentElement).getPropertyValue("--text");
    editorDoc.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--background");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    applyThemeToIframe(savedTheme);
  } else {
    applyThemeToIframe(document.documentElement.getAttribute("data-theme"));
  }
});
