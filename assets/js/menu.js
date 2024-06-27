document.addEventListener("DOMContentLoaded", function () {
  const menuButtons = document.querySelectorAll(".menu-button");
  const closeButton = document.querySelector(".close-button");
  const sidebarLi = document.querySelectorAll(".sidebar__li");
  const sidebar = document.querySelector(".sidebar");

  // Функция для блокировки скролла
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  // Функция для разблокировки скролла
  function enableScroll() {
    document.body.style.overflow = "";
  }

  menuButtons.forEach(function (menuButton) {
    menuButton.addEventListener("click", function (event) {
      event.preventDefault();
      sidebar.classList.add("active");
      disableScroll(); // Блокировать скролл при открытом меню
    });
  });

  closeButton.addEventListener("click", function (event) {
    event.preventDefault();
    sidebar.classList.remove("active");
    enableScroll(); // Разблокировать скролл при закрытом меню
  });

  sidebarLi.forEach(function (item) {
    item.addEventListener("click", function () {
      sidebar.classList.remove("active");
      enableScroll(); // Разблокировать скролл при закрытом меню
    });
  });

  // Обработка клика вне меню
  document.addEventListener("click", function (event) {
    const target = event.target;
    const isClickInsideMenu = sidebar.contains(target);
    const isClickOnMenuButton = Array.from(menuButtons).some((button) => button.contains(target));

    if (!isClickInsideMenu && !isClickOnMenuButton) {
      sidebar.classList.remove("active");
      enableScroll(); // Разблокировать скролл при закрытом меню
    }
  });	
});
