console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const formElements = event.target.elements;

function hideTosError() {
  if (formElements.tos.checked === false) {
    tosError.setAttribute("hidden", "");
  }
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  event.target.reset();
  formElements.firstName.focus();
  console.log(data);
  alert("Form submitted");
});

tosCheckbox.addEventListener("input", (event) => {
  hideTosError();
  showTosError();
});
