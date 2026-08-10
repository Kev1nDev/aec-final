import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoMark}>AEC</span>
          <span className={styles.logoDivider} />
          <span className={styles.logoSub}>AUTOPARTES</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {["Productos", "Catálogo", "Nosotros", "Contacto"].map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="https://catalogohidromack.aec-ve.com" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Ver Catálogo
          </a>
          <button className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
