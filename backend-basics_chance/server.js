import { createServer } from "node:http";

import { Chance } from "chance";

const chance = new Chance();
const name = chance.name();
const age = chance.age();
const profession = chance.profession();

const output = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(output);
});
