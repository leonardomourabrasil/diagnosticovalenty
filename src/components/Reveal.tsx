import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number; // milliseconds
  threshold?: number; // intersection threshold
  once?: boolean; // animate only once
};

/**
 * Reveal: componente de animação simples baseado em IntersectionObserver.
 * - Suporta delay para criar efeito de "stagger" entre elementos.
 * - Respeita preferências de movimento reduzido (prefers-reduced-motion).
 * - Usa transições (opacity/transform) para uma sensação suave.
 */
export const Reveal = ({
  children,
  as = "div",
  className,
  delay = 0,
  threshold = 0.2,
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduceMotion(media.matches);
    handleChange();
    media.addEventListener?.("change", handleChange);

    if (media.matches) {
      setVisible(true);
      return () => media.removeEventListener?.("change", handleChange);
    }

    const el = ref.current;
    if (!el) return () => media.removeEventListener?.("change", handleChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Pequeno atraso para permitir "stagger" controlado
            if (delay > 0) {
              const timeout = setTimeout(() => setVisible(true), delay);
              if (once) observer.disconnect();
              return () => clearTimeout(timeout);
            }
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      media.removeEventListener?.("change", handleChange);
    };
  }, [delay, threshold, once]);

  const Comp = as as any;

  return (
    <Comp
      ref={ref}
      className={cn(
        "will-change-[opacity,transform] motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
      style={reduceMotion ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;