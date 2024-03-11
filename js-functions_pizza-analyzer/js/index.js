console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  return pizzaSize1;
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput2.value;
  return pizzaSize2;
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (diameter1 / 2) ** 2 * Math.PI;
  const area2 = (diameter2 / 2) ** 2 * Math.PI;
  const pizzaPercentage = Math.round(((area2 - area1) / area1) * 100);
  return pizzaPercentage;
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDisplaySize + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  return;
}

// eventuell hilft das
// button.addEventListener("click", () => {
//   // Number(x) converts the string from the input to a number
//   // Beware: input values are *always* strings!
//   const age = Number(input.value);
