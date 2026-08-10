import { useEffect, useRef, useState } from "react";
import styles from "./DistributorCTA.module.css";

const DistributorCTA = () => {
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
    <section id="distribuidor" ref={sectionRef} className={styles.cta}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={`${styles.overline} ${visible ? styles.visible : ""}`}>
            DISTRIBUIDORES AEC-VE
          </span>
          <h2 className={`${styles.title} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.1s" }}>
            ÚNETE A LA RED <span className={styles.accent}>OFICIAL</span>
          </h2>
          <p className={`${styles.desc} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.2s" }}>
            Forma parte de la red de distribuidores autorizados AEC y accede a precios
            competitivos, soporte logístico directo y la garantía de trabajar con una
            marca exclusiva respaldada por SUPER HIDROMACK, C.A.
          </p>
          <div className={`${styles.actions} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.3s" }}>
            <a href="#contacto" className={styles.btnPrimary}>
              SOLICITAR INFORMACIÓN
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:contacto@hidromack.com" className={styles.btnSecondary}>
              contacto@hidromack.com
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.card} ${visible ? styles.visible : ""}`} style={{ transitionDelay: "0.4s" }}>
            <div className={styles.cardHeader}>
              <span className={styles.cardDot} />
              <span className={styles.cardLabel}>BENEFICIOS DISTRIBUIDOR</span>
            </div>
            <ul className={styles.cardList}>
              <li><span className={styles.cardCheck}>✓</span>Precios exclusivos por volumen</li>
              <li><span className={styles.cardCheck}>✓</span>Soporte técnico especializado</li>
              <li><span className={styles.cardCheck}>✓</span>Garantía extendida AEC-VE</li>
              <li><span className={styles.cardCheck}>✓</span>Material promocional de marca</li>
              <li><span className={styles.cardCheck}>✓</span>Logística directa desde planta</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorCTA;
