import React from "react";
import Nav from "../nav/Nav";
import { HomeWrapper } from "../../StyledComponents";
import MosaicCTA from "./mosaic/MosaicCTA";
import FreeEstimateCTA from "./freeEstimate/FreeEstimateCTA";
import OurWork from "./ourWork/OurWork";

export default function HomPage() {
  return (
    <HomeWrapper>
      <MosaicCTA />
      <FreeEstimateCTA />
      <OurWork />
    </HomeWrapper>
  );
}
