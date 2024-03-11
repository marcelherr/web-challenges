/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

// Part 1.

// button.addEventListener("click", () => {
//   secondInput.value = firstInput.value;
// });

// Part 2.

// button.addEventListener("click", () => {
//   secondInput.value = firstInput.value.toUpperCase();
// });

// Part 3.

button.addEventListener("click", () => {
  placeHolder1 = firstInput.value;
  placeHolder2 = secondInput.value;
  firstInput.value = placeHolder2;
  secondInput.value = placeHolder1;
});
