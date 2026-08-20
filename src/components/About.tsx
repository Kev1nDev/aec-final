import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { cn } from "../lib/cn";

const About = () => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative z-[2] w-full bg-bg-blue-50 py-[120px] max-sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-12 max-lg:px-8 max-sm:px-5">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="sticky top-[120px] max-lg:static">
            <span
              className={cn(
                "mb-5 block font-mono text-xs font-bold tracking-[2.5px] text-accent-primary uppercase",
                "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
                visible && "translate-y-0 opacity-100",
              )}
            >
              LA MARCA
            </span>
            <h2
              className={cn(
                "relative m-0 pb-5 font-display text-[clamp(36px,5vw,64px)] font-normal leading-[0.98] tracking-[1.5px] text-text-primary",
                "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[60px] after:rounded-[2px] after:content-['']",
                "after:bg-[linear-gradient(to_right,var(--color-accent-primary),var(--color-accent-secondary))]",
                visible && "translate-y-0 opacity-100",
              )}
              style={{ transitionDelay: "0.1s" }}
            >
              AEC ES LA <span className="text-accent-secondary">MARCA EXCLUSIVA</span> DE SUPER
              HIDROMACK, C.A.
            </h2>
          </div>

          <div>
            <p
              className={cn(
                "m-0 mb-6 font-body text-[17px] leading-[1.8] text-text-secondary",
                "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
                visible && "translate-y-0 opacity-100",
              )}
              style={{ transitionDelay: "0.2s" }}
            >
              Desarrollada para ofrecer repuestos automotrices de calidad certificada con respaldo
              directo del distribuidor. Representa el objetivo estratégico central del portafolio:
              llegar al{" "}
              <strong className="font-semibold text-text-primary">
                40% del volumen total de ventas
              </strong>{" "}
              con una propuesta propia, trazable y competitiva en el mercado venezolano.
            </p>
            <p
              className={cn(
                "m-0 mb-6 font-body text-[17px] leading-[1.8] text-text-secondary",
                "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
                visible && "translate-y-0 opacity-100",
              )}
              style={{ transitionDelay: "0.3s" }}
            >
              Cada producto AEC lleva el sello de garantía propia y la trazabilidad que los talleres
              y distribuidores necesitan para operar con confianza en un mercado que exige calidad
              real.
            </p>

            <div
              className={cn(
                "mt-10 flex gap-8 border-t border-border-subtle pt-10",
                "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
                "max-sm:mt-8 max-sm:flex-col max-sm:gap-5 max-sm:pt-8",
                visible && "translate-y-0 opacity-100",
              )}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="flex flex-col gap-1.5">
                <span className="font-display text-[28px] leading-none tracking-[1px] text-text-primary">
                  100%
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-text-muted uppercase">
                  GARANTÍA PROPIA
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-display text-[28px] leading-none tracking-[1px] text-text-primary">
                  AEC-VE
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-text-muted uppercase">
                  CÓDIGO OFICIAL
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-display text-[28px] leading-none tracking-[1px] text-text-primary">
                  +40%
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-text-muted uppercase">
                  META DE VENTAS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
