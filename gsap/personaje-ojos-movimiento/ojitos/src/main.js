import './style.css'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

// Registra el plugin Flip
gsap.registerPlugin(Flip);

console.log("GSAP está funcionando con Yarn");

let mouseX = 0;
let mouseY = 0;

let width = window.innerWidth; // ancho de la ventana
let height = window.innerHeight; // alto de la ventana

console.log(width, height);

function updateMousePosition(e) {
    mouseX = e.clientX; // posición del mouse en X
    mouseY = e.clientY; // posición del mouse en Y
}

window.addEventListener("mousemove", updateMousePosition); // evento de movimiento del mouse
console.log(mouseX, mouseY);

function moveEyes() {
    // Convertir la posición del ratón a un rango de -50 a 50
    const x = ((mouseX / width) - 0.5) * 100;
    const y = ((mouseY / height) - 0.5) * 100;

    // Aumentar el rango de movimiento y suavizar
    gsap.to(".eye", {
        xPercent: x * 0.6,
        yPercent: y * 1.2, // más rango vertical
        ease: "power2.out",
        duration: 0.3
    });
}

// Ejecutar la función de animación en cada frame
gsap.ticker.add(moveEyes);
