import { Easing } from "remotion";

export const palette = {
  jade: "#7B9669",
  jadeDark: "#404E3B",
  jadeMedium: "#6C8480",
  jadeLight: "#BAC8B1",
  paper: "#F4F6F1",
  paperDark: "#ECEEE9",
  ink: "#1E2519",
  ink2: "#3A4037",
  white: "#FFFFFF",
};

export const EASE_OUT = Easing.bezier(0.2, 0.8, 0.2, 1);
export const EASE_IN_OUT = Easing.bezier(0.65, 0, 0.35, 1);

export const FPS = 30;
export const DURATION_FRAMES = 240;
export const WIDTH = 1920;
export const HEIGHT = 1080;

export const PHASES = {
  brain: { start: 0, end: 70, fadeIn: [0, 8] as const, fadeOut: [60, 70] as const },
  network: { start: 60, end: 150, fadeIn: [60, 78] as const, fadeOut: [140, 150] as const },
  classification: { start: 140, end: 210, fadeIn: [140, 158] as const, fadeOut: [200, 210] as const },
  name: { start: 200, end: 240, fadeIn: [200, 218] as const, fadeOut: [240, 240] as const },
};
