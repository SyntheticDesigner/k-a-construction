import styled from "styled-components";

export const CardsWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  padding-bottom: 128px;
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
  justify-content: space-between;
  h3 {
    font: var(--button);
    letter-spacing: -0.05em;
  }
  img {
    height: 100px;
  }
  p {
    font: var(--paragraph);
    letter-spacing: -0.05em;
  }
  hr {
    border: 3px solid #656565;
    border-radius: 5px;
  }
`;
