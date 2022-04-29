import React from "react";
import Nav from "../nav/Nav";
import { HomeWrapper } from "../../StyledComponents";
import MosaicCTA from "./mosaic/MosaicCTA";
import FreeEstimateCTA from "./freeEstimate/FreeEstimateCTA";
import OurWork from "./ourWork/OurWork";
import Slider from "./slider/Slider";
import CareCards from "./careCards/CareCards";
import { Parallax } from "react-scroll-parallax";
//I use the Parallax components all through the homepage.
//startScroll and andScroll range from 0 to somewhere around 8000
//HomeWrapper is a grid with three columns to limit the width of the app.
export default function HomPage() {
  return (
    <HomeWrapper>
      <MosaicCTA />
      <FreeEstimateCTA />
      <Parallax style={{ gridColumn: "2/3" }} translateY={["100", "0"]} startScroll={1300} endScroll={1600}>
        <Slider />
      </Parallax>
      <OurWork />
      <CareCards />
    </HomeWrapper>
  );
}
