import { Award, Users, Building, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Anos de Experiência",
  },
  {
    icon: Users,
    number: "10k+",
    label: "Alunos Transformados",
  },
  {
    icon: Building,
    number: "500+",
    label: "Empresas Atendidas",
  },
  {
    icon: Star,
    number: "98%",
    label: "Satisfação",
  },
];

export const SocialProofBanner = () => {
  return (
    <section className="bg-transparent py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
