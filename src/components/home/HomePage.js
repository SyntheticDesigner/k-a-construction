import React from "react";
import Nav from "../nav/Nav";
import { HomeWrapper } from "../../StyledComponents";
import MosaicCTA from "./mosaic/MosaicCTA";
import FreeEstimateCTA from "./freeEstimate/FreeEstimateCTA";
import OurWork from "./ourWork/OurWork";
import Slider from "./slider/Slider";
import CareCards from "./careCards/CareCards";
import { Parallax } from "react-scroll-parallax";

export default function HomPage() {
  return (
    <HomeWrapper>
      <MosaicCTA />
      <FreeEstimateCTA />

      <Parallax style={{ gridColumn: "2/3" }} translateY={["200", "0"]} startScroll={900} endScroll={1700}>
        <Slider />
      </Parallax>
      <OurWork />
      <CareCards />
    </HomeWrapper>
  );
}
