import React from "react";
import SliderCard from "./SliderCard";
import styled from "styled-components";
import { useState } from "react";

const SliderWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  gap: 8px;
  margin-top: -100px;
  margin-bottom: 100px;
`;

export default function Slider() {
  const [initSelect, setInitSelect] = useState(true);
  return (
    <SliderWrapper
      onMouseEnter={() => setInitSelect(false)}
      onMouseLeave={() => setInitSelect(true)}
    >
      <SliderCard initSelect={initSelect} setInitSelect={setInitSelect}>
        <img
          src={process.env.PUBLIC_URL + "/images/kitchen_slider.png"}
          alt='Beautiful Remodeled Kitchen'
        />
        <p>Kitchen</p>
      </SliderCard>
      <SliderCard>
        <img
          src={process.env.PUBLIC_URL + "/images/living_room_slider.png"}
          alt='Beautiful Remodeled Living Room'
        />
        <p>Living Room</p>
      </SliderCard>
      <SliderCard>
        <img
          src={process.env.PUBLIC_URL + "/images/bathroom_slider.png"}
          alt='Beautiful Remodeled Bathroom'
        />
        <p>Bathroom</p>
      </SliderCard>
      <SliderCard>
        <img
          src={process.env.PUBLIC_URL + "/images/bedroom_slider.png"}
          alt='Beautiful Remodeled Bedroom'
        />
        <p>Bedroom</p>
      </SliderCard>
      <SliderCard>
        <img
          src={process.env.PUBLIC_URL + "/images/outdoor_slider.png"}
          alt='Beautifully Designed Outdoors'
        />
        <p>Outdoor</p>
      </SliderCard>
    </SliderWrapper>
  );
}
