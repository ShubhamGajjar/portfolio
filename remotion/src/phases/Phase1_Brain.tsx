import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Particles } from "../primitives/Particle";
import { EASE_OUT, palette, PHASES } from "../theme";

// ─── Anatomical paths (axial brain MRI at level of lateral ventricles) ───
// Coords: 800×640 viewBox, brain centered at (400, 320). Path traced
// clockwise from anterior (top) midline → right frontal → temporal bulge →
// parietal taper → occipital pole → mirror back up the left.

const BRAIN_OUTLINE =
  "M 400 38 " +
  "C 460 35 520 46 570 70 " +
  "C 615 95 645 135 660 195 " +
  "C 670 250 665 310 650 365 " +
  "C 635 415 605 465 565 510 " +
  "C 525 555 470 590 408 600 " +
  "L 392 600 " +
  "C 330 590 275 555 235 510 " +
  "C 195 465 165 415 150 365 " +
  "C 135 310 130 250 140 195 " +
  "C 155 135 185 95 230 70 " +
  "C 280 46 340 35 400 38 Z";

// Cortex / gray-white matter boundary — concentric inset (~85%)
const CORTEX_INSET =
  "M 400 75 " +
  "C 450 73 498 84 538 104 " +
  "C 575 124 598 158 610 208 " +
  "C 620 252 616 305 604 348 " +
  "C 592 392 568 432 535 470 " +
  "C 500 506 455 535 406 542 " +
  "L 394 542 " +
  "C 345 535 300 506 265 470 " +
  "C 232 432 208 392 196 348 " +
  "C 184 305 180 252 190 208 " +
  "C 202 158 225 124 262 104 " +
  "C 302 84 350 73 400 75 Z";

// Lateral ventricles — anterior horns curve up and out, body runs back.
// Drawn as two banana-shaped chambers flanking the midline.
const VENTRICLE_LEFT =
  "M 388 248 " +
  "C 374 252 362 270 360 295 " +
  "C 358 322 365 348 378 362 " +
  "L 392 362 " +
  "L 392 248 Z";

const VENTRICLE_RIGHT =
  "M 412 248 " +
  "C 426 252 438 270 440 295 " +
  "C 442 322 435 348 422 362 " +
  "L 408 362 " +
  "L 408 248 Z";

// Tumor — irregular blob, jade fill
const TUMOR_PATH =
  "M -32 -10 C -30 -30 -10 -36 10 -32 C 30 -28 38 -8 32 14 C 28 32 6 36 -14 32 C -32 28 -34 10 -32 -10 Z";

// Sulci — short cortical folds, perpendicular to outer edge, radiating inward
const SULCI = [
  // right hemisphere
  "M 552 70 Q 540 90 530 108",
  "M 615 105 Q 595 122 580 138",
  "M 650 165 Q 625 180 605 192",
  "M 665 235 Q 635 244 612 248",
  "M 660 305 Q 630 308 605 308",
  "M 645 380 Q 615 378 590 378",
  "M 615 445 Q 588 438 565 432",
  "M 575 500 Q 548 485 530 478",
  "M 510 545 Q 488 525 472 514",
  // left hemisphere (mirror)
  "M 248 70 Q 260 90 270 108",
  "M 185 105 Q 205 122 220 138",
  "M 150 165 Q 175 180 195 192",
  "M 135 235 Q 165 244 188 248",
  "M 140 305 Q 170 308 195 308",
  "M 155 380 Q 185 378 210 378",
  "M 185 445 Q 212 438 235 432",
  "M 225 500 Q 252 485 270 478",
  "M 290 545 Q 312 525 328 514",
];

