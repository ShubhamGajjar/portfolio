import React from "react";
import { Composition } from "remotion";
import { Main } from "./Main";
import { DURATION_FRAMES, FPS, HEIGHT, WIDTH } from "./theme";

export const Root: React.FC = () => {
  return (
    <Composition
      id="Main"
      component={Main}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
