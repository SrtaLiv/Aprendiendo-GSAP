import './App.css'
import { gsap } from "gsap";
import { useEffect } from 'react'; // Importar useEffect

import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/all';
import Title from './Titles';
import _ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(PixiPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, TextPlugin);
function Projects() {

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".projects",
                markers: true,
                start: "center center", // cuando la sección está a mitad de viewport
                end: "+=250",           // cuánto dura el efecto mientras scrolleas
                scrub: 0.6,
            }
        });

        // Columna izquierda (primer hijo de .projects)
        tl.to('.projects > div:nth-child(1) .box', {
            x: -60,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
        }, 0)

            // Columna derecha (segundo hijo de .projects)
            .to('.projects > div:nth-child(2) .box', {
                x: 60,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
            }, 0);

        return () => {
            tl.kill();
            _ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [])
    return (
        <div className='h-[200vh] flex items-center justify-center'>
            <div className='projects grid grid-cols-2 gap-6 p-6 h-[100vh] w-full max-w-5xl'>
                <div className=''>
                    <div className='box h-100 w-40 bg-pink-500'>Proyecto 1</div>
                    <div className='box h-100 w-40 bg-pink-500'>Proyecto 2</div>
                    <div className='box h-100 w-40 bg-pink-500'>Proyecto 3</div>
                </div>
                <div>
                    <div className='box h-100 w-40 bg-pink-500'>Proyecto 4</div>
                    <div className='box h-100 w-40 bg-pink-500'>Proyecto 5</div>
                    <div className='box h-100 w-40 bg-pink-500'>Proyecto 6</div>
                </div>
            </div>
        </div>
    )
}

export default Projects