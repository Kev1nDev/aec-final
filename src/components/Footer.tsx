import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Productos",
      links: [
        { label: "Silicon AEC-P01", href: "#productos" },
        { label: "Bomba de Gasolina AEC-P02", href: "#productos" },
        { label: "Limpia Carburador AEC-P03", href: "#productos" },
        { label: "Catálogo Completo", href: "https://catalogohidromack.aec-ve.com" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Nosotros", href: "#nosotros" },
        { label: "Distribuidores", href: "#distribuidor" },
        { label: "Garantía", href: "#" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Fichas Técnicas", href: "#" },
        { label: "Certificaciones", href: "#" },
        { label: "Preguntas Frecuentes", href: "#" },
      ],
    },
  ];

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>AEC</span>
              <span className={styles.logoDivider} />
              <span className={styles.logoSub}>AUTOPARTES — EQUIPOS — COMPONENTES</span>
            </div>
            <p className={styles.tagline}>
              Marca exclusiva de SUPER HIDROMACK, C.A. Calidad certificada con
              garantía propia para el mercado automotriz venezolano.
            </p>
          </div>

          <div className={styles.links}>
            {footerLinks.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>{group.title}</h4>
                <ul className={styles.linkList}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={styles.linkItem}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyright}>
              © {currentYear} AEC — SUPER HIDROMACK, C.A. Todos los derechos reservados.
            </span>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacidad</a>
              <a href="#" className={styles.bottomLink}>Términos</a>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <span className={styles.codeBadge}>AEC-VE.DISTRIBUIDOR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
