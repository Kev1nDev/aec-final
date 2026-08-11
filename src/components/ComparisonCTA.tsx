import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { IconCheck, IconX } from "@tabler/icons-react";
import styles from "./ComparisonCTA.module.css";

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
  { feature: "Distribuidor Oficial", aec: "Sí — SUPER HIDROMACK", others: "Intermediarios", aecWins: true },
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
      className={`${styles.section} ${className}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`${styles.overline} ${visible ? styles.visible : ""}`}>
            POR QUÉ ELEGIR AEC
          </span>
          <h2 className={`${styles.title} ${visible ? styles.visible : ""}`}>
            AEC <span className={styles.accent}>VS</span> GENÉRICOS
          </h2>
          <p className={`${styles.desc} ${visible ? styles.visible : ""}`}>
            Comparativa directa. Sin marketing vacío.
          </p>
        </div>

        <div className={`${styles.table} ${visible ? styles.visible : ""}`}>
          <div className={styles.tableHeader}>
            <span className={styles.headerCell}>Característica</span>
            <span className={`${styles.headerCell} ${styles.headerAec}`}>AEC-VE</span>
            <span className={styles.headerCell}>Genéricos</span>
          </div>

          <div className={styles.tableBody}>
            {defaultRows.map((row, i) => (
              <div
                key={row.feature}
                className={`${styles.row} ${visible ? styles.visible : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
              >
                <span className={styles.feature}>{row.feature}</span>
                <span className={`${styles.aecValue} ${row.aecWins ? styles.win : ""}`}>
                  <IconCheck size={16} stroke={2.5} className={styles.check} />
                  {row.aec}
                </span>
                <span className={`${styles.othersValue} ${!row.aecWins ? styles.win : ""}`}>
                  <IconX size={16} stroke={2.5} className={styles.cross} />
                  {row.others}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.cta} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.5s" }}>
          <a
            href="https://catalogohidromack.aec-ve.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            VER CATÁLOGO COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCTA;
