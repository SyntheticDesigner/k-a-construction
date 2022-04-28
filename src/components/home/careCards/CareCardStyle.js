import styled from "styled-components";

export const CardsWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  padding-bottom: 128px;
  perspective: 2000px;
`;

export const FlipMe = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 460px;
  transform-style: preserve-3d;
`;

export const CardWrapper = styled.div`
  text-align: center;
  width: 340px;
  height: 460px;
  padding: 34px 50px;
  border-radius: 40px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--light);
  transform-style: preserve-3d;
  h3 {
    font: var(--button);
    letter-spacing: -0.05em;
    width: 94%;
    margin: 0px auto;
  }
  img {
    height: 100px;
  }
  p {
    font: var(--paragraph);
    letter-spacing: -0.05em;
  }
  hr {
    border: none;
    border-bottom: 6px solid #656565;
    border-radius: 5px;
  }
`;

export const CardBack = styled.div`
  width: 340px;
  height: 460px;
  background-color: var(--light);
  border-radius: 40px;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
`;
