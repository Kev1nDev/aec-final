import { useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <section className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.inner}>
        <div className={styles.split}>
          <div className={styles.left}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              MARCA EXCLUSIVA — AEC-VE
            </div>

            <h1 className={styles.headline}>
              <span className={styles.line} style={{ animationDelay: "0.05s" }}>
                REPUESTOS
              </span>
              <span className={styles.line} style={{ animationDelay: "0.18s" }}>
                DE ALTO
              </span>
              <span className={styles.line} style={{ animationDelay: "0.32s" }}>
                <span className={styles.accent}>RENDIMIENTO</span>
              </span>
            </h1>

            <p className={styles.subtext} style={{ animationDelay: "0.5s" }}>
              Línea completa de autopartes, equipos y componentes desarrollados
              bajo estándares de calidad certificada. Garantía propia AEC con
              respaldo directo del distribuidor oficial.
            </p>

            <form
              className={styles.form}
              style={{ animationDelay: "0.65s" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={styles.input}
                type="email"
                placeholder="Tu correo empresarial"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className={styles.submit}>
                VER CATÁLOGO
              </button>
            </form>

            <div className={styles.trust} style={{ animationDelay: "0.8s" }}>
              <div className={styles.avatars}>
                <div className={styles.avatar} style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }} />
                <div className={styles.avatar} style={{ background: "linear-gradient(135deg, #10b981, #059669)" }} />
                <div className={styles.avatar} style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }} />
                <div className={styles.avatar} style={{ background: "linear-gradient(135deg, #ef4444, #b91c1c)" }} />
                <div className={styles.avatarMore}>+40</div>
              </div>
              <span className={styles.trustText}>
                <strong>+40 distribuidores</strong> activos en Venezuela
              </span>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.productShowcase}>
              <div className={styles.productGlow} />
              <img
                src="/aec-producto-1.png"
                alt="Producto AEC - Silicon Gasket Maker Ultra Grey"
                className={styles.productImage}
              />
              <div className={styles.productBadge}>
                <span className={styles.productBadgeDot} />
                AEC-P01 — STOCK
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.brandBar}>
        <div className={styles.brandBarInner}>
          <span className={styles.brandBarLabel}>COMPATIBILIDAD OEM PARA:</span>
          <div className={styles.brandLogos}>
            <span className={styles.brandLogo}>TOYOTA</span>
            <span className={styles.brandLogo}>FORD</span>
            <span className={styles.brandLogo}>CHEVROLET</span>
            <span className={styles.brandLogo}>MACK</span>
            <span className={styles.brandLogo}>CATERPILLAR</span>
            <span className={styles.brandLogo}>IVECO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
