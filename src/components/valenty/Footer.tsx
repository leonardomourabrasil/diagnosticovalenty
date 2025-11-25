import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Footer = () => {
  return (
    <footer className="bg-valenty-navy py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna: Marca e redes sociais */}
          <div>
            <Reveal>
              <div className="mb-4">
                <img
                  src="/footer-logo.png"
                  alt="Valenty"
            className="h-[60px] w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = '/valenty-logo.png'; }}
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-white/80 text-sm md:text-base max-w-md">
                Transformando pessoas e organizações através da Aprendizagem Humanativa.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="flex items-center gap-3 mt-6">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/valentyschool/", label: "Instagram" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/valentyschool/?viewAsMember=true", label: "LinkedIn" },
                  { Icon: Twitter, href: "https://x.com/ValentySchool", label: "Twitter" },
                ].map(({ Icon, href, label }, i) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 text-white hover:bg-white/15 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Coluna: Contato */}
          <div>
            <Reveal>
              <h4 className="text-white text-lg md:text-xl font-semibold mb-4 text-right">Contato</h4>
            </Reveal>
            <div className="flex flex-col items-end space-y-3 text-white/90">
              <Reveal delay={80}>
                <a href="mailto:oi@valenty.com.br" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                  oi@valenty.com.br
                </a>
              </Reveal>
              <Reveal delay={140}>
                <a href="tel:+5511958369755" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                  (11) 95836-9755
                </a>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="mt-10 border-t border-white/10" />

        {/* Rodapé legal */}
        <div className="mt-6 text-white/70 text-xs md:text-sm space-y-2 text-center">
          <Reveal>
            <p>© {new Date().getFullYear()} Valenty. Todos os direitos reservados.</p>
          </Reveal>
          <Reveal delay={80}>
            <p>CNPJ: 46.499.212/0001-66 – VALENTY ESCOLA DE APRENDIZAGEM HUMANATIVA LTDA</p>
          </Reveal>
          <Reveal delay={140}>
            <p>Alameda Grajaú, 219 – 3º andar – Alphaville, Barueri – SP, 06454-050</p>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};
