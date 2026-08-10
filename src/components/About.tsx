import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const About = () => {
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
    <section id="nosotros" ref={sectionRef} className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={`${styles.overline} ${visible ? styles.visible : ""}`}>
              LA MARCA
            </span>
            <h2 className={`${styles.title} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.1s" }}>
              AEC ES LA <span className={styles.accent}>MARCA EXCLUSIVA</span> DE SUPER HIDROMACK, C.A.
            </h2>
          </div>

          <div className={styles.right}>
            <p className={`${styles.text} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.2s" }}>
              Desarrollada para ofrecer repuestos automotrices de calidad certificada con respaldo
              directo del distribuidor. Representa el objetivo estratégico central del portafolio:
              llegar al <strong>40% del volumen total de ventas</strong> con una propuesta propia,
              trazable y competitiva en el mercado venezolano.
            </p>
            <p className={`${styles.text} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.3s" }}>
              Cada producto AEC lleva el sello de garantía propia y la trazabilidad que los
              talleres y distribuidores necesitan para operar con confianza en un mercado
              que exige calidad real.
            </p>

            <div className={`${styles.metrics} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.4s" }}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>100%</span>
                <span className={styles.metricLabel}>GARANTÍA PROPIA</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>AEC-VE</span>
                <span className={styles.metricLabel}>CÓDIGO OFICIAL</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue}>+40%</span>
                <span className={styles.metricLabel}>META DE VENTAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
