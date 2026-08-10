import { useEffect, useRef, useState } from "react";
import styles from "./Products.module.css";

interface Product {
  code: string;
  name: string;
  description: string;
  tag: string;
  tagColor: string;
  tagBorder: string;
  image: string;
}

const products: Product[] = [
  {
    code: "AEC-P01",
    name: "Silicon",
    description: "Sellador multiuso para juntas y superficies. Alto desempeño térmico y resistencia a aceites.",
    tag: "STOCK DISPONIBLE",
    tagColor: "#2563eb",
    tagBorder: "rgba(37,99,235,0.15)",
    image: "/aec-producto-1.png",
  },
  {
    code: "AEC-P02",
    name: "Bomba de Gasolina",
    description: "Suministro estable para sistemas de alimentación. Compatibilidad OEM garantizada.",
    tag: "NUEVO",
    tagColor: "#10b981",
    tagBorder: "rgba(16,185,129,0.2)",
    image: "/aec-producto-2.png",
  },
  {
    code: "AEC-P03",
    name: "Limpia Carburador",
    description: "Limpieza efectiva de carburadores y cuerpos de admisión. Fórmula concentrada profesional.",
    tag: "DISPONIBLE",
    tagColor: "#2563eb",
    tagBorder: "rgba(37,99,235,0.15)",
    image: "/aec-producto-3.png",
  },
];

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="productos" ref={sectionRef} className={styles.products}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`${styles.overline} ${visible ? styles.visible : ""}`}>
            LÍNEA DE PRODUCTOS
          </span>
          <h2 className={`${styles.title} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.1s" }}>
            REPUESTOS DE <span className={styles.accent}>ALTO RENDIMIENTO</span>
          </h2>
          <p className={`${styles.desc} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.2s" }}>
            Cada producto AEC es desarrollado bajo estándares de calidad
            certificada para garantizar el máximo desempeño en condiciones
            venezolanas.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <div
              key={product.code}
              className={`${styles.card} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.25 + i * 0.12}s` }}
            >
              <div className={styles.cardTop}>
                <span
                  className={styles.tag}
                  style={{ color: product.tagColor, borderColor: product.tagBorder }}
                >
                  {product.tag}
                </span>
                <span className={styles.code}>{product.code}</span>
              </div>

              <div className={styles.cardVisual}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>

              <h3 className={styles.cardName}>{product.name}</h3>
              <p className={styles.cardDesc}>{product.description}</p>

              <div className={styles.cardFooter}>
                <a
                  href="https://catalogohidromack.aec-ve.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  style={{ color: product.tagColor }}
                >
                  Ver en catálogo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.catalogCta}>
          <a
            href="https://catalogohidromack.aec-ve.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.catalogBtn}
          >
            <span>EXPLORAR CATÁLOGO COMPLETO</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
