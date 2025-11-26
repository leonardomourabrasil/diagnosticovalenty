import { Reveal } from "@/components/Reveal";
import { useIsMobile } from "@/hooks/use-mobile";

export const ClientsSection = () => {
  const isMobile = useIsMobile();
  // Use a ordem sequencial 1.png, 2.png, ... colocadas em /public/clients
  // Caso algum logo não esteja disponível, um placeholder será exibido.
  const placeholder = "/placeholder.svg";
  const logoCount = 16;
  const logos = Array.from({ length: logoCount }, (_, i) => ({
    src: `/clients/${i + 1}.png`,
    alt: `Logo ${i + 1}`,
  }));

  // Mostrar apenas 5 linhas no mobile (grid de 2 colunas => 10 itens)
  const MOBILE_ROWS = 5;
  const MOBILE_COLS = 2; // conforme classes: grid-cols-2
  const mobileLimit = MOBILE_ROWS * MOBILE_COLS; // 10
  const logosToRender = isMobile ? logos.slice(0, mobileLimit) : logos;

  return (
    <section className="bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary uppercase">
            Clientes Valentes
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {logosToRender.map((logo, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-5 md:p-6 flex items-center justify-center hover:border-accent transition-colors min-h-[90px] md:min-h-[100px]"
              aria-label={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain"
                loading="lazy"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  try {
                    const url = new URL(t.src);
                    const pathname = url.pathname; // e.g. /clients/1.png
                    const extMatch = pathname.match(/\.(png|jpg|jpeg|webp)$/i);
                    if (extMatch) {
                      const ext = extMatch[1].toLowerCase();
                      const nextExt = ext === "png" ? "jpg" : ext === "jpg" || ext === "jpeg" ? "webp" : null;
                      if (nextExt) {
                        const nextPath = pathname.replace(new RegExp(`\\.${ext}$`, "i"), `.${nextExt}`);
                        t.src = `${url.origin}${nextPath}`;
                        return;
                      }
                    }
                  } catch (_) {
                    // ignore
                  }
                  if (t.src !== window.location.origin + placeholder) {
                    t.src = placeholder;
                  }
                }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-lg">
          + centenas de outras organizações que escolheram transformar sua liderança
        </p>
      </div>
    </section>
  );
};
