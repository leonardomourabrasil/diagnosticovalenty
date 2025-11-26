import { Button } from "@/components/ui/button";
import { buildCalendlyUrl } from "@/lib/constants";

export const Header = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center h-full overflow-hidden flex-1 min-w-0 max-w-[70%] sm:w-[400px] md:w-[600px] lg:w-[720px] sm:max-w-[80%]">
          <img
            src="/header-logo.png"
            alt="Valenty"
            className="h-full w-full sm:w-auto object-contain object-left cursor-pointer scale-[2.6] sm:scale-[3.8] origin-left"
            onError={(e) => { e.currentTarget.src = '/valenty-logo.png'; }}
            onClick={() => {
              try {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } catch {
                window.scrollTo(0, 0);
              }
            }}
          />
        </div>
        
        <Button 
          onClick={() => {
            console.log('Calendly click', { source: 'header', ts: Date.now() });
            window.open(buildCalendlyUrl('header'), '_blank', 'noopener,noreferrer');
          }}
          size="lg"
          className="bg-accent hover:bg-valenty-green-hover text-accent-foreground font-semibold uppercase tracking-wide whitespace-nowrap text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3"
        >
          Agendar Diagnóstico
        </Button>
      </div>
    </header>
  );
};
