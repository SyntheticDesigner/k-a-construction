import React from "react";
import Card from "./Card";
import { CardsWrapper } from "./OurWorkStyle";

export default function CareCards() {
  const cards = [
    {
      img: `${process.env.PUBLIC_URL}/images/icons/clock_vector.svg`,
      text1: `20+ Years Of Experience`,
      text2: `KA Construction has been in business since the year 2000 and has continued to grow and evolve throughout its lifetime.`,
    },
    {
      img: `${process.env.PUBLIC_URL}/images/icons/smile_face_vector.svg`,
      text1: `Amazing Customer Service`,
      text2: `At KA Construction we are dedicated to going above and beyond for our customers’ satisfaction.`,
    },
    {
      img: `${process.env.PUBLIC_URL}/images/icons/thumbs_up_vector.svg`,
      text1: `Fair Prices, Always`,
      text2: `We prioritize providing the best product for the most affordable price, compared to competing brands.`,
    },
  ];
  return (
    <CardsWrapper>
      {cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </CardsWrapper>
  );
}
