document.addEventListener("DOMContentLoaded", function () {
 const menuButton = document.querySelector(".menu-button");
 const closeButton = document.querySelector(".close-button");
 const sidebarLi = document.querySelectorAll(".sidebar__li");
 const sidebar = document.querySelector(".sidebar");

 menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  sidebar.classList.add("active");
 });
 closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  sidebar.classList.remove("active");
 });
 sidebarLi.forEach(function (item) {
  item.addEventListener("click", function () {
   sidebar.classList.remove("active");
  });
 });
 document.addEventListener("click", function (event) {
  const target = event.target;
  if (!sidebar.contains(target) && target !== menuButton) {
   sidebar.classList.remove("active");
  }
 });
});
