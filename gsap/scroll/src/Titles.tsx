import './App.css'
import { gsap, Elastic } from "gsap";
import { useGSAP } from '@gsap/react';
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(PixiPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, TextPlugin);

function Title() {
    const titleElements = useRef<(HTMLHeadingElement | null)[]>([]);
    const title2Elements = useRef<(HTMLHeadingElement | null)[]>([]);

    useGSAP(() => {
        const timeline = gsap.timeline();

        timeline.from(titleElements.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3
        }).from(title2Elements.current, {
            opacity: 0,
            y: 50,
            x: 50,
            duration: 1,
            stagger: 0.3,
            ease: Elastic.easeInOut.config(1, 0.3)
        }, "-=1.3");
    });

    return (
        <div>
            <h1 ref={(el) => titleElements.current[0] = el} className='title '>Nebula Solutions</h1>
            <h2 ref={(el) => titleElements.current[1] = el} className='title '>Desarrollo web a medida 100% con codigo</h2>
            <h1 ref={(el) => title2Elements.current[0] = el} className='title2 '>+</h1>
            <h2 ref={(el) => title2Elements.current[1] = el} className='title2 '>Software</h2>
        </div>
    )
}

export default Title