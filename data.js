import * as THREE from "three"

const distanceScaleFactor = 1000
const sizeScaleFactor = 1/100

// in degrees
const planetParams = {
    mercury: { 
        tag:"mercury", 
        size: 4880 * sizeScaleFactor, 
        smA: 0.38709927 * distanceScaleFactor, 
        oE: 0.205, 
        color: 0xa9a9a9, 
        rotationPeriod: 58.666667, 
        period: 87.9090455, 
        inclination: 7.0, 
        texturePath: "/textures/8k_mercury.jpg" 
    },
    venus: { 
        tag:"venus", 
        size: 12104 * sizeScaleFactor, 
        smA: 0.72333566 * distanceScaleFactor, 
        oE: 0.007, 
        color: 0xffc0cb, 
        rotationPeriod: 243.0180556, 
        period: 224.5469999, 
        inclination: 3.4, 
        texturePath: "/textures/8k_venus_surface.jpg" 
    },
    earth: { 
        tag:"earth", 
        size: 12756 * sizeScaleFactor, 
        smA: 1.00000261 * distanceScaleFactor, 
        oE: 0.017, 
        color: 0x0000ff, 
        rotationPeriod: 0.97430521666, 
        period: 365.006351, 
        inclination: 0.0, 
        texturePath: "/textures/earth.jpg" 
    },
    mars: { 
        tag:"mars", 
        size: 6792 * sizeScaleFactor, 
        smA: 1.52371034 * distanceScaleFactor, 
        oE: 0.093, 
        color: 0xff0000, 
        rotationPeriod: 1.025, 
        period: 686.509374, 
        inclination: 1.85, 
        texturePath: "/textures/8k_mars.jpg"  
    },
    jupiter: { 
        tag:"jupiter", 
        size: 142984 * sizeScaleFactor, 
        smA: 5.20288700 * distanceScaleFactor, 
        oE: 0.048, 
        color: 0xffa500, 
        rotationPeriod: 0.4131944, 
        period: 4329.854475, 
        inclination: 1.3, 
        texturePath: "/textures/8k_jupiter.jpg"  
    },
    saturn: { 
        tag:"saturn", 
        size: 120536 * sizeScaleFactor, 
        smA: 9.53667594 * distanceScaleFactor, 
        oE: 0.056, 
        color: 0xffd700, 
        rotationPeriod: 0.4395837, 
        period: 10748.33677, 
        inclination: 2.5, 
        texturePath: "/textures/saturnmap.jpg"  
    },
    uranus: { 
        tag:"uranus", 
        size: 51118 * sizeScaleFactor, 
        smA: 19.18916464 * distanceScaleFactor, 
        oE: 0.046, 
        color: 0x00ffff, 
        rotationPeriod: 0.71805522, 
        period: 30666.14879, 
        inclination: 0.77, 
        texturePath: "/textures/uranusmap.jpg" 
    },
    neptune: { 
        tag:"neptune", 
        size: 49528 * sizeScaleFactor, 
        smA: 30.06992276 * distanceScaleFactor, 
        oE: 0.010, 
        color: 0x00008b, 
        rotationPeriod: 0.666667, 
        period: 60148.8318, 
        inclination: 1.77, 
        texturePath: "/textures/neptunemap.jpg"  
    },
}

const satelliteParams = {
    moon : { 
        parent: "earth", 
        tag:"moon", 
        size: 1738.1 * sizeScaleFactor, 
        smA: 2.6e-03 * distanceScaleFactor * 100, 
        oE: 0.0549, 
        color: 0x0000ff, 
        rotationPeriod: 10, 
        period: 30, 
        inclination: 5.1, 
        texturePath: "/textures/8k_moon.jpg"  
    },
}

const nEOScale = 4

const nearEarthObjects = {
    "162173 Ryugu": { 
        tag:"162173 Ryugu", 
        size: 0.896 * nEOScale, 
        smA: 1.191 * distanceScaleFactor, 
        oE: 0.1911, 
        color: 0xa9a9a9, 
        rotationPeriod: 0.3180258333, 
        period: 474.5, 
        inclination: 5.87, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
    "53319": { 
        tag:"53319", 
        size: 7 * nEOScale, 
        smA: -2.724 * distanceScaleFactor, 
        oE: 0.6414, 
        color: 0xa9a9a9, 
        rotationPeriod: 5.9875, 
        period: 1638.85, 
        inclination: 13.84, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
    "4015 Wilson-Harrington": { 
        tag:"4015 Wilson-Harrington", 
        size: 4 * nEOScale, 
        smA: 2.626 * distanceScaleFactor, 
        oE: 0.6312, 
        color: 0xa9a9a9, 
        rotationPeriod: 0.1489, 
        period: 1551.25, 
        inclination: 2.8, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
    "1981 Midas": { 
        tag:"1981 Midas", 
        size: 3.4 * nEOScale, 
        smA: 1.776 * distanceScaleFactor, 
        oE: 0.6505, 
        color: 0xa9a9a9, 
        rotationPeriod: 0.2175, 
        period: 865.05, 
        inclination: 39.82, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
    "4183 Cuno": { 
        tag:"4183 Cuno", 
        size: 3.651 * nEOScale, 
        smA: -1.981 * distanceScaleFactor, 
        oE: 0.6361, 
        color: 0xa9a9a9, 
        rotationPeriod: 0.1483125, 
        period: 1018.35, 
        inclination: 6.67, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
    "12923 Zephyr": { 
        tag:"12923 Zephyr", 
        size: 2.06 * nEOScale, 
        smA: 1.963 * distanceScaleFactor, 
        oE: 0.4918, 
        color: 0xa9a9a9, 
        rotationPeriod: 0.16220833, 
        period: 1003.75, 
        inclination: 5.3, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
    "66391 Moshup": { 
        tag:"12923 Zephyr", 
        size: 1.317 * nEOScale, 
        smA: -0.6424 * distanceScaleFactor, 
        oE: 0.6884, 
        color: 0xa9a9a9, 
        rotationPeriod: 0.1151875, 
        period: 187.975, 
        inclination: 38.88, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
    "3362 Khufu": { 
        tag:"3362 Khufu", 
        size: 0.7 * nEOScale, 
        smA: 0.9895 * distanceScaleFactor, 
        oE: 0.4685, 
        color: 0xa9a9a9, 
        rotationPeriod: 0, 
        period: 359.16, 
        inclination: 9.92, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
    "99942 Apophis": { 
        tag:"99942 Apophis", 
        size: 0.34 * nEOScale, 
        smA: -0.9224 * distanceScaleFactor, 
        oE: 0.1911, 
        color: 0xa9a9a9, 
        rotationPeriod: 1.2733333, 
        period: 323.39, 
        inclination: 3.34, 
        center: new THREE.Vector3(0, 0, 0),
        texturePath: null 
    },
}

export {planetParams, satelliteParams, nearEarthObjects}