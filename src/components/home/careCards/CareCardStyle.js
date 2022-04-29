import styled from "styled-components";

export const CardsWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  padding-bottom: 128px;
  perspective: 2000px;
`;

//The following objects all get transformed so they all need a transform-style: preserve-3d;
export const FlipMe = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 460px;
  //------------------------------
  transform-style: preserve-3d;
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  border-radius: 40px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--light);
  text-align: center;
  //-----------------------------
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
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  //-----------------------------
  transform-style: preserve-3d;
  //this being the back of the card and the last element rendered in the html structure
  //it needs its backface hidden. Try commenting it out to see the difference.
  backface-visibility: hidden;
`;
