import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import {
  IconShieldCheck,
  IconBuildingWarehouse,
  IconCertificate,
  IconTool,
  IconUsers,
  IconTruckDelivery,
  IconPackage,
  IconChartBar,
} from "@tabler/icons-react";
import { cn } from "../../lib/cn";

const features = [
  {
    title: "100% Garantía Propia",
    description:
      "Todos los productos AEC cuentan con respaldo directo del distribuidor. Sin intermediarios.",
    icon: IconShieldCheck,
  },
  {
    title: "Distribuidor Oficial",
    description:
      "Red AEC-VE con cobertura nacional. Soporte logístico directo desde SUPER HIDROMACK, C.A.",
    icon: IconBuildingWarehouse,
  },
  {
    title: "Calidad Certificada",
    description:
      "Desarrollados bajo estándares internacionales de calidad. Materiales seleccionados para máxima durabilidad.",
    icon: IconCertificate,
  },
  {
    title: "Compatibilidad OEM",
    description:
      "Diseñados para integrarse perfectamente con sistemas originales. Sin adaptaciones.",
    icon: IconTool,
  },
  {
    title: "Soporte Técnico 24/7",
    description:
      "Asesoría especializada para talleres y distribuidores. Resolvemos cualquier duda.",
    icon: IconUsers,
  },
  {
    title: "Logística Directa",
    description:
      "Envío desde planta hasta tu taller. Trazabilidad completa en cada etapa del proceso.",
    icon: IconTruckDelivery,
  },
  {
    title: "Stock Garantizado",
    description:
      "Inventario permanente de productos de alta rotación. Nunca te quedes sin repuestos.",
    icon: IconPackage,
  },
  {
    title: "Crecimiento +40%",
    description:
      "Meta alcanzada del volumen total de ventas. Marca exclusiva diseñada para liderar el mercado.",
    icon: IconChartBar,
  },
];

export function FeaturesSectionWithHoverEffects() {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] w-full bg-bg-primary py-[120px] max-sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-12 max-lg:px-8 max-sm:px-5">
        <div className="mb-16 text-center">
          <span
            className={cn(
              "mb-5 inline-block rounded-[100px] border border-accent-secondary/20 bg-accent-secondary-light px-4 py-2",
              "font-mono text-[11px] font-bold tracking-[2px] text-accent-secondary uppercase",
              "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
              visible && "translate-y-0 opacity-100",
            )}
          >
            POR QUÉ ELEGIR AEC
          </span>
          <h2
            className={cn(
              "m-0 font-display text-[clamp(48px,7vw,88px)] font-normal leading-[0.95] tracking-[2px] text-text-primary",
              "translate-y-5 opacity-0 transition-[opacity,transform] delay-100 duration-[800ms] ease-out-expo",
              "max-sm:text-[clamp(36px,10vw,48px)]",
              visible && "translate-y-0 opacity-100",
            )}
          >
            VENTAJAS <span className="text-accent-secondary">COMPETITIVAS</span>
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLast = index === features.length - 1;
            const even = index % 2 === 0;

            return (
              <div
                key={feature.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden border-border-subtle py-10",
                  "translate-y-[30px] opacity-0 transition-[opacity,transform] duration-[600ms] ease-out-expo",
                  "sm:py-10 max-sm:py-8",
                  // Bordes móvil (1 col): bottom para todos menos el último
                  isLast ? "border-b-0" : "border-b",
                  // Bordes tablet (2 cols): laterales por columna, bottom en las 3 primeras filas
                  even && "sm:border-l sm:border-r",
                  index < 6 ? "sm:border-b" : "sm:border-b-0",
                  // Bordes desktop (4 cols): derecha en todos, izquierda solo en inicios de fila, bottom solo fila 1
                  "lg:border-r",
                  even && (index === 0 || index === 4 ? "lg:border-l" : "lg:border-l-0"),
                  index < 4 ? "lg:border-b" : "lg:border-b-0",
                  visible && "translate-y-0 opacity-100",
                )}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                {index < 4 && (
                  <div className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_top,rgba(37,99,235,0.06),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}
                {index >= 4 && (
                  <div className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_bottom,rgba(5,150,105,0.06),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}

                <div className="relative z-10 mb-4 px-8 text-text-muted transition-colors duration-300 group-hover:text-accent-primary">
                  <Icon size={28} stroke={1.5} />
                </div>

                <div className="relative z-10 mb-2.5 px-8">
                  <div className="absolute top-1/2 left-0 h-6 w-[3px] -translate-y-1/2 rounded-r bg-border-medium transition-[height,background] duration-300 ease-out-expo group-hover:h-10 group-hover:bg-accent-secondary" />
                  <span className="inline-block font-body text-[17px] font-bold text-text-primary transition-transform duration-300 ease-out-expo group-hover:translate-x-2">
                    {feature.title}
                  </span>
                </div>

                <p className="relative z-10 m-0 max-w-[260px] px-8 font-body text-sm leading-[1.7] text-text-secondary">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
