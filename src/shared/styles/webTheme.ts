export const WEB_THEME = {
  dark: {
    bg0: "#0F242A",
    bg1: "#1E2427",
    bg2: "#151818",
    text: "#d9d9d9",
    muted: "#b9b9b9",
    accent: "#1D9DB3",
    accentDeep: "#153037",
    warn: "#ff9900",
  },
  light: {
    bg0: "#f7fbfc",
    bg1: "#eef4f6",
    bg2: "#e2eaec",
    text: "#403e3e",
    muted: "#525252",
    accent: "#5bd5ea",
    accentDeep: "#3c6d79",
    warn: "#ffad33",
  },
} as const;

export const WEB_GRADIENTS = {
  hero: "radial-gradient(1200px 600px at 20% -10%, rgba(29,157,179,0.35), transparent 60%), radial-gradient(900px 500px at 85% 10%, rgba(21,48,55,0.4), transparent 60%)",
  glow: "linear-gradient(135deg, rgba(29,157,179,0.2), rgba(21,48,55,0.6))",
} as const;
