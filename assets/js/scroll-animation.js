const observer = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
  console.log(entry);
  if (entry.isIntersecting) {
   entry.target.classList.add("animation-show");
  }
 });
});

const hiddenElements = document.querySelectorAll(".animation-hidden");
hiddenElements.forEach((el) => observer.observe(el));
