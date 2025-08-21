import './App.css'
import { gsap, Elastic } from "gsap";
import { useEffect } from 'react'; // Importar useEffect

import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(PixiPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, TextPlugin);

function Title() {
    const timeline = gsap.timeline();

    useEffect(() => {
        const title = document.querySelectorAll('.title');
        const title2 = document.querySelectorAll('.title2');

        timeline.from(title, {
            opacity: 0, // Cambiar a 0 para que aparezcan
            y: 50,
            duration: 1,
            stagger: 0.3
        }).from(title2, {
            opacity: 0, // Cambiar a 0 para que aparezcan
            y: 50,
            x: 50,
            duration: 1,
            stagger: 0.3,
            ease: Elastic.easeInOut.config(1, 0.3)
        }, "-=1.3");

    }, []
    )
    return (
        <div className=''>
            <h1 className='title'>Nebula Solutions</h1>
            <h2 className='title'>Hacemos tus ideas realidad</h2>
            <h1 className='title2'>+</h1>
            <h2 className='title2'>Software</h2>
        </div>
    )
}

export default Title