const radioButtons = document.querySelectorAll('input[type="radio"]');
const allLang = ["kz", "ru", "en"]; // Порядок языков сохранен как в вашем исходном коде
function changeHtmlLang(lang) {
  document.documentElement.lang = lang;
}
radioButtons.forEach((button) => {
  button.addEventListener("change", changeURLLanguage);
});

function changeURLLanguage() {
  let lang = document.querySelector('input[name="language"]:checked').value; // Получаем значение выбранного языка
  location.href = window.location.pathname + "#" + lang;
  location.reload(); // Перезагружаем страницу после смены языка
}
function changeLanguage() {
  let hash = window.location.hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#kz";
    location.reload();
    hash = "kz"; // Установка языка по умолчанию в случае некорректного значения в хеше
  }
  // Выбираем все радио-инпуты
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    // Помечаем как выбранный тот, у которого значение совпадает с хешем
    input.checked = input.value === hash;
  });
  document.querySelector('input[value="' + hash + '"]').checked = true; // Выбираем соответствующий радио-инпут
  document.querySelector("title").innerHTML = langArr["title"][hash];
  document.querySelector('meta[name="description"]').setAttribute("content", langArr["meta-description"][hash]);
  document.querySelector('meta[name="keywords"]').setAttribute("content", langArr["meta-keywords"][hash]);
  document.querySelector('meta[property="og:title"]').setAttribute("content", langArr["title"][hash]);
  document.querySelector('meta[property="og:description"]').setAttribute("content", langArr["meta-description"][hash]);
  changeHtmlLang(hash);
  for (let key in langArr) {
    let elem = document.querySelectorAll(".lang-" + key);
    if (elem.length > 0) {
      elem.forEach((el) => {
        el.innerHTML = langArr[key][hash];
      });
    }
  }
}

changeLanguage();
