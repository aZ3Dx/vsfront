import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SwipeHint = () => {
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hintRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hintRef.current,
        start: 'top 80%',
      },
      repeat: 1,
      defaults: { ease: 'power2.inOut', duration: 0.6 },
    });

    tl.fromTo(hintRef.current, { autoAlpha: 0, x: 0 }, { autoAlpha: 1, x: -40 })
      .to(hintRef.current, { x: -80 })
      .to(hintRef.current, { autoAlpha: 0, x: 0, duration: 0.4 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={hintRef}
      className="absolute top-1/4 right-0 z-20 h-8 w-8 rounded-full bg-white/60 shadow-lg"
    ></div>
  );
};
