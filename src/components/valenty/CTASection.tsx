import { Button } from "@/components/ui/button";
import { buildCalendlyUrl } from "@/lib/constants";
import { Calendar } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const CTASection = () => {
  return (
    <section id="cta-section" className="bg-valenty-navy py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase">
            Pronto para Desenvolver Seus Líderes?
          </h2>
        </Reveal>
        
        <Reveal delay={120}>
          <h3 className="text-2xl md:text-3xl mb-12 text-white/90">
            O primeiro passo não é uma proposta. É um diagnóstico.
          </h3>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="bg-background/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8">
            <p className="text-white text-lg mb-6">
              Agende seu diagnóstico em poucos minutos, para nossos especialistas entenderem seus desafios de liderança e descobrirem como ajudar sua organização.
            </p>
            
            <Button 
              size="lg"
              className="bg-accent hover:bg-valenty-green-hover text-accent-foreground font-bold uppercase tracking-wide w-full md:w-auto max-w-md mx-auto text-xs sm:text-sm md:text-xl px-6 md:px-12 py-4 md:py-6"
              onClick={() => {
                console.log('Calendly click', { source: 'cta', ts: Date.now() });
                window.open(buildCalendlyUrl('cta'), '_blank', 'noopener,noreferrer');
              }}
            >
              <Calendar className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Agendar Diagnóstico Gratuito
            </Button>
          </div>
        </Reveal>
        
        <Reveal delay={260}>
          <p className="text-white/70 text-sm">
            Um especialista entrará em contato para uma conversa estratégica sobre o futuro da sua liderança. Sem compromisso.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
