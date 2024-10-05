import { orbitLines, satellitesOrbitLines, nEOOrbitLines } from "/main.js"

var OrbitEnabled = true;

function EnableOrbit() {
    if (OrbitEnabled === false) {
        for (var orbit in orbitLines) {
            orbitLines[orbit].visible = true
        }
        for (var orbit in satellitesOrbitLines) {
            satellitesOrbitLines[orbit].visible = true
        }
        for (var orbit in nEOOrbitLines) {
            nEOOrbitLines[orbit].visible = true
        }
        OrbitEnabled = true;
    }
    else if (OrbitEnabled === true) {
        for (var orbit in orbitLines) {
            orbitLines[orbit].visible = false
        }
        for (var orbit in satellitesOrbitLines) {
            satellitesOrbitLines[orbit].visible = false
        }
        for (var orbit in nEOOrbitLines) {
            nEOOrbitLines[orbit].visible = false
        }
        OrbitEnabled = false;
    }
}

window.EnableOrbit = EnableOrbit
console.log(orbitLines, satellitesOrbitLines, nEOOrbitLines)