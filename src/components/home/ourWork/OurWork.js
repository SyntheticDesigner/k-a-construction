import React from "react";
import CareCards from "./CareCards";
import { OurWorkWrapper } from "./OurWorkStyle";
import QualityWork from "./QualityWork";
import Slider from "./Slider";

export default function OurWork() {
  return (
    <OurWorkWrapper>
      <Slider />
      <QualityWork />
      <h2>At KA Contruction, We Care.</h2>
      <CareCards/>
    </OurWorkWrapper>
  );
}
