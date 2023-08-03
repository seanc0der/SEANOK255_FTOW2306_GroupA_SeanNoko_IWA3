import { company, year } from "./configuration-iwa3.js";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;
