import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ArrowIcon } from "./icons/ArrowIcon";
import { cn } from "../lib/cn";

const Showcase = () => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative z-[2] w-full overflow-hidden bg-bg-blue-50 py-[160px] max-lg:py-[100px] max-sm:py-20",
        "before:pointer-events-none before:absolute before:inset-0 before:content-['']",
        "before:bg-[radial-gradient(ellipse_50%_40%_at_30%_60%,rgba(37,99,235,0.04)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_70%_30%,rgba(16,185,129,0.03)_0%,transparent_60%)]",
      )}
    >
      <div className="relative z-[2] mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 sm:gap-[60px] sm:px-8 lg:min-h-[600px] lg:grid-cols-3 lg:px-12">
        <div
          className={cn(
            "group relative flex flex-col items-center justify-center opacity-0 -translate-y-[60px] -rotate-[8deg]",
            "transition-[opacity,transform] duration-[900ms] ease-out-expo",
            "hover:-translate-y-[70px] hover:-rotate-[6deg] hover:scale-[1.03]",
            "max-lg:translate-y-0 max-lg:rotate-0 max-lg:hover:translate-y-0 max-lg:hover:rotate-0 max-lg:hover:scale-[1.03]",
            visible && "opacity-100",
          )}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="pointer-events-none absolute z-0 size-[280px] animate-[float_7s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)] blur-[40px]" />
          <img
            src="/aec-producto-3.png"
            alt="AEC Producto - Limpia Carburador"
            className="relative z-[2] h-auto w-full max-w-[340px] object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.12)] transition-[filter] duration-[400ms] ease-smooth group-hover:drop-shadow-[0_32px_60px_rgba(15,23,42,0.18)] max-lg:max-w-[280px] max-sm:max-w-[220px]"
            loading="lazy"
          />
          <div className="relative z-[3] mt-5 flex flex-col items-center gap-1 rounded-[10px] border border-border-subtle bg-bg-primary px-[18px] py-2.5 shadow-md">
            <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-accent-secondary">
              AEC-P03
            </span>
            <span className="font-body text-sm font-semibold text-text-primary">
              Limpia Carburador
            </span>
          </div>
        </div>

        <div
          className={cn(
            "order-first flex flex-col items-center gap-5 text-center opacity-0 translate-y-5",
            "transition-[opacity,transform] duration-[800ms] ease-out-expo lg:order-none",
            visible && "translate-y-0 opacity-100",
          )}
          style={{ transitionDelay: "0.3s" }}
        >
          <h2 className="m-0 font-display text-[clamp(36px,5vw,64px)] font-normal leading-[0.98] tracking-[1.5px] text-text-primary max-sm:text-[clamp(32px,10vw,48px)]">
            Calidad certificada
            <br />
            <span className="text-accent-secondary">garantía propia.</span>
          </h2>
          <p className="m-0 max-w-[320px] font-body text-base leading-[1.7] text-text-secondary">
            Cada producto AEC es desarrollado bajo estándares internacionales con trazabilidad
            completa y respaldo del distribuidor oficial.
          </p>
          <a
            href="#productos"
            className="group mt-2 inline-flex items-center gap-2.5 rounded-lg bg-accent-primary px-7 py-3.5 font-body text-xs font-bold tracking-[1px] text-text-inverse uppercase no-underline transition duration-[250ms] ease-smooth hover:scale-[1.03] hover:bg-accent-hover hover:ease-out-back hover:shadow-[0_6px_24px_var(--color-accent-glow)] max-sm:w-full max-sm:justify-center max-sm:box-border"
          >
            EXPLORAR LÍNEA
            <ArrowIcon
              size={16}
              className="transition-transform duration-[300ms] ease-out-expo group-hover:translate-x-1"
            />
          </a>
        </div>

        <div
          className={cn(
            "group relative flex flex-col items-center justify-center opacity-0 translate-y-[60px] rotate-[10deg]",
            "transition-[opacity,transform] duration-[900ms] ease-out-expo",
            "hover:translate-y-[50px] hover:rotate-[8deg] hover:scale-[1.03]",
            "max-lg:translate-y-0 max-lg:rotate-0 max-lg:hover:translate-y-0 max-lg:hover:rotate-0 max-lg:hover:scale-[1.03]",
            visible && "opacity-100",
          )}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="pointer-events-none absolute z-0 size-[280px] animate-[float_8s_ease-in-out_1s_infinite_reverse] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-[40px]" />
          <img
            src="/aec-producto-2.png"
            alt="AEC Producto - Bomba de Gasolina"
            className="relative z-[2] h-auto w-full max-w-[340px] object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.12)] transition-[filter] duration-[400ms] ease-smooth group-hover:drop-shadow-[0_32px_60px_rgba(15,23,42,0.18)] max-lg:max-w-[280px] max-sm:max-w-[220px]"
            loading="lazy"
          />
          <div className="relative z-[3] mt-5 flex flex-col items-center gap-1 rounded-[10px] border border-border-subtle bg-bg-primary px-[18px] py-2.5 shadow-md">
            <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-accent-secondary">
              AEC-P02
            </span>
            <span className="font-body text-sm font-semibold text-text-primary">
              Bomba de Gasolina
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
