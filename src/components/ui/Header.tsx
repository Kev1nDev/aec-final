import React from "react";
import { cn } from "../../lib/cn";
import { Button } from "./Button";
import { MenuToggleIcon } from "./MenuToggleIcon";
import { useScroll } from "../../hooks/useScroll";

const links = [
  { label: "Productos", href: "#productos" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Nosotros", href: "#nosotros" },
];

const catalogUrl = "https://catalogohidromack.aec-ve.com";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] mx-auto w-full rounded-none border border-transparent",
        "bg-gradient-to-r from-accent-primary/85 via-accent-primary/80 to-[#0d9488]/85",
        "backdrop-blur-[20px] backdrop-saturate-[1.4]",
        "transition-all duration-700 ease-out-expo",
        scrolled &&
          !open &&
          "border-white/20 lg:top-4 lg:max-w-[1200px] lg:rounded-2xl lg:shadow-[0_8px_32px_rgba(13,148,136,0.25)]",
      )}
    >
      <nav
        className={cn(
          "flex h-16 items-center justify-between gap-4 px-5 transition-[height] duration-700 ease-out-expo lg:h-[72px] lg:px-12",
          scrolled && "lg:h-[60px]",
        )}
        aria-label="Navegación principal"
      >
        <a
          href="/"
          className="flex shrink-0 items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-[30px] leading-none tracking-[2px] text-white">
            AEC
          </span>
          <span className="h-[22px] w-px bg-white/30" />
          <span className="font-mono text-[10px] font-bold leading-none tracking-[2.5px] text-white/70 uppercase">
            AUTOPARTES
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              href={link.href}
              className="text-white/80 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Button>
          ))}
          <Button
            variant="outline"
            href="#contacto"
            className="border-white/40 text-white hover:border-white hover:bg-white/10"
          >
            Contacto
          </Button>
          <Button
            href={catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-secondary hover:bg-accent-secondary-hover hover:shadow-[0_6px_24px_var(--color-accent-secondary-glow)]"
          >
            Ver Catálogo
          </Button>
        </div>

        <Button
          size="icon"
          variant="outline"
          className="shrink-0 border-white/40 text-white hover:border-white hover:bg-white/10 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <MenuToggleIcon open={open} className="size-[22px]" duration={300} />
        </Button>
      </nav>

      <div
        className={cn(
          "invisible pointer-events-none fixed top-16 right-0 bottom-0 left-0 z-[999] flex flex-col justify-between gap-6",
          "border-t border-white/10 bg-gradient-to-b from-accent-primary/95 via-accent-primary/95 to-[#0d9488]/95 backdrop-blur-xl",
          "px-5 py-5 opacity-0 translate-y-3",
          "transition-[opacity,transform,visibility] duration-500 ease-out-expo lg:hidden",
          open && "visible pointer-events-auto translate-y-0 opacity-100",
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.label}
              className="border-b border-white/10 py-3.5 font-body text-lg font-semibold text-white/80 no-underline transition-colors duration-[250ms] ease-smooth hover:text-white"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            href="#contacto"
            className="w-full border-white/40 text-white hover:border-white hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Button>
          <Button
            href={catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-accent-secondary hover:bg-accent-secondary-hover hover:shadow-[0_6px_24px_var(--color-accent-secondary-glow)]"
          >
            Ver Catálogo
          </Button>
        </div>
      </div>
    </header>
  );
}
