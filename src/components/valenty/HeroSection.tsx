import { Button } from "@/components/ui/button";
import { buildCalendlyUrl } from "@/lib/constants";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const HeroSection = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    const headerEl = document.querySelector('header') as HTMLElement | null;
    const headerHeight = headerEl?.offsetHeight ?? 80; // fallback para 80px
    const offset = Math.max(window.innerHeight - headerHeight, 300);
    window.scrollBy({ top: offset, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-valenty-navy flex items-center justify-center px-4 pt-20 lg:pt-[170px] relative">
      <div className="container mx-auto text-center max-w-5xl py-20">
        {/* Selo acima do título com transparência */}
        <Reveal>
          <div className="inline-flex items-center px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-accent/50 bg-accent/20 text-white text-sm md:text-base font-semibold tracking-wide mb-6 shadow-sm backdrop-blur-sm">
            Aprendizagem Humanativa
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="block text-white">Desenvolva Líderes que</span>
            <span className="block text-accent">Transformam Pessoas</span>
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Metodologia única que une desenvolvimento humano e estratégias de gestão 
            para criar líderes autênticos e equipes de alta performance.
          </p>
        </Reveal>
        
        <Reveal delay={300}>
          <Button 
            onClick={() => {
              console.log('Calendly click', { source: 'hero', ts: Date.now() });
              window.open(buildCalendlyUrl('hero'), '_blank', 'noopener,noreferrer');
            }}
            size="lg"
            className="bg-accent hover:bg-valenty-green-hover text-accent-foreground font-bold uppercase tracking-wide group w-full sm:w-auto max-w-xs sm:max-w-none mx-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
          >
            Agende seu Diagnóstico
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </Reveal>
      </div>

      {/* Seta pulsante para indicar mais conteúdo abaixo */}
      <button
        type="button"
        aria-label="Rolar para baixo"
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white focus:outline-none motion-safe:animate-pulse"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};
