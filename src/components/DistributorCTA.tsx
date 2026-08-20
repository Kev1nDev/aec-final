import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ArrowIcon } from "./icons/ArrowIcon";
import { cn } from "../lib/cn";

const benefits = [
  "Precios exclusivos por volumen",
  "Soporte técnico especializado",
  "Garantía extendida AEC-VE",
  "Material promocional de marca",
  "Logística directa desde planta",
];

const DistributorCTA = () => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="distribuidor"
      ref={sectionRef}
      className={cn(
        "relative z-[2] w-full overflow-hidden bg-bg-green-50 py-[120px] max-sm:py-20",
        "before:pointer-events-none before:absolute before:inset-0 before:content-['']",
        "before:bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(37,99,235,0.04)_0%,transparent_60%),radial-gradient(ellipse_40%_60%_at_20%_80%,rgba(16,185,129,0.03)_0%,transparent_60%)]",
      )}
    >
      <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 sm:gap-[60px] sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-12">
        <div>
          <span
            className={cn(
              "mb-5 block font-mono text-xs font-bold tracking-[2.5px] text-accent-primary uppercase",
              "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
              visible && "translate-y-0 opacity-100",
            )}
          >
            DISTRIBUIDORES AEC-VE
          </span>
          <h2
            className={cn(
              "m-0 font-display text-[clamp(40px,6vw,72px)] font-normal leading-[0.95] tracking-[1.5px] text-text-primary",
              "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
              visible && "translate-y-0 opacity-100",
            )}
            style={{ transitionDelay: "0.1s" }}
          >
            ÚNETE A LA RED <span className="text-accent-secondary">OFICIAL</span>
          </h2>
          <p
            className={cn(
              "m-0 mt-6 max-w-[520px] font-body text-[17px] leading-[1.7] text-text-secondary",
              "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
              visible && "translate-y-0 opacity-100",
            )}
            style={{ transitionDelay: "0.2s" }}
          >
            Forma parte de la red de distribuidores autorizados AEC y accede a precios competitivos,
            soporte logístico directo y la garantía de trabajar con una marca exclusiva respaldada
            por SUPER HIDROMACK, C.A.
          </p>
          <div
            className={cn(
              "mt-10 flex flex-wrap items-center gap-4 opacity-0 translate-y-5",
              "transition-[opacity,transform] duration-700 ease-out-expo max-sm:w-full max-sm:flex-col",
              visible && "translate-y-0 opacity-100",
            )}
            style={{ transitionDelay: "0.3s" }}
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-lg bg-accent-primary px-8 py-4 font-body text-[13px] font-bold tracking-[1px] text-text-inverse uppercase no-underline whitespace-nowrap transition duration-[250ms] ease-smooth hover:scale-[1.03] hover:bg-accent-hover hover:ease-out-back hover:shadow-[0_8px_32px_var(--color-accent-glow)] max-sm:w-full max-sm:justify-center max-sm:box-border"
            >
              SOLICITAR INFORMACIÓN
              <ArrowIcon
                size={16}
                className="transition-transform duration-[300ms] ease-out-expo group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:contacto@hidromack.com"
              className="inline-flex items-center rounded-lg border border-border-subtle bg-transparent px-8 py-4 font-mono text-[13px] tracking-[0.5px] text-text-secondary no-underline whitespace-nowrap transition-[border-color,color] duration-[250ms] ease-smooth hover:border-border-medium hover:text-text-primary max-sm:w-full max-sm:justify-center max-sm:box-border"
            >
              contacto@hidromack.com
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div
            className={cn(
              "w-full max-w-[420px] overflow-hidden rounded-xl border border-border-subtle border-t-[3px] border-t-accent-secondary bg-bg-primary shadow-md",
              "translate-y-[30px] rotate-1 opacity-0 transition-[opacity,transform,box-shadow] duration-700 ease-out-expo",
              "hover:shadow-[0_12px_40px_rgba(16,185,129,0.08),var(--shadow-md)] max-lg:max-w-full",
              visible && "rotate-0 translate-y-0 opacity-100",
            )}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2.5 border-b border-border-subtle bg-bg-secondary px-5 py-4">
              <span className="size-2 animate-[pulse-glow-green_2s_ease-in-out_infinite] rounded-full bg-accent-secondary" />
              <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-text-muted uppercase">
                BENEFICIOS DISTRIBUIDOR
              </span>
            </div>
            <ul className="m-0 flex list-none flex-col gap-3 p-5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 font-body text-sm leading-[1.5] text-text-secondary"
                >
                  <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-accent-secondary-light text-xs font-bold text-accent-secondary">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorCTA;
