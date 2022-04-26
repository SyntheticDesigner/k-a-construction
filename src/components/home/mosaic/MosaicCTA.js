import React from "react";
import { Btn } from "../../../StyledComponents";
import InfoPanel from "../../InfoPanel";
import { MosaicGrid, MosaicSection } from "./MosaicStyle";

export default function MosaicCTA() {
  const panels = [0, 1, 2, 3, 4, 5].map((i) => <div key={i}></div>);
  return (
    <MosaicSection>
      <MosaicGrid>
        <h1>Bringing Interiors to life.</h1>
        <div>
          <p>
            KA Construction is focused on delivering the best home rennovations
            possible.
          </p>
          <Btn>Book Now</Btn>
        </div>
        {panels}
      </MosaicGrid>
      <InfoPanel color='var(--dark)' font='var(--info)' />
    </MosaicSection>
  );
}
