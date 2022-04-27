import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SliderBtn = styled.button`
  position: relative;
  background-color: var(--light);
  border: none;
  box-shadow: var(--shadow);
  height: 509px;
  width: ${({ selected }) => (selected ? "622px" : `160px`)};
  border-radius: 32px;
  padding: 14px;
  padding-bottom: ${({ selected }) => (selected ? "14px" : `60px`)};
  transition: all 0.5s;
  flex-grow: ${({ _catch }) => (_catch ? "1" : `0`)};
  img {
    height: 100%;
    border-radius: 27px;
    width: 100%;
    object-fit: cover;
    object-position: left;
    transition: all 0.5s;
  }
  p {
    font: var(--sliderSm);
    color: var(--dark);
    margin-top: 12px;
    transition: all 0.5s;
    ${({ selected }) => selected && `
      position: absolute;
      bottom: 36px;
      left: 47px;
      font: var(--sliderLg);
      color: var(--light);
    `}
  }
  .slider-grad{
    background-image: var(--gradient);
    width: calc(100% - 28px);
    border-radius: 0px 0px 27px 27px;
    height: 20%;
    position: absolute;
    transition: all 0.5s;
    bottom: ${({ selected }) => (selected ? "14px" : `60px`)};
  }
`;

export default function SliderCard({ initSelect, setInitSelect, children }) {
  const [selected, setSelected] = useState(initSelect ? initSelect : false);
  let _catch = setInitSelect ? true : false;
  return (
    <SliderBtn
      selected={setInitSelect ? initSelect : selected}
      _catch={_catch}
      onMouseEnter={() => (setInitSelect ? setInitSelect(true) : setSelected(true))}
      onMouseLeave={() => (setInitSelect ? setInitSelect(false) : setSelected(false))}
    >
      <div className="slider-grad" />
      {children}
    </SliderBtn>
  );
}
