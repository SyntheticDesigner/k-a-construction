import React from "react";
import Nav from "../nav/Nav";
import { HomeWrapper } from "../../StyledComponents";
import MosaicCTA from "./mosaic/MosaicCTA";
import FreeEstimateCTA from "./freeEstimate/FreeEstimateCTA";
import OurWork from "./ourWork/OurWork";
import Slider from "./slider/Slider";
import CareCards from "./careCards/CareCards";

export default function HomPage() {
  return (
    <HomeWrapper>
      <MosaicCTA />
      <FreeEstimateCTA />
      <Slider/>
      <OurWork />
      <CareCards/>
    </HomeWrapper>
  );
}
