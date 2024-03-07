console.clear();

const body = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const ligthModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  body.classList.add("dark");
});

ligthModeButton.addEventListener("click", () => {
  body.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});
