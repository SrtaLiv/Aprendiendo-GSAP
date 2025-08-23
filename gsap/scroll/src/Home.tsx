import './App.css'
import { gsap } from "gsap";
import { useEffect } from 'react'; // Importar useEffect

import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/all';
import Title from './Titles';

// gsap.registerPlugin(PixiPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin, TextPlugin);

function Home() {


  return (
    <div className=''>
      <Title />
    </div>
  )
}

export default Home