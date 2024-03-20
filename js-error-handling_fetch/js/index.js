console.clear();

const userElement = document.querySelector(".user");
const errorMessage = document.querySelector(".error");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("User not found.");
    }
    const json = await response.json();
    errorMessage.innerText = "";
    return json.data;
  } catch (error) {
    errorMessage.innerText = error.message;
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    if (user) {
      userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
    } else {
      userElement.innerHTML = "";
    }
  })
);
