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
  gap: 16px;
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
