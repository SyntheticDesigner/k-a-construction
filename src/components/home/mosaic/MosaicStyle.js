import styled from "styled-components";

export const MosaicSection = styled.section`
    grid-column: 2/3;
    height: calc(100vh - 97px);
    max-height: 1140px;
    display: flex;
    flex-direction: column;
    padding-bottom: 54px;
    .infoPanel{
      margin: 0px auto;
    }
`;

export const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(4, 190px);
  grid-template-rows: repeat(3, 190px);
  gap: 34px;
  margin: auto;
  grid-template-areas:
    "h1 h1 h1 panel1 panel2"
    "cta cta panel3 panel3 panel2"
    ". panel4 panel4 panel5 panel6";

  & > h1 {
    grid-area: h1;
    font: var(--header1);
    color: var(--dark);
    letter-spacing: -0.05em;
    line-height: 102%;
  }
  & > :nth-child(2) {
    grid-area: cta;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > p {
        font: var(--hero-paragraph);
        max-width: 95%;
        color: var(--dark);
    }
  }
  & > :nth-child(3) {
    grid-area: panel1;
  }
  & > :nth-child(4) {
    grid-area: panel2;
  }
  & > :nth-child(5) {
    grid-area: panel3;
  }
  & > :nth-child(6) {
    grid-area: panel4;
  }
  & > :nth-child(7) {
    grid-area: panel5;
  }
  & > :nth-child(8) {
    grid-area: panel6;
  }
  & > :nth-child(n + 3) {
    border-radius: 56px;
    background-color: grey;
  }
`;
export const Panel = styled.div``;
