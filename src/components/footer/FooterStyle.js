import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: var(--dark);
  color: var(--light);
  h1{
      margin: auto;
      width: fit-content;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 5fr 1fr 1fr 1fr;
  padding: 40px;
  *{
    font: var(--footer);
  }
  ul{
      list-style: none;
  }
  & > :nth-child(1){
      grid-column: 1/2;
      grid-row: 1/2;
  }
  & > :nth-child(2){
      grid-column: 1/2;
      grid-row: 2/3;
  }
  & > :nth-child(3){
      grid-column: 1/2;
      grid-row: 3/4;
  }
  & > :nth-child(4){
      grid-column: 2/3;
      grid-row: 1/4;
  }
  & > :nth-child(5){
      grid-column: 3/4;
      grid-row: 1/4;
  }
  & > :nth-child(6){
      grid-column: 4/5;
      grid-row: 1/2;
  }
  & > :nth-child(7){
      grid-column: 4/5;
      grid-row: 3/4;
  }
  & > :nth-child(n){
      display: flex;
      align-items: center;
  }
  .social{
    svg{
        margin-right: 16px;
    }
  }
`;
