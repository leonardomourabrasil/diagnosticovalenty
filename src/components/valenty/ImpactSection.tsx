import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const stats = [
  {
    number: "70%",
    description: "O líder direto é responsável por 70% da variação no engajamento da equipe.",
    source: "Gallup",
    link: "https://www.gallup.com/workplace/231593/why-great-managers-rare.aspx",
  },
  {
    number: "57%",
    description: "Das pessoas pedem demissão por causa do seu chefe direto, não da empresa.",
    source: "DDI",
    link: "https://www.ddiworld.com/blog/leading-to-loyalty-the-tie-that-binds",
  },
  {
    number: "2x",
    description: "É o custo do salário anual de um funcionário para substituí-lo.",
    source: "Gallup",
    link: "https://www.gallup.com/workplace/247391/fixable-problem-costs-businesses-trillion.aspx",
  },
];

export const ImpactSection = () => {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary uppercase">
            A Liderança é um Ativo
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="text-xl md:text-2xl text-center mb-16 text-foreground">
            (ou o seu <span className="text-accent font-semibold">Maior Risco</span>)
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-2xl text-center mb-16 text-foreground font-medium">
            Líderes despreparados custam caro. Eles drenam seu lucro silenciosamente.
          </p>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {stats.map((stat, index) => (
            <Reveal key={stat.number} delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors h-full flex flex-col">
                <div className="text-6xl font-bold text-accent mb-4 text-center">
                  {stat.number}
                </div>
                
                <p className="text-foreground mb-6 text-center leading-relaxed">
                  {stat.description}
                </p>
                
                <a 
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto mx-auto inline-flex items-center justify-center gap-2 text-sm text-accent hover:text-valenty-green-hover font-medium transition-colors"
                >
                  Fonte: {stat.source}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
