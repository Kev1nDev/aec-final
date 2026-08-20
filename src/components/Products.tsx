import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { cn } from "../lib/cn";

const cards = [
  { src: "/aec-producto-1.png", rotation: "-rotate-3", delay: "0s" },
  { src: "/aec-producto-2.png", rotation: "rotate-2", delay: "0.5s" },
  { src: "/aec-producto-3.png", rotation: "rotate-3", delay: "1s" },
  { src: "/aec-producto-4.png", rotation: "-rotate-2", delay: "1.5s" },
] as const;

const FloatingCard = ({
  src,
  rotation,
  delay,
  visible,
}: {
  src: string;
  rotation: string;
  delay: string;
  visible: boolean;
}) => (
  <div
    className={cn(
      "transition-[opacity,transform] duration-700 ease-out-expo",
      visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
    )}
    style={{ transitionDelay: delay }}
  >
    <div
      className={cn(
        "animate-float",
        rotation,
      )}
      style={{ animationDelay: delay }}
    >
      <img
        src={src}
        alt=""
        className="h-40 w-40 object-contain drop-shadow-xl sm:h-52 sm:w-52 lg:h-64 lg:w-64"
      />
    </div>
  </div>
);

const Products = () => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative z-[2] w-full bg-bg-primary py-[120px] max-sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-12 max-lg:px-8 max-sm:px-5">
        <div className="flex flex-col gap-20 lg:gap-32">
          {/* Block 1 — Text left, cards right */}
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
            <div
              className={cn(
                "max-w-lg text-center transition-[opacity,transform] duration-700 ease-out-expo lg:text-left",
                visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
              )}
            >
              <h2 className="font-body text-2xl font-semibold leading-tight text-text-primary sm:text-3xl lg:text-4xl">
                Encuentra el repuesto exacto
                <br />
                para tu vehículo{" "}
                <span className="text-accent-secondary">en minutos</span>.
              </h2>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <FloatingCard {...cards[0]} visible={visible} />
              <FloatingCard {...cards[1]} visible={visible} />
            </div>
          </div>

          {/* Block 2 — Cards left, text right */}
          <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:justify-between lg:gap-16">
            <div
              className={cn(
                "max-w-lg text-center transition-[opacity,transform] duration-700 ease-out-expo lg:text-right",
                visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
              )}
              style={{ transitionDelay: "0.2s" }}
            >
              <h2 className="font-body text-2xl font-semibold leading-tight text-text-primary sm:text-3xl lg:text-4xl">
                Calidad garantizada en{" "}
                <span className="text-accent-secondary">cada pieza</span> que instalas.
              </h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary sm:text-base">
                Piezas de alta calidad para mantener tu vehículo en óptimas condiciones.
              </p>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <FloatingCard {...cards[2]} visible={visible} />
              <FloatingCard {...cards[3]} visible={visible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
