import React from "react";
import { Btn } from "../../../StyledComponents";
import InfoPanel from "../../InfoPanel";
import { MosaicGrid, MosaicSection } from "./MosaicStyle";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function MosaicCTA() {
  const panels = [0, 1, 2, 3, 4, 5].map((i) => <div key={i}></div>);
  //generate 6 panels to be arranged decoratively in the grid
  // const { mosaic } = useParallax({
  //   translateX: ["0", "200"],
  //   startScroll: 200,
  //   endScroll: 1000,
  // });
  // const { cta } = useParallax({
  //   translateX: ["0", "200"],
  //   startScroll: 200,
  //   endScroll: 1000,
  // });
  return (
    //two different identical mosaic grids are used to create the parallax effect 
    <MosaicSection style={{ position: "relative" }}>
      <Parallax
        style={{ position: "absolute", top: "60px", pointerEvents: "none" }}
        translateX={["0", "200"]}
        startScroll={200}
        endScroll={1000}
      >
        <MosaicGrid>
          <h1 style={{ filter: "opacity(0)" }}>Bringing Interiors to life.</h1>
          <div style={{ filter: "opacity(0)" }}>
            <p>
              KA Construction is focused on delivering the best home
              rennovations possible.
            </p>
            <Btn>Book Now</Btn>
          </div>
          {panels}
        </MosaicGrid>
      </Parallax>
      <Parallax translateX={["0", "-200"]} startScroll={200} endScroll={800}>
        <MosaicGrid>
          <h1>Bringing Interiors to life.</h1>
          <div>
            <p>
              KA Construction is focused on delivering the best home
              rennovations possible.
            </p>
            <Btn>Book Now</Btn>
          </div>
          {/* {panels} */}
        </MosaicGrid>
      </Parallax>
      <InfoPanel color='var(--dark)' font='var(--info)' />
    </MosaicSection>
  );
}