export const Phase1_Brain: React.FC = () => {
  const frame = useCurrentFrame();
  const { start, end, fadeIn, fadeOut } = PHASES.brain;
  if (frame < start - 2 || frame > end + 2) return null;

  const opacity = interpolate(
    frame,
    [fadeIn[0], fadeIn[1], fadeOut[0], fadeOut[1]],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const entryScale = interpolate(frame, [start, start + 22], [0.88, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE_OUT,
  });
  const pulseScale = 1 + Math.sin(frame / 28) * 0.012;

  // Axial slice tilt — base rotateX gives the "viewed from slightly above" feel
  const rotX = 5 + Math.sin(frame / 70) * 2.5;
  const rotY = Math.sin(frame / 55) * 5;

  const detailOpacity = interpolate(frame, [10, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const tumorOpacity = interpolate(frame, [26, 48], [0, 0.92], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE_OUT,
  });
  const tumorBreath = 1 + Math.sin((frame - 26) / 14) * 0.06;
  const tumorGlowScale = 1.05 + Math.sin((frame - 26) / 14) * 0.18;

  return (
    <AbsoluteFill style={{ opacity }}>
      <Particles seed={1} count={42} opacity={0.9} />

      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: 2400,
        }}
      >
        <div
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${entryScale * pulseScale})`,
            transformStyle: "preserve-3d",
            filter: "drop-shadow(0 24px 48px rgba(64,78,59,0.20))",
          }}
        >
          <svg width={800} height={640} viewBox="0 0 800 640" style={{ overflow: "visible" }}>
            <defs>
              <radialGradient id="brainFill" cx="50%" cy="44%" r="62%">
                <stop offset="0%" stopColor="#ECEEE9" />
                <stop offset="65%" stopColor="#D4D9CF" />
                <stop offset="100%" stopColor="#B8BEB1" />
              </radialGradient>
              <radialGradient id="cortexFill" cx="50%" cy="44%" r="55%">
                <stop offset="0%" stopColor="#E2E7DC" />
                <stop offset="100%" stopColor="#C2C9BB" />
              </radialGradient>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" />
              </filter>
            </defs>

            {/* skull halo */}
            <path
              d={BRAIN_OUTLINE}
              fill={palette.jadeLight}
              opacity={0.18}
              transform="translate(-4 -3) scale(1.02)"
              filter="url(#softGlow)"
            />

            {/* outer cortex outline */}
            <path
              d={BRAIN_OUTLINE}
              fill="url(#brainFill)"
              stroke={palette.jadeMedium}
              strokeWidth={2}
              opacity={0.96}
            />

            {/* cortex / white-matter boundary */}
            <path
              d={CORTEX_INSET}
              fill="url(#cortexFill)"
              stroke={palette.jadeMedium}
              strokeWidth={1}
              opacity={detailOpacity * 0.55}
            />

            {/* falx cerebri (interhemispheric fissure) */}
            <path
              d="M 400 50 Q 396 180 400 320 Q 404 460 400 590"
              stroke={palette.jadeMedium}
              strokeWidth={2.4}
              fill="none"
              strokeLinecap="round"
              opacity={0.62}
            />

            {/* sylvian fissures (lateral cleft separating frontal/temporal) */}
            <g
              stroke={palette.jadeMedium}
              strokeWidth={1.6}
              fill="none"
              opacity={detailOpacity * 0.55}
              strokeLinecap="round"
            >
              <path d="M 175 285 C 230 302 285 320 322 308" />
              <path d="M 625 285 C 570 302 515 320 478 308" />
            </g>

            {/* cortical sulci */}
            <g
              stroke={palette.jadeMedium}
              strokeWidth={1.3}
              fill="none"
              opacity={detailOpacity * 0.5}
              strokeLinecap="round"
            >
              {SULCI.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>

            {/* lateral ventricles */}
            <g opacity={detailOpacity}>
              <path
                d={VENTRICLE_LEFT}
                fill={palette.paperDark}
                stroke={palette.jadeMedium}
                strokeWidth={1.2}
                opacity={0.9}
              />
              <path
                d={VENTRICLE_RIGHT}
                fill={palette.paperDark}
                stroke={palette.jadeMedium}
                strokeWidth={1.2}
                opacity={0.9}
              />
              {/* third ventricle (midline slit) */}
              <line
                x1={400}
                y1={290}
                x2={400}
                y2={345}
                stroke={palette.jadeMedium}
                strokeWidth={1.5}
                strokeLinecap="round"
                opacity={0.5}
              />
            </g>

            {/* basal ganglia hint — subtle gray-matter patches lateral to ventricles */}
            <g opacity={detailOpacity * 0.35} fill={palette.jadeMedium}>
              <ellipse cx={345} cy={310} rx={14} ry={26} />
              <ellipse cx={455} cy={310} rx={14} ry={26} />
            </g>

            {/* tumor — right frontal-parietal */}
            <g transform="translate(525 245)" opacity={tumorOpacity}>
              <path
                d={TUMOR_PATH}
                fill={palette.jade}
                filter="url(#softGlow)"
                opacity={0.6}
                transform={`scale(${tumorGlowScale})`}
              />
              <path d={TUMOR_PATH} fill={palette.jade} opacity={0.92} transform={`scale(${tumorBreath})`} />
              <path
                d={TUMOR_PATH}
                fill="none"
                stroke={palette.jadeDark}
                strokeWidth={1.5}
                opacity={0.85}
                transform={`scale(${tumorBreath})`}
              />
              <circle cx={0} cy={0} r={2.5} fill={palette.jadeDark} opacity={0.9} />
            </g>

            {/* segmentation callout */}
            <SegmentationCallout frame={frame} />
          </svg>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SegmentationCallout: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(frame, [40, 56], [0, 0.55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const len = interpolate(frame, [40, 58], [0, 110], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE_OUT,
  });
  return (
    <g opacity={opacity}>
      <line
        x1={525}
        y1={245}
        x2={525 + len}
        y2={245 - len * 0.55}
        stroke={palette.jadeDark}
        strokeWidth={1}
        strokeDasharray="3 3"
      />
      <circle cx={525 + len} cy={245 - len * 0.55} r={3} fill={palette.jadeDark} opacity={0.7} />
    </g>
  );
};
