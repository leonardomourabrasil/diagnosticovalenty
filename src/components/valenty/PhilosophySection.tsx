import { Heart, TrendingUp, Lightbulb, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    icon: Heart,
    title: "Aprendizagem Humanativa",
    description: "Desenvolvimento que integra o humano com o estratégico",
  },
  {
    icon: TrendingUp,
    title: "Resultados Mensuráveis",
    description: "Impacto real e tangível no desempenho das equipes",
  },
  {
    icon: Lightbulb,
    title: "Experiência Prática",
    description: "Aprendizado aplicável ao contexto real das organizações",
  },
  {
    icon: Zap,
    title: "Transformação Rápida",
    description: "Mudanças consistentes em tempo otimizado",
  },
];

export const PhilosophySection = () => {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary uppercase">
            Nossa Metodologia
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <h3 className="text-2xl md:text-3xl text-center mb-8 text-accent font-semibold">
            Aprendizagem que Transforma Pessoas e Organizações
          </h3>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-center text-foreground leading-relaxed">
              A Valenty Business School nasceu da convicção de que o desenvolvimento humano é o maior diferencial competitivo. Nossa metodologia Aprendizagem Humanativa integra técnicas comprovadas de gestão com uma abordagem profundamente humana e transformadora, que se baseia em 3 pilares: Significação, Engajamento e Iteração.
            </p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-all hover:shadow-lg h-full flex flex-col">
                <div className="bg-secondary/50 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <pillar.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h4 className="text-lg font-bold mb-3 text-primary">
                  {pillar.title}
                </h4>
                
                <p className="text-muted-foreground text-sm">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
