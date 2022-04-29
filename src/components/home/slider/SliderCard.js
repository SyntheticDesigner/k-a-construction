import React from "react";
import { useState } from "react";
import styled from "styled-components";
//------------------------------------------------STYLED COMPONENT
const SliderBtn = styled.button`
  position: relative;
  background-color: var(--light);
  border: none;
  box-shadow: var(--shadow);
  height: 509px;
  width: ${({ selected }) => (selected ? "622px" : `160px`)};//First of three conditional styles
  border-radius: 32px;
  padding: 14px;
  padding-bottom: ${({ selected }) => (selected ? "14px" : `60px`)};//Second of three conditional styles
  transition: all 0.5s;
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
    ${({ selected }) =>
      selected &&
      `
      position: absolute;
      bottom: 36px;
      left: 47px;
      font: var(--sliderLg);
      color: var(--light);
    `}
  }
  .slider-grad {
    background-image: var(--gradient);
    width: calc(100% - 28px);
    border-radius: 0px 0px 27px 27px;
    height: 20%;
    position: absolute;
    transition: all 0.5s;
    bottom: ${({ selected }) => (selected ? "14px" : `60px`)};//Third of three conditional styles
  }
`;
//------------------------------------------------REACT COMPONENT
export default function SliderCard({
  current,
  setCurrent,
  id,
  initSelect,
  children,
}) {
  function onHover() {
    setCurrent(id);
  }
  return (
    // conditional statements passed from parent will render different styles
    <SliderBtn
      selected={current === id ? true : false || initSelect}
      onMouseEnter={() => onHover()}
    >
      <div className='slider-grad' />
      {children}
    </SliderBtn>
  );
}
