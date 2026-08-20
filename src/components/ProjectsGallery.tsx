import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ArrowIcon } from "./icons/ArrowIcon";
import { cn } from "../lib/cn";

const projects = [
  {
    id: "aec-p01",
    image: "/aec-producto-1.png",
    title: "AEC-P01",
    subtitle: "Silicon Gasket Maker Ultra Grey",
    bg: "linear-gradient(160deg, #047857 0%, #10b981 50%, #34d399 100%)",
  },
  {
    id: "aec-p02",
    image: "/aec-producto-2.png",
    title: "AEC-P02",
    subtitle: "Bomba de Gasolina",
    bg: "linear-gradient(140deg, #1e3a5f 0%, #2563eb 40%, #3b82f6 100%)",
  },
  {
    id: "aec-p03",
    image: "/aec-producto-3.png",
    title: "AEC-P03",
    subtitle: "Limpia Carburador",
    bg: "linear-gradient(170deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
  },
  {
    id: "aec-p04",
    image: "/aec-producto-4.png",
    title: "AEC-P04",
    subtitle: "Línea Premium",
    bg: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #059669 100%)",
  },
  {
    id: "aec-p05",
    image: "/aec-producto-1.png",
    title: "AEC-P05",
    subtitle: "Sellador Industrial",
    bg: "linear-gradient(155deg, #c2410c 0%, #f97316 50%, #fbbf24 100%)",
  },
  {
    id: "aec-p06",
    image: "/aec-producto-2.png",
    title: "AEC-P06",
    subtitle: "Kit de Reparación",
    bg: "linear-gradient(145deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)",
  },
];

const leftCards = [
  { project: projects[0]!, minHeight: "min-h-[380px]", delay: "0.05s" },
  { project: projects[1]!, minHeight: "min-h-[200px]", delay: "0.12s" },
  { project: projects[4]!, minHeight: "min-h-[280px]", delay: "0.2s" },
];

const rightCards = [
  { project: projects[2]!, minHeight: "min-h-[440px]", delay: "0.08s" },
  { project: projects[3]!, minHeight: "min-h-[240px]", delay: "0.15s" },
  { project: projects[5]!, minHeight: "min-h-[360px]", delay: "0.25s" },
];

const cardBaseClasses =
  "group relative w-full cursor-pointer overflow-hidden rounded-[20px] opacity-0 translate-y-[50px] scale-95 transition-[opacity,transform,box-shadow] duration-[900ms] ease-out-expo hover:z-[5] hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_24px_56px_rgba(15,23,42,0.18)] hover:duration-[400ms]";

function GalleryCard({
  image,
  subtitle,
  title,
  bg,
  minHeight,
  delay,
  visible,
}: {
  image: string;
  subtitle: string;
  title: string;
  bg: string;
  minHeight: string;
  delay: string;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        cardBaseClasses,
        minHeight,
        "max-lg:min-h-[320px] max-sm:min-h-[260px]",
        visible && "scale-100 translate-y-0 opacity-100",
      )}
      style={{ transitionDelay: delay, background: bg }}
    >
      <div className="relative box-border flex h-full min-h-[inherit] w-full items-center justify-center px-6 py-8 max-sm:px-4 max-sm:py-6">
        <img
          src={image}
          alt={subtitle}
          className="h-auto w-auto max-h-[300px] max-w-full object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.2)] transition-[transform,filter] duration-[600ms] ease-out-expo group-hover:-rotate-2 group-hover:scale-[1.08] group-hover:drop-shadow-[0_24px_48px_rgba(0,0,0,0.3)] max-sm:max-h-[200px]"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-1.5 bg-[linear-gradient(to_top,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.2)_50%,transparent_100%)] px-7 py-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="font-mono text-[10px] font-bold tracking-[1.5px] text-white/75 uppercase">
          {title}
        </span>
        <span className="font-body text-lg font-semibold leading-[1.3] text-white">{subtitle}</span>
      </div>
    </div>
  );
}

const ProjectsGallery = () => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] w-full bg-bg-primary py-[120px] max-sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-12 max-lg:px-8 max-sm:px-5">
        <div className="mb-[72px] max-sm:mb-12">
          <span
            className={cn(
              "mb-4 block font-mono text-xs font-bold tracking-[2.5px] text-accent-primary uppercase",
              "translate-y-5 opacity-0 transition-[opacity,transform] duration-700 ease-out-expo",
              visible && "translate-y-0 opacity-100",
            )}
          >
            PORTAFOLIO DE PRODUCTOS
          </span>
          <h2
            className={cn(
              "m-0 font-display text-[clamp(48px,7vw,88px)] font-normal leading-[0.95] tracking-[2px] text-text-primary",
              "translate-y-5 opacity-0 transition-[opacity,transform] delay-100 duration-[800ms] ease-out-expo",
              "max-sm:text-[clamp(36px,10vw,48px)]",
              visible && "translate-y-0 opacity-100",
            )}
          >
            Línea <span className="text-accent-secondary">AEC</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-0 lg:grid-cols-[1fr_auto_1fr] max-lg:gap-8">
          <div className="flex flex-col gap-5 px-6 first:pl-0 max-lg:px-0">
            {leftCards.map(({ project, minHeight, delay }) => (
              <GalleryCard
                key={project.id}
                image={project.image}
                subtitle={project.subtitle}
                title={project.title}
                bg={project.bg}
                minHeight={minHeight}
                delay={delay}
                visible={visible}
              />
            ))}

            <a
              href="https://catalogohidromack.aec-ve.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group mt-3 inline-flex w-fit items-center justify-center gap-2.5 rounded-[100px] bg-text-primary px-8 py-3.5",
                "font-body text-[13px] font-bold tracking-[0.8px] text-white uppercase no-underline",
                "translate-y-5 opacity-0 transition-[background,transform,box-shadow] duration-[250ms] ease-smooth",
                "hover:scale-[1.04] hover:bg-accent-primary hover:ease-out-back hover:shadow-[0_6px_24px_var(--color-accent-glow)]",
                "max-sm:w-full max-sm:box-border",
                visible && "translate-y-0 opacity-100",
              )}
              style={{ transitionDelay: "0.4s" }}
            >
              EXPLORAR CATÁLOGO COMPLETO
              <ArrowIcon
                size={16}
                className="transition-transform duration-[300ms] ease-out-expo group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="hidden min-h-[600px] w-px self-stretch bg-[repeating-linear-gradient(to_bottom,var(--color-border-medium)_0px,var(--color-border-medium)_6px,transparent_6px,transparent_14px)] lg:block" />

          <div className="flex flex-col gap-5 px-6 last:pr-0 max-lg:px-0">
            {rightCards.map(({ project, minHeight, delay }) => (
              <GalleryCard
                key={project.id}
                image={project.image}
                subtitle={project.subtitle}
                title={project.title}
                bg={project.bg}
                minHeight={minHeight}
                delay={delay}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
