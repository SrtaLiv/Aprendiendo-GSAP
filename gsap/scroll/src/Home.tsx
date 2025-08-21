import './App.css'
import { gsap } from "gsap";
import { useEffect } from 'react'; // Importar useEffect

import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/all';
import Title from './Titles';

gsap.registerPlugin(PixiPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, TextPlugin);

function Home() {
  // NAVE ESPACIAL
  useEffect(() => {
    const tlNave = gsap.timeline({
      scrollTrigger: {
        trigger: ".box-planet",
        markers: true,
        start: "top top",
        end: "bottom bottom", // Cambiar a bottom bottom
        pin: true, // Remover el pin
        scrub: true,
      }
    });

    tlNave.to('.nave', {
      scale: 0.5
    });

  }, []); // Array vacío para que solo se ejecute una vez

  return (
    <div className='principal-container'>
      <Title />
      <div className="box-planet">
        <img className='nave' src="public/nave.webp" alt="" />
      </div>
    </div>
  )
}

export default Home