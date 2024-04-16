import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1") {
    const message = "Shrimp";
    response.statusCode = 200;
    response.end(message);
    return;
  }

  if (request.url === "/api/fish/2") {
    const message = "Anemonefish";
    response.statusCode = 200;
    response.end(message);
    return;
  }

  response.statusCode = 404;
  response.end("Not found");
});
