import React from "react";
import { CardBack, CardWrapper, FlipMe } from "./CareCardStyle";
import { Parallax } from "react-scroll-parallax";

export default function Card({ card }) {
  return (
    <FlipMe>
      <Parallax rotateY={[-180, 0]} startScroll={3000} endScroll={3300} style={{position: "absolute", transformStyle: "preserve-3d"}}>
        <CardWrapper>
          <img src={card.img} alt={card.img} />
          <h3>{card.text1}</h3>
          <hr />
          <p>{card.text2}</p>
        </CardWrapper>
      </Parallax>
      <Parallax rotateY={[0, 180]} startScroll={3000} endScroll={3300} style={{position: "absolute", transformStyle: "preserve-3d"}}>
        <CardBack>
          <img src={process.env.PUBLIC_URL + '/images/logo_color_icon.svg'} alt="logo_color.svg" />
        </CardBack>
      </Parallax>
    </FlipMe>
  );
}
