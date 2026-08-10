import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const stats = [
  { value: "40", label: "META DE VENTAS", suffix: "%" },
  { value: "100", label: "GARANTÍA PROPIA", suffix: "%" },
  { value: "AEC", label: "CÓDIGO DISTRIBUIDOR", suffix: "-VE" },
];

const Stats = () => {
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
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.inner}>
        <div className={styles.divider} />
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${styles.stat} ${visible ? styles.statVisible : ""}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.statValue}>
                {stat.value}
                {stat.suffix && <span className={styles.statSuffix}>{stat.suffix}</span>}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statLine} />
            </div>
          ))}
        </div>
        <div className={styles.divider} />
      </div>
    </section>
  );
};

export default Stats;
