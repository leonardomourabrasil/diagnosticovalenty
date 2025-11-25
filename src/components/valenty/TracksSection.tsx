import { Users, TrendingUp, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const tracks = [
  {
    icon: Users,
    title: "LIDERANÇA & CULTURA",
    topics: [
      "Autoliderança, Pessoas & Coragem",
      "Comunicação, Feedback & Empatia",
      "Cultura, Pessoas & Lealdade",
      "Flow, Produtividade & Bem-estar",
      "Liderança, Gestão & Desempenho",
      "Presença, Oratória & Influência",
    ],
  },
  {
    icon: TrendingUp,
    title: "PERFORMANCE & VENDAS",
    topics: [
      "Vendas, Valor & Influência",
      "Experiência, Sucesso do Cliente & Lealdade",
      "Gestão, Processos & Desempenho",
      "Processos, Pessoas & Indicadores",
    ],
  },
  {
    icon: Lightbulb,
    title: "ESTRATÉGIA & INOVAÇÃO",
    topics: [
      "Análises, Dados & Decisões",
      "Inovação, Design Thinking & Empatia",
      "Negócios, Inteligência Artificial & Futurismo",
    ],
  },
];

export const TracksSection = () => {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary uppercase">
            Nossas Trilhas de Transformação
          </h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="text-xl text-center mb-16 text-foreground">
            Imersões e cursos desenhados para desenvolver as competências que o mercado mais valoriza.
          </p>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
          {tracks.map((track, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all hover:shadow-lg h-full flex flex-col">
                <div className="bg-accent/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <track.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-primary">
                  {track.title}
                </h3>
                
                <ul className="space-y-3">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="relative overflow-hidden rounded-2xl p-10 bg-card border border-border shadow-sm">
          <Reveal>
            <h3 className="text-4xl md:text-5xl font-bold mb-10 text-primary uppercase tracking-wide text-center">Formatos</h3>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 */}
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-white to-secondary/10 p-6 shadow-sm ring-1 ring-black/5 hover:border-accent/40 hover:ring-accent/20 hover:shadow-md hover:-translate-y-0.5 transition-all h-full flex flex-col">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                <div className="flex items-center gap-4 mb-4 h-16">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent shadow-sm">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-primary">Programas In-Company</h4>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">Formatos personalizados para equipes e líderes dentro da sua organização.</p>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-white to-secondary/10 p-6 shadow-sm ring-1 ring-black/5 hover:border-accent/40 hover:ring-accent/20 hover:shadow-md hover:-translate-y-0.5 transition-all h-full flex flex-col">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                <div className="flex items-center gap-4 mb-4 h-16">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent shadow-sm">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-primary">Palestras Estratégicas</h4>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">Conteúdos inspiradores com foco em resultados e mudança de mentalidade.</p>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-white to-secondary/10 p-6 shadow-sm ring-1 ring-black/5 hover:border-accent/40 hover:ring-accent/20 hover:shadow-md hover:-translate-y-0.5 transition-all h-full flex flex-col">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                <div className="flex items-center gap-4 mb-4 h-16">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent shadow-sm">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-primary">Mentorias Consultivas</h4>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">Acompanhamento próximo e prático para desafios reais de liderança.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
