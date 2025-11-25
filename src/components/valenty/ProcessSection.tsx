import { Search, Settings, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Diagnóstico",
    description: "Primeiro, mergulhamos no seu desafio real.",
  },
  {
    icon: Settings,
    number: "2",
    title: "Customização",
    description: "Adaptamos o conteúdo para a sua cultura e seus objetivos.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Imersão",
    description: "Entregamos uma experiência prática e transformadora.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary uppercase">
            Não é um curso,
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-2xl md:text-3xl text-center mb-8 text-accent font-semibold">
            é uma Parceria Estratégica
          </p>
        </Reveal>
        
        <div className="relative mt-12">
          {/* Connection line for desktop - more subtle and modern */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" style={{ left: '16.66%', right: '16.66%' }} />
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 150}>
                <div className="relative group">
                  <div className="flex flex-col items-center text-center">
                    {/* Number badge with shadow and hover effect */}
                    <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 shadow-lg transition-transform duration-300 group-hover:scale-105">
                      {step.number}
                    </div>
                    
                    {/* Icon container with better styling */}
                    <div className="bg-secondary/80 p-6 rounded-2xl mb-5 w-24 h-24 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:bg-secondary">
                      <step.icon className="w-12 h-12 text-accent transition-transform duration-300 group-hover:scale-105" strokeWidth={2.5} />
                    </div>
                    
                    {/* Title with better typography */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary tracking-tight">
                      {step.title}
                    </h3>
                    
                    {/* Description with improved readability */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
