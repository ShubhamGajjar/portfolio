import React from "react";
import { useCurrentFrame } from "remotion";
import { palette, HEIGHT, WIDTH } from "../theme";

const pseudo = (n: number): number => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

export type ParticleProps = {
  seed?: number;
  count?: number;
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  driftAmount?: number;
  opacity?: number;
  color?: string;
};

export const Particles: React.FC<ParticleProps> = ({
  seed = 1,
  count = 42,
  cx = WIDTH / 2,
  cy = HEIGHT / 2,
  innerRadius = 360,
  outerRadius = 640,
  driftAmount = 24,
  opacity = 1,
  color = palette.jadeLight,
}) => {
  const frame = useCurrentFrame();

  const particles = Array.from({ length: count }, (_, i) => {
    const r1 = pseudo(seed + i * 17);
    const r2 = pseudo(seed + i * 31);
    const r3 = pseudo(seed + i * 53);
    const r4 = pseudo(seed + i * 71);
    const r5 = pseudo(seed + i * 97);

    const angle = r1 * Math.PI * 2;
    const orbit = innerRadius + r2 * (outerRadius - innerRadius);
    const driftX = Math.sin(frame / (40 + r3 * 30) + r4 * 10) * driftAmount;
    const driftY = Math.cos(frame / (45 + r3 * 35) + r4 * 7) * driftAmount;

    const x = cx + Math.cos(angle) * orbit + driftX;
    const y = cy + Math.sin(angle) * orbit * 0.72 + driftY;

    const size = 2 + r2 * 3.2;
    const op = (0.22 + r5 * 0.5) * opacity;

    return { x, y, size, op };
  });

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {particles.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.size} fill={color} opacity={p.op} />
      ))}
    </svg>
  );
};
