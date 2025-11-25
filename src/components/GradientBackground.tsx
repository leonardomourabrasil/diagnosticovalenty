import { useEffect } from "react";

const GradientBackground = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      // Suave: órbita leve em torno do centro
      const x = 50 + Math.sin(p * Math.PI * 2) * 12; // +/-12%
      const y = 50 + Math.cos(p * Math.PI * 2) * 12; // +/-12%
      doc.style.setProperty('--grad-x', `${x}%`);
      doc.style.setProperty('--grad-y', `${y}%`);
      ticking = false;
    };

    if (reduceMotion) {
      // Mantém valores padrão, sem movimento
      document.documentElement.style.setProperty('--grad-x', '50%');
      document.documentElement.style.setProperty('--grad-y', '50%');
      return;
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="interactive-gradient" aria-hidden="true" />;
};

export default GradientBackground;