import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const InertiaSection = () => {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary uppercase">
            O Custo de Não Agir
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <div className="bg-secondary/50 border-l-4 border-accent p-8 md:p-12 rounded-lg">
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-bold text-accent mb-6">
                94%
              </div>
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                Dos colaboradores afirmam que permaneceriam mais tempo em uma empresa 
                que investe consistentemente em seu desenvolvimento.
              </p>
              
              <a 
                href="https://learning.linkedin.com/resources/workplace-learning-report"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-valenty-green-hover font-medium gap-2 transition-colors"
              >
                Fonte: LinkedIn Workplace Learning Report
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
