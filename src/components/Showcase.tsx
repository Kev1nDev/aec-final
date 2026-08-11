import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ArrowIcon } from "./icons/ArrowIcon";
import styles from "./Showcase.module.css";

const Showcase = () => {
  const { ref: sectionRef, visible } = useIntersectionObserver({ threshold: 0.2 });

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
            <ArrowIcon size={16} />
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
