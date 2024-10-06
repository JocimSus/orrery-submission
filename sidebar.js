const toggleButton = document.querySelectorAll(".category-toggle");

toggleButton.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains("on")) {
            e.classList.remove("on");
            e.classList.add("off");
            e.setAttribute("status", "off")
            e.textContent = "Off";
        } else {
            e.classList.remove("off");
            e.classList.add("on");
            e.setAttribute("status", "on")
            e.textContent = "On";
        }
    });
});

var side_open = false;

function slide() {
    const sidebar = document.querySelector('.sidebar');
    
    if (!side_open) {
        sidebar.classList.add('visible'); 
    } else {
        sidebar.classList.remove('visible'); 
    }
    
    side_open = !side_open; 
}

const name = document.getElementById("planet-name")
const size = document.getElementById("size")
const sma = document.getElementById("sma")
const oe = document.getElementById("oe")
const rp = document.getElementById("rp")
const period = document.getElementById("period")
const inclination = document.getElementById("inclination")

import { planetParams } from "./data";

Object.keys(planetParams).forEach(planet => {
    const planetData = planetParams[planet];
    name.innerText = planetData.tag
    size.innerText = planetData.size
    sma.innerText = planetData.smA
    oe.innerText = planetData.oE
    rp.innerText = planetData.rotationPeriod
    period.innerText = planetData.period
    inclination.innerText = planetData.inclination
})
