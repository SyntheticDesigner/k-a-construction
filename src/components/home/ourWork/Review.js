import React from "react";
import { ReactComponent as Star } from "../../../assets/icons/star_vector.svg";
import styled from "styled-components";

const ReviewWrapper = styled.div`
  background-color: var(--primary);
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font: (--paragraph);
  font-size: 20px;
  text-align: center;
  color: var(--light);
  p {
    width: 90%;
  }
  b{
      font: var(--paragraph-bold);
      font-size: 20px;
  }
  svg {
    fill: var(--light);
  }
`;

export default function Review({ stars, name, children }) {
  const starList = [];
  for (let i = 0; i < stars; i++) {
    starList.push(<Star key={i} />);
  }
  return (
    <ReviewWrapper className='review'>
      <div>{starList}</div>
      {children}
      <b>-{name}</b>
    </ReviewWrapper>
  );
}
