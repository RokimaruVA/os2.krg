const sidebar = document.querySelector(".sidebar");
const sidebarLi = document.querySelectorAll(".sidebar__li");

// Menu closing when clicking on a menu item
sidebarLi.forEach(function (item) {
  item.addEventListener("click", function () {
    closeMenu();
  });
});

document.addEventListener("click", function (event) {
  if (sidebar && !sidebar.contains(event.target)) {
    closeMenu();
  }
});

function openMenu() {
  setTimeout(function () {
    disableScroll();
    sideMenuIn();
  }, 30);
}

function closeMenu() {
  enableScroll();
  sideMenuOut();
}

function enableScroll() {
  document.body.style.overflow = "";
}
function disableScroll() {
  document.body.style.overflow = "hidden";
}

function sideMenuIn() {
  sidebar.style.right = "1.5rem";
  console.log("menuIsOpened");
}
function sideMenuOut() {
  sidebar.style.right = "-16rem";
  console.log("menuIsClosed");
}
