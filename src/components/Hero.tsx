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
            <div className={`${styles.badge} ${styles.delay05}`}>
              <span className={styles.badgeDot} />
              MARCA EXCLUSIVA — AEC-VE
            </div>

            <h1 className={styles.headline}>
              <span className={`${styles.line} ${styles.delay05}`}>
                REPUESTOS
              </span>
              <span className={`${styles.line} ${styles.delay18}`}>
                DE ALTO
              </span>
              <span className={`${styles.line} ${styles.delay32}`}>
                <span className={styles.accent}>RENDIMIENTO</span>
              </span>
            </h1>

            <p className={`${styles.subtext} ${styles.delay50}`}>
              Línea completa de autopartes, equipos y componentes desarrollados
              bajo estándares de calidad certificada. Garantía propia AEC con
              respaldo directo del distribuidor oficial.
            </p>

            <form
              className={`${styles.form} ${styles.delay65}`}
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="hero-email" className={styles.visuallyHidden}>
                Tu correo empresarial
              </label>
              <input
                id="hero-email"
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

            <div className={`${styles.trust} ${styles.delay80}`}>
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

    </section>
  );
};

export default Hero;
