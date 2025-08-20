import './style.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

// Registra el plugin Flip
if (!gsap.core.globals().Flip) {
  gsap.registerPlugin(Flip);
}

const useEyeMovement = () => {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    const width = window.innerWidth;
    const height = window.innerHeight;

    function updateMousePosition(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener('mousemove', updateMousePosition);

    function moveEyes() {
      const x = ((mouseX / width) - 0.5) * 100;
      const y = ((mouseY / height) - 0.5) * 100;
      gsap.to('.eye', {
        xPercent: x * 0.6,
        yPercent: y * 1.2,
        ease: 'power2.out',
        duration: 0.3,
      });
    }

    gsap.ticker.add(moveEyes);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      gsap.ticker.remove(moveEyes);
    };
  }, []);
};

export default function EyesApp() {
  useEyeMovement();
  return (
    <div className="face">
      <div className="eye" id="eye-left"></div>
      <div className="eye" id="eye-right"></div>
    </div>
  );
}
