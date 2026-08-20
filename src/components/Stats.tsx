import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { cn } from "../lib/cn";

const stats = [
  { value: "40", label: "META DE VENTAS", suffix: "%" },
  { value: "100", label: "GARANTÍA PROPIA", suffix: "%" },
  { value: "AEC", label: "CÓDIGO DISTRIBUIDOR", suffix: "-VE" },
];

const Stats = () => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section ref={sectionRef} className="relative z-[2] w-full bg-bg-blue-50">
      <div className="mx-auto max-w-[1440px] px-12 max-md:px-6">
        <div className="h-px bg-[linear-gradient(to_right,transparent,var(--color-border-medium),transparent)]" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "border-b border-border-subtle px-5 py-12 text-center opacity-0 translate-y-[30px]",
                "transition-[opacity,transform] duration-[800ms] ease-out-expo last:border-b-0",
                "md:border-r md:border-b-0 md:px-10 md:py-16 md:last:border-r-0",
                visible && "translate-y-0 opacity-100",
              )}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className={cn(
                  "font-display text-[clamp(48px,6vw,80px)] leading-none tracking-[2px] text-text-primary transition-shadow duration-300",
                  visible && "[text-shadow:0_0_40px_rgba(37,99,235,0.12)]",
                )}
              >
                {stat.value}
                {stat.suffix && <span className="text-accent-primary">{stat.suffix}</span>}
              </div>
              <div className="mt-3 font-mono text-[11px] font-bold tracking-[2px] text-text-muted uppercase">
                {stat.label}
              </div>
              <div
                className={cn(
                  "mx-auto mt-5 h-[3px] w-12 rounded-[2px] opacity-0 scale-x-0",
                  "bg-[linear-gradient(to_right,var(--color-accent-primary),var(--color-accent-secondary))]",
                  "transition-[opacity,transform] delay-[300ms] duration-[600ms] ease-out-expo",
                  visible && "scale-x-100 opacity-100",
                )}
              />
            </div>
          ))}
        </div>
        <div className="h-px bg-[linear-gradient(to_right,transparent,var(--color-border-medium),transparent)]" />
      </div>
    </section>
  );
};

export default Stats;
