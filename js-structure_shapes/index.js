console.clear();
import { getRandomColor } from "./utils/randomColor.js";
import { CreateCircle } from "./components/Circle/circle.js";
import { CreateSquare } from "./components/Square/square.js";
import { CreatePentagon } from "./components/Pentagon/pentagon.js";

const root = document.getElementById("root");

const circle = CreateCircle();
root.append(circle);

const square = CreateSquare();
root.append(square);

const pentagon = CreatePentagon();
root.append(pentagon);
