export interface IdentityFont {
  id: string;
  display: string;
  body: string;
  mono: string;
  google_fonts_url: string;
  stack_display: string;
  stack_body: string;
  stack_mono: string;
}

export interface IdentityPalette {
  id: string;
  hue: number;
  neutral_family: string;
  accent: string;
  accent_dark: string;
  surface: string;
  surface_alt: string;
  fg: string;
  fg_muted: string;
  border: string;
  surface_dark: string;
  surface_alt_dark: string;
  fg_dark: string;
  fg_muted_dark: string;
  border_dark: string;
}

export interface IdentityLayout {
  id: "magazine" | "dashboard" | "feed" | "directory" | "longform" | "kiosk";
  component: string;
  component_path: string;
  density: "loose" | "normal" | "dense";
  brief: string;
}

export interface IdentityVoice {
  id: string;
  label_latest: string;
  label_recent: string;
  label_featured: string;
  label_more: string;
  nav_posts: string;
  nav_about: string;
  cta_subscribe: string;
  cta_subscribe_desc: string;
  cta_button: string;
  site_motto: string;
}

export interface Identity {
  font: IdentityFont;
  palette: IdentityPalette;
  layout: IdentityLayout;
  voice: IdentityVoice;
}

export const identity: Identity = {
  "font": {
    "id": "f24_sans_unbounded_inter",
    "display": "Unbounded",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "google_fonts_url": "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
    "stack_display": "Unbounded, \"Helvetica Neue\", system-ui, sans-serif",
    "stack_body": "Inter, \"Helvetica Neue\", system-ui, sans-serif",
    "stack_mono": "\"JetBrains Mono\", ui-monospace, monospace"
  },
  "palette": {
    "id": "p10_h113_zinc",
    "hue": 113,
    "neutral_family": "zinc",
    "accent": "45 223 22",
    "accent_dark": "112 242 95",
    "surface": "255 255 255",
    "surface_alt": "250 250 250",
    "fg": "24 24 27",
    "fg_muted": "82 82 91",
    "border": "228 228 231",
    "surface_dark": "24 24 27",
    "surface_alt_dark": "39 39 42",
    "fg_dark": "250 250 250",
    "fg_muted_dark": "161 161 170",
    "border_dark": "63 63 70"
  },
  "layout": {
    "id": "directory",
    "component": "HomeProduct",
    "component_path": "@components/clusters/HomeProduct.astro",
    "density": "normal",
    "brief": "Card grid with prominent hero, buyer's-guide style."
  },
  "voice": {
    "id": "v09_lab_log",
    "label_latest": "Lab log",
    "label_recent": "Earlier entries",
    "label_featured": "Featured experiment",
    "label_more": "Open entry",
    "nav_posts": "Lab log",
    "nav_about": "Lab",
    "cta_subscribe": "New experiments",
    "cta_subscribe_desc": "Notebook entries when something interesting happens.",
    "cta_button": "Subscribe",
    "site_motto": "Open lab notebook."
  }
} as const;
