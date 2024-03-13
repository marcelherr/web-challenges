console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", createNewElement);

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = " ";
});

function createNewElement() {
  const newElement = document.createElement("li");
  newElement.classList.add("toast-container__message");
  newElement.setAttribute("data-js", "toast-container");
  newElement.textContent = "new toast message";
  toastContainer.append(newElement);
}
