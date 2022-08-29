import "./mondrian.js";
import { generateMondrian } from "./mondrian.js";

generateMondrian();
let h = getComputedStyle(document.getElementById("mond-grid")).width;
document.getElementById("mond-grid").style.height = h;

window.onresize = () => {
	let h = getComputedStyle(document.getElementById("mond-grid")).width;
	document.getElementById("mond-grid").style.height = h;
};
