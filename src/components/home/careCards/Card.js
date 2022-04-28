import React from "react";
import { CardWrapper } from "./CareCardStyle";
import { Parallax } from "react-scroll-parallax";

export default function Card({ card }) {
 
  return (
    <Parallax scale={[0.5, 1.3]}>
      <CardWrapper>
        <img src={card.img} alt={card.img} />
        <h3>{card.text1}</h3>
        <hr />
        <p>{card.text2}</p>
      </CardWrapper>
    </Parallax>
  );
}
