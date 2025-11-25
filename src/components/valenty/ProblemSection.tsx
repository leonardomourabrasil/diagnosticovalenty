import { AlertCircle, TrendingDown, Flame } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const ProblemSection = () => {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary uppercase">
            O Verdadeiro Desafio
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="text-2xl md:text-3xl text-center mb-16 text-accent font-semibold">
            "Líderes Acidentais"
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="bg-card rounded-lg p-8 mb-12 border border-border">
            <p className="text-xl md:text-2xl text-foreground text-center font-medium">
              A maioria das empresas não tem um problema de processo. 
              Elas têm um <span className="text-accent">problema de liderança</span>.
            </p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              Icon: AlertCircle,
              title: "O Problema",
              text: "Empresas em crescimento promovem seus melhores técnicos para cargos de gestão.",
            },
            {
              Icon: TrendingDown,
              title: "O Resultado",
              text: "Você ganha um gerente despreparado e perde o seu melhor especialista.",
            },
            {
              Icon: Flame,
              title: "O Ciclo",
              text: "O \"fogo do dia a dia\" impede a formação de sucessores.",
            },
          ].map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="text-center">
                <div className="bg-secondary/50 p-6 rounded-lg mb-4">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
