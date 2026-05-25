import React from "react";
import { AbsoluteFill } from "remotion";
import { Phase1_Brain } from "./phases/Phase1_Brain";
import { Phase2_Network } from "./phases/Phase2_Network";
import { Phase3_Classification } from "./phases/Phase3_Classification";
import { Phase4_Name } from "./phases/Phase4_Name";
import { palette } from "./theme";

export const Main: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: palette.paper }}>
      <Phase1_Brain />
      <Phase2_Network />
      <Phase3_Classification />
      <Phase4_Name />
    </AbsoluteFill>
  );
};
