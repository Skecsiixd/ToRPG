export const Colors = {
  // ── Brand ───────────────────────────────────────────────────
  primary: "#7C3AED", // purple — XP, rank, brand
  secondary: "#A78BFA", // purple light — highlights, badges
  accent: "#C084FC", // purple soft — glow, focused states

  success: "#4ADE80", // green — quest completed, streaks
  warning: "#FB923C", // orange — streak fire, medium difficulty
  danger: "#F43F5E", // rose — hard difficulty, health loss
  info: "#60A5FA", // blue — Elme stat, hints

  // ── Dark mode ───────────────────────────────────────────────
  dark: {
    // Text
    title: "#FFFFFF",
    text: "#E2D9F3",
    textMuted: "#A89BC2",
    textSubtle: "#6D5A8A",
    textDisabled: "#3E2F5B",

    // Backgrounds
    background: "#0F0A1E", // deepest — screen base
    uiBackground: "#160C2E", // cards, panels
    navBackground: "#1A1030", // bottom nav
    surfaceRaised: "#1F1540", // modals, popovers
    surfaceOverlay: "#251A4A", // hover states, selected rows

    // Borders
    border: "rgba(255, 255, 255, 0.08)",
    borderMedium: "rgba(255, 255, 255, 0.14)",
    borderStrong: "rgba(255, 255, 255, 0.22)",

    // Icons
    iconColor: "#6D5A8A",
    iconColorFocused: "#C084FC",

    // XP / Progress
    xpBarBackground: "rgba(124, 58, 237, 0.20)",
    xpBarFill: "#7C3AED",
    xpBarShine: "#A78BFA",
  },

  // ── Light mode ──────────────────────────────────────────────
  light: {
    // Text
    title: "#0F0A1E",
    text: "#3B1F6B",
    textMuted: "#6B4FA0",
    textSubtle: "#9D7EC4",
    textDisabled: "#C8B4E8",

    // Backgrounds
    background: "#F3EEFF",
    uiBackground: "#DDD0F7",
    navBackground: "#EAE0FA",
    surfaceRaised: "#FFFFFF",
    surfaceOverlay: "#EDE3FF",

    // Borders
    border: "rgba(124, 58, 237, 0.10)",
    borderMedium: "rgba(124, 58, 237, 0.20)",
    borderStrong: "rgba(124, 58, 237, 0.35)",

    // Icons
    iconColor: "#9D7EC4",
    iconColorFocused: "#7C3AED",

    // XP / Progress
    xpBarBackground: "rgba(124, 58, 237, 0.12)",
    xpBarFill: "#7C3AED",
    xpBarShine: "#A78BFA",
  },

  // ── Stats ───────────────────────────────────────────────────
  stat: {
    strength: {
      base: "#F97316",
      fill: "rgba(249, 115, 22, 0.15)",
      border: "rgba(249, 115, 22, 0.35)",
      text: "#FED7AA",
    },
    intellect: {
      base: "#60A5FA",
      fill: "rgba(96, 165, 250, 0.15)",
      border: "rgba(96, 165, 250, 0.35)",
      text: "#BFDBFE",
    },
    endurance: {
      base: "#4ADE80",
      fill: "rgba(74, 222, 128, 0.15)",
      border: "rgba(74, 222, 128, 0.35)",
      text: "#BBF7D0",
    },
  },

  // ── Quest difficulty ────────────────────────────────────────
  difficulty: {
    easy: {
      text: "#4ADE80",
      fill: "rgba(74, 222, 128, 0.15)",
      border: "rgba(74, 222, 128, 0.30)",
    },
    medium: {
      text: "#FB923C",
      fill: "rgba(251, 146, 60, 0.15)",
      border: "rgba(251, 146, 60, 0.30)",
    },
    hard: {
      text: "#F87171",
      fill: "rgba(248, 113, 113, 0.15)",
      border: "rgba(248, 113, 113, 0.30)",
    },
  },

  // ── Ranks ───────────────────────────────────────────────────
  rank: {
    novice: "#9D7EC4", // gray-purple
    apprentice: "#A78BFA", // soft purple
    knight: "#7C3AED", // strong purple
    master: "#F59E0B", // gold
    legend: "#F43F5E", // rose-red
  },

  // ── Streak ──────────────────────────────────────────────────
  streak: {
    base: "#FB923C",
    fill: "rgba(251, 146, 60, 0.12)",
    border: "rgba(251, 146, 60, 0.30)",
    text: "#FED7AA",
    hot: "#EF4444", // 30+ day streak
  },

  // ── Heatmap (activity calendar) ─────────────────────────────
  heatmap: {
    empty: "rgba(255, 255, 255, 0.06)",
    d1: "rgba(124, 58, 237, 0.25)",
    d2: "rgba(124, 58, 237, 0.50)",
    d3: "rgba(124, 58, 237, 0.75)",
    d4: "#A78BFA",
  },

  // ── Trophies ────────────────────────────────────────────────
  trophy: {
    bronze: "#CD7F32",
    silver: "#C0C0C0",
    gold: "#F59E0B",
    locked: "rgba(255, 255, 255, 0.15)",
  },

  // ── Notifications ───────────────────────────────────────────
  notification: {
    motivation: {
      fill: "rgba(124, 58, 237, 0.20)",
      border: "rgba(124, 58, 237, 0.40)",
      text: "#C4B5FD",
    },
    warning: {
      fill: "rgba(251, 146, 60, 0.15)",
      border: "rgba(251, 146, 60, 0.35)",
      text: "#FED7AA",
    },
    success: {
      fill: "rgba(74, 222, 128, 0.15)",
      border: "rgba(74, 222, 128, 0.35)",
      text: "#BBF7D0",
    },
    danger: {
      fill: "rgba(244, 63, 94, 0.15)",
      border: "rgba(244, 63, 94, 0.35)",
      text: "#FECDD3",
    },
  },

  // ── Primitives (raw ramp, use sparingly) ────────────────────
  purple: {
    50: "#F5F0FF",
    100: "#EDE0FF",
    200: "#DABFFF",
    300: "#C084FC",
    400: "#A78BFA",
    500: "#8B5CF6",
    600: "#7C3AED",
    700: "#6D28D9",
    800: "#4C1D95",
    900: "#2E1065",
  },
} as const;

export type Colors = typeof Colors;
