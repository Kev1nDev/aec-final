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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="relative z-[2] w-full border-t border-white/10 bg-bg-dark">
      <div className="mx-auto max-w-[1440px] px-12 pt-20 pb-10 max-lg:px-8 max-lg:pt-16 max-lg:pb-8 max-sm:px-5 max-sm:pt-12 max-sm:pb-6">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
          <div className="max-w-[320px] max-lg:max-w-full">
            <div className="mb-5 flex flex-col gap-2">
              <span className="font-display text-4xl leading-none tracking-[3px] text-white">
                AEC
              </span>
              <span className="h-0.5 w-10 bg-accent-primary" />
              <span className="font-mono text-[10px] font-bold leading-[1.4] tracking-[2px] text-white/50 uppercase">
                AUTOPARTES — EQUIPOS — COMPONENTES
              </span>
            </div>
            <p className="m-0 font-body text-sm leading-[1.7] text-white/50">
              Marca exclusiva de SUPER HIDROMACK, C.A. Calidad certificada con garantía propia para
              el mercado automotriz venezolano.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-sm:gap-8">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-5">
                <h4 className="m-0 font-mono text-[11px] font-bold tracking-[1.5px] text-white uppercase">
                  {group.title}
                </h4>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-body text-sm leading-[1.5] text-white/55 no-underline transition-colors duration-[250ms] ease-smooth hover:text-accent-secondary"
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

        <div className="flex flex-wrap items-center justify-between gap-5 pt-8 max-sm:flex-col max-sm:items-start">
          <div className="flex flex-wrap items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <span className="font-body text-[13px] text-white/40">
              © {currentYear} AEC — SUPER HIDROMACK, C.A. Todos los derechos reservados.
            </span>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-body text-[13px] text-white/40 no-underline transition-colors duration-[250ms] ease-smooth hover:text-accent-secondary"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="font-body text-[13px] text-white/40 no-underline transition-colors duration-[250ms] ease-smooth hover:text-accent-secondary"
              >
                Términos
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <span className="rounded border border-white/10 border-l-[3px] border-l-accent-secondary bg-white/[0.06] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[1.5px] text-white/50 uppercase transition-[border-color,color] duration-300 hover:border-l-accent-primary hover:text-white">
              AEC-VE.DISTRIBUIDOR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
