console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2) {
  console.log("odd number");
} else {
  console.log("even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs <= 5) {
  console.log(2 * numberOfHotdogs + "€");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log(1.5 * numberOfHotdogs + "€");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log(1 * numberOfHotdogs + "€");
} else {
  console.log(0.1 * numberOfHotdogs + "€");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour <= 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Marcel";
const coachName = "Felix";

const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";

console.log(greeting);
