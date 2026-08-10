import { useEffect, useRef, useState } from "react";
import {
  IconShieldCheck,
  IconBuildingWarehouse,
  IconCertificate,
  IconTool,
  IconUsers,
  IconTruckDelivery,
  IconPackage,
  IconChartBar,
} from "@tabler/icons-react";
import styles from "./FeatureSection.module.css";

const features = [
  {
    title: "100% Garantía Propia",
    description:
      "Todos los productos AEC cuentan con respaldo directo del distribuidor. Sin intermediarios.",
    icon: IconShieldCheck,
  },
  {
    title: "Distribuidor Oficial",
    description:
      "Red AEC-VE con cobertura nacional. Soporte logístico directo desde SUPER HIDROMACK, C.A.",
    icon: IconBuildingWarehouse,
  },
  {
    title: "Calidad Certificada",
    description:
      "Desarrollados bajo estándares internacionales de calidad. Materiales seleccionados para máxima durabilidad.",
    icon: IconCertificate,
  },
  {
    title: "Compatibilidad OEM",
    description:
      "Diseñados para integrarse perfectamente con sistemas originales. Sin adaptaciones.",
    icon: IconTool,
  },
  {
    title: "Soporte Técnico 24/7",
    description:
      "Asesoría especializada para talleres y distribuidores. Resolvemos cualquier duda.",
    icon: IconUsers,
  },
  {
    title: "Logística Directa",
    description:
      "Envío desde planta hasta tu taller. Trazabilidad completa en cada etapa del proceso.",
    icon: IconTruckDelivery,
  },
  {
    title: "Stock Garantizado",
    description:
      "Inventario permanente de productos de alta rotación. Nunca te quedes sin repuestos.",
    icon: IconPackage,
  },
  {
    title: "Crecimiento +40%",
    description:
      "Meta alcanzada del volumen total de ventas. Marca exclusiva diseñada para liderar el mercado.",
    icon: IconChartBar,
  },
];

export function FeaturesSectionWithHoverEffects() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`${styles.overline} ${visible ? styles.visible : ""}`}>
            POR QUÉ ELEGIR AEC
          </span>
          <h2 className={`${styles.title} ${visible ? styles.visible : ""}`}>
            VENTAJAS <span className={styles.accent}>COMPETITIVAS</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${styles.feature} ${visible ? styles.visible : ""} ${
                  (index === 0 || index === 4) ? styles.borderLeft : ""
                } ${index < 4 ? styles.borderBottom : ""}`}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                {/* Hover gradient */}
                {index < 4 && (
                  <div className={styles.gradientTop} />
                )}
                {index >= 4 && (
                  <div className={styles.gradientBottom} />
                )}

                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <Icon size={28} stroke={1.5} />
                </div>

                {/* Title with bar */}
                <div className={styles.titleWrapper}>
                  <div className={styles.sideBar} />
                  <span className={styles.featureTitle}>{feature.title}</span>
                </div>

                {/* Description */}
                <p className={styles.description}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
