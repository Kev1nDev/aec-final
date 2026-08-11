import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ArrowIcon } from "./icons/ArrowIcon";
import styles from "./ProjectsGallery.module.css";

const projects = [
  {
    id: "aec-p01",
    image: "/aec-producto-1.png",
    title: "AEC-P01",
    subtitle: "Silicon Gasket Maker Ultra Grey",
    bg: "linear-gradient(160deg, #047857 0%, #10b981 50%, #34d399 100%)",
    size: "large",
  },
  {
    id: "aec-p02",
    image: "/aec-producto-2.png",
    title: "AEC-P02",
    subtitle: "Bomba de Gasolina",
    bg: "linear-gradient(140deg, #1e3a5f 0%, #2563eb 40%, #3b82f6 100%)",
    size: "wide",
  },
  {
    id: "aec-p03",
    image: "/aec-producto-3.png",
    title: "AEC-P03",
    subtitle: "Limpia Carburador",
    bg: "linear-gradient(170deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)",
    size: "tall",
  },
  {
    id: "aec-p04",
    image: "/aec-producto-4.png",
    title: "AEC-P04",
    subtitle: "Línea Premium",
    bg: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #059669 100%)",
    size: "medium",
  },
  {
    id: "aec-p05",
    image: "/aec-producto-1.png",
    title: "AEC-P05",
    subtitle: "Sellador Industrial",
    bg: "linear-gradient(155deg, #c2410c 0%, #f97316 50%, #fbbf24 100%)",
    size: "small",
  },
  {
    id: "aec-p06",
    image: "/aec-producto-2.png",
    title: "AEC-P06",
    subtitle: "Kit de Reparación",
    bg: "linear-gradient(145deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)",
    size: "xlarge",
  },
] as const;

const ProjectsGallery = () => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.1 });
  const [p0, p1, p2, p3, p4, p5] = projects;

  return (
    <section ref={sectionRef} className={styles.gallery}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`${styles.overline} ${visible ? styles.visible : ""}`}>
            PORTAFOLIO DE PRODUCTOS
          </span>
          <h2 className={`${styles.title} ${visible ? styles.visible : ""}`}>
            Línea <span className={styles.accent}>AEC</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* LEFT COLUMN - más contenido, tamaños variados */}
          <div className={styles.column}>
            <div
              className={`${styles.card} ${styles.cardLarge} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: "0.05s", background: p0.bg }}
            >
              <div className={styles.cardContent}>
                <img
                  src={p0.image}
                  alt={p0.subtitle}
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardTag}>{p0.title}</span>
                <span className={styles.cardName}>{p0.subtitle}</span>
              </div>
            </div>

            <div
              className={`${styles.card} ${styles.cardSmall} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: "0.12s", background: p1.bg }}
            >
              <div className={styles.cardContent}>
                <img
                  src={p1.image}
                  alt={p1.subtitle}
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardTag}>{p1.title}</span>
                <span className={styles.cardName}>{p1.subtitle}</span>
              </div>
            </div>

            <div
              className={`${styles.card} ${styles.cardMedium} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: "0.2s", background: p4.bg }}
            >
              <div className={styles.cardContent}>
                <img
                  src={p4.image}
                  alt={p4.subtitle}
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardTag}>{p4.title}</span>
                <span className={styles.cardName}>{p4.subtitle}</span>
              </div>
            </div>

            <a
              href="https://catalogohidromack.aec-ve.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.catalogBtn} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              EXPLORAR CATÁLOGO COMPLETO
              <ArrowIcon size={16} />
            </a>
          </div>

          {/* DIVIDER */}
          <div className={styles.divider} />

          {/* RIGHT COLUMN - distribución diferente */}
          <div className={styles.column}>
            <div
              className={`${styles.card} ${styles.cardTall} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: "0.08s", background: p2.bg }}
            >
              <div className={styles.cardContent}>
                <img
                  src={p2.image}
                  alt={p2.subtitle}
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardTag}>{p2.title}</span>
                <span className={styles.cardName}>{p2.subtitle}</span>
              </div>
            </div>

            <div
              className={`${styles.card} ${styles.cardWide} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: "0.15s", background: p3.bg }}
            >
              <div className={styles.cardContent}>
                <img
                  src={p3.image}
                  alt={p3.subtitle}
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardTag}>{p3.title}</span>
                <span className={styles.cardName}>{p3.subtitle}</span>
              </div>
            </div>

            <div
              className={`${styles.card} ${styles.cardXLarge} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: "0.25s", background: p5.bg }}
            >
              <div className={styles.cardContent}>
                <img
                  src={p5.image}
                  alt={p5.subtitle}
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardTag}>{p5.title}</span>
                <span className={styles.cardName}>{p5.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
