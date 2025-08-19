import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gsap } from "gsap";

import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(PixiPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, TextPlugin);

function App() {
  gsap.to('.box-1', {
    duration: 1.5,
    x: 300,
    scale: 1
  })

  // Lineas de tiempo
  let tl = gsap.timeline({
    repeat: 0
  });

  tl.to('.box-2', {
    duration: 1,
    x: 300,
    delay: 1,
    scale: 1
  });


  // Animacion con scroll
  gsap.registerPlugin(ScrollTrigger);

  const tlScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".box-3",
      markers: true, // marcas 
      start: "top top",
      end: "bottom 100%",
      scrub: 5, // para que se sincronice con el scroll 
      pin: true, // para que se quede fija la caja
    }
  });

  tlScroll.to('.box-3', {
      x: 1000,
      duration: 2
  });

  return (
    <>
      <h1>GSAP</h1>
      <div className='box-1 w-32 h-32 bg-red-500'></div>
      <div className='box-2 w-32 h-32 bg-green-500'></div>
      <div className='box-3 w-32 h-32 bg-blue-500'></div>

<p className='w-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed provident, ea nemo officia blanditiis aliquam repellendus nulla facere architecto, labore id minima reiciendis, aut nesciunt unde magnam dicta nam.</p>
    </>
  )
}

export default App
