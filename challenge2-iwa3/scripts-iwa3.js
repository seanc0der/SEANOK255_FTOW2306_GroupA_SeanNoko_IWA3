import { alex } from "./alex-iwa3.js";
import { johannes } from "./johannes-iwa3.js";
import { nwabisa } from "./nwabisa-iwa3.js";

document.querySelector("#alex").innerText = alex.display();
document.querySelector("#johannes").innerText = johannes.display();
document.querySelector("#nwabisa").innerText = nwabisa.display();

console.log("Roles: " + nwabisa.role + ", " + johannes.role + ", " + alex.role);
