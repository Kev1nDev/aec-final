import { useEffect, useRef, useState } from "react";
import styles from "./Showcase.module.css";

const Showcase = () => {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.showcase}>
      <div className={styles.inner}>
        {/* Floating product: left, rotated */}
        <div
          className={`${styles.productLeft} ${visible ? styles.visible : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div className={styles.productGlowLeft} />
          <img
            src="/aec-producto-3.png"
            alt="AEC Producto - Limpia Carburador"
            className={styles.productImage}
            loading="lazy"
          />
          <div className={styles.productLabel}>
            <span className={styles.productCode}>AEC-P03</span>
            <span className={styles.productName}>Limpia Carburador</span>
          </div>
        </div>

        {/* Center text */}
        <div
          className={`${styles.center} ${visible ? styles.visible : ""}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <h2 className={styles.title}>
            Calidad certificada
            <br />
            <span className={styles.accent}>garantía propia.</span>
          </h2>
          <p className={styles.subtext}>
            Cada producto AEC es desarrollado bajo estándares internacionales
            con trazabilidad completa y respaldo del distribuidor oficial.
          </p>
          <a href="#productos" className={styles.cta}>
            EXPLORAR LÍNEA
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Floating product: right, rotated opposite */}
        <div
          className={`${styles.productRight} ${visible ? styles.visible : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className={styles.productGlowRight} />
          <img
            src="/aec-producto-2.png"
            alt="AEC Producto - Bomba de Gasolina"
            className={styles.productImage}
            loading="lazy"
          />
          <div className={styles.productLabel}>
            <span className={styles.productCode}>AEC-P02</span>
            <span className={styles.productName}>Bomba de Gasolina</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
