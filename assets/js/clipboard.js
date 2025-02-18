function copyToClipboard() {
  const element = event.currentTarget;

  const text = element.textContent.trim();

  navigator.clipboard
    .writeText(text)
    .then(() => {
      element.classList.add("active");
      setTimeout(() => {
        element.classList.remove("active");
      }, 1996);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
      alert("ERROR");
    });
}