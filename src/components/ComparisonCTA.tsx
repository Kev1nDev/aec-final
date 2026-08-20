import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { IconCheck, IconX } from "@tabler/icons-react";
import { cn } from "../lib/cn";

interface ComparisonRow {
  feature: string;
  aec: string;
  others: string;
  aecWins: boolean;
}

interface ComparisonCTAProps {
  className?: string;
}

const defaultRows: ComparisonRow[] = [
  { feature: "Garantía Propia", aec: "100% AEC-VE", others: "Sin respaldo", aecWins: true },
  { feature: "Trazabilidad", aec: "Completa", others: "Limitada", aecWins: true },
  {
    feature: "Distribuidor Oficial",
    aec: "Sí — SUPER HIDROMACK",
    others: "Intermediarios",
    aecWins: true,
  },
  { feature: "Calidad Certificada", aec: "Estándares OEM", others: "Genérico", aecWins: true },
  { feature: "Stock Garantizado", aec: "Inventario permanente", others: "Variable", aecWins: true },
  { feature: "Soporte Técnico", aec: "Especializado 24/7", others: "No incluido", aecWins: true },
];

const ComparisonCTA = ({ className = "" }: ComparisonCTAProps) => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      id="catalogo"
      ref={sectionRef}
      className={cn("relative w-full bg-bg-secondary py-20 max-sm:py-12", className)}
    >
      <div className="mx-auto max-w-[1440px] px-12 max-sm:px-5">
        <div className="mb-12 text-center">
          <span
            className={cn(
              "mb-4 block font-mono text-[11px] font-bold tracking-[2px] text-accent-primary uppercase",
              "translate-y-5 opacity-0 transition-[opacity,transform] duration-[600ms] ease-out-expo",
              visible && "translate-y-0 opacity-100",
            )}
          >
            POR QUÉ ELEGIR AEC
          </span>
          <h2
            className={cn(
              "m-0 font-display text-[clamp(36px,5vw,64px)] font-normal leading-none tracking-[2px] text-text-primary uppercase",
              "translate-y-5 opacity-0 transition-[opacity,transform] duration-[600ms] ease-out-expo",
              visible && "translate-y-0 opacity-100",
            )}
          >
            AEC <span className="text-accent-secondary">VS</span> GENÉRICOS
          </h2>
          <p
            className={cn(
              "m-0 mt-3 font-body text-[15px] text-text-secondary",
              "translate-y-5 opacity-0 transition-[opacity,transform] duration-[600ms] ease-out-expo",
              visible && "translate-y-0 opacity-100",
            )}
          >
            Comparativa directa. Sin marketing vacío.
          </p>
        </div>

        <div
          className={cn(
            "mx-auto max-w-[800px] overflow-hidden rounded-2xl border border-border-subtle bg-bg-primary shadow-md",
            "translate-y-[30px] opacity-0 transition-[opacity,transform] delay-100 duration-700 ease-out-expo",
            visible && "translate-y-0 opacity-100",
          )}
        >
          <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-0 border-b border-border-subtle bg-bg-blue-50 px-6 py-5 max-sm:grid-cols-[1.4fr_1fr_1fr] max-sm:px-4 max-sm:py-3.5">
            <span className="text-center font-mono text-[10px] font-bold tracking-[1.5px] text-text-muted uppercase first:text-left">
              Característica
            </span>
            <span className="text-center font-mono text-[10px] font-bold tracking-[1.5px] text-accent-primary uppercase">
              AEC-VE
            </span>
            <span className="text-center font-mono text-[10px] font-bold tracking-[1.5px] text-text-muted uppercase">
              Genéricos
            </span>
          </div>

          <div className="flex flex-col">
            {defaultRows.map((row, i) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-[1.2fr_1fr_1fr] items-center border-b border-border-subtle px-6 py-4",
                  "translate-y-[15px] opacity-0 transition-[opacity,transform,background] duration-[500ms] ease-out-expo",
                  "last:border-b-0 hover:bg-bg-secondary",
                  "max-sm:grid-cols-[1.4fr_1fr_1fr] max-sm:px-4 max-sm:py-3",
                  visible && "translate-y-0 opacity-100",
                )}
                style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
              >
                <span className="font-body text-sm font-semibold text-text-primary max-sm:text-xs">
                  {row.feature}
                </span>
                <span
                  className={cn(
                    "flex items-center justify-center gap-2 text-center font-body text-[13px] font-medium text-accent-secondary",
                    "max-sm:flex-col max-sm:gap-1 max-sm:text-[11px]",
                    row.aecWins && "font-bold",
                  )}
                >
                  <IconCheck size={16} stroke={2.5} className="shrink-0 text-accent-secondary" />
                  {row.aec}
                </span>
                <span
                  className={cn(
                    "flex items-center justify-center gap-2 text-center font-body text-[13px] font-medium text-text-muted",
                    "max-sm:flex-col max-sm:gap-1 max-sm:text-[11px]",
                    !row.aecWins && "font-bold",
                  )}
                >
                  <IconX size={16} stroke={2.5} className="shrink-0 text-text-muted opacity-60" />
                  {row.others}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-10 translate-y-5 text-center opacity-0 transition-[opacity,transform] duration-[600ms] ease-out-expo",
            visible && "translate-y-0 opacity-100",
          )}
          style={{ transitionDelay: "0.5s" }}
        >
          <a
            href="https://catalogohidromack.aec-ve.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-accent-primary px-8 py-4 font-body text-[13px] font-bold tracking-[0.8px] text-white uppercase no-underline shadow-md transition duration-[250ms] ease-smooth hover:scale-[1.04] hover:bg-accent-hover hover:ease-out-back hover:shadow-[0_6px_24px_var(--color-accent-glow)]"
          >
            VER CATÁLOGO COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCTA;
