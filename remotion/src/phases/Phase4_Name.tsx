import React from "react";
import { useCurrentFrame } from "remotion";
import { PHASES } from "../theme";

export const Phase4_Name: React.FC = () => {
  const frame = useCurrentFrame();
  const { start, end } = PHASES.name;
  if (frame < start - 2 || frame > end + 2) return null;
  return null;
};
