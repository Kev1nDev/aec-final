import { motion } from "framer-motion";
import type { Icon } from "@tabler/icons-react";
import { cn } from "../../lib/cn";

interface MinimalistHeroProps {
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: Icon; href: string }[];
  locationText: string;
  className?: string;
}

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-text-inverse/80 transition-colors hover:text-text-inverse md:text-text-primary/60 md:hover:text-text-primary"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-bg-primary p-8 pt-24 font-body md:p-12 md:pt-24",
        className,
      )}
    >
      {/* Diagonal blue background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent-primary to-accent-hover [clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)] md:[clip-path:polygon(55%_0,100%_0,100%_100%,25%_100%)]" />

      {/* Main Content */}
      <div className="relative z-10 grid h-full w-full max-w-7xl flex-grow grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12">
        {/* Left — Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <span className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">
            AEC-VE · Distribuidor Oficial
          </span>
          <h1 className="font-display text-7xl font-normal leading-[0.9] text-text-primary md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>

        {/* Right — Image */}
        <div className="relative flex h-full items-center justify-center">
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-80 object-contain drop-shadow-2xl md:w-96 lg:w-[28rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          />
        </div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-text-inverse/90"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
