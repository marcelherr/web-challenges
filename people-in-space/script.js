const peopleInSpace = document.querySelector("[data-js='people-in-space']");
const namesOfPeopleInSpace = document.querySelector('[data-js="names"]');

const url = "http://api.open-notify.org/astros.json";

async function getNumberOfPeopleInSpace() {
  const response = await fetch(url);
  const data = await response.json();
  peopleInSpace.textContent = data.number;
}
getNumberOfPeopleInSpace();

async function getNamesOfPeopleInSpace() {
  const response = await fetch(url);
  const data = await response.json();
  const names = data.people.map((person) => person.name);
  const list = names.map((name) => `<li>${name}</li>`).join("");
  namesOfPeopleInSpace.innerHTML = `<ul>${list}</ul>`;
}

getNamesOfPeopleInSpace();
