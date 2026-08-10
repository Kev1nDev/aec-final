/// <reference types="vite/client" />

import "react";

declare module "react" {
  interface CSSProperties {
    platform?: string;
    divider?: string;
    dividerPosition?: string;
    subtitle?: string;
    subtitlePosition?: string;
    variant?: string;
    colorMode?: string;
    size?: string;
    type?: string;
    density?: string;
  }
}

declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}
