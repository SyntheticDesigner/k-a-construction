import styled, { keyframes, css } from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";

export const FreeEstimateWrapper = styled.div`
  display: grid;
  grid-template-columns: inherit;
  grid-column: 1/4;
  color: var(--light);
  background-color: var(--dark);
  img {
    height: 496px;
    width: 496px;
    object-fit: cover;
    object-position: left;
    filter: var(--imgShadow);
  }
  h2 {
    grid-column: 2/3;
    margin-top: -128px;
    margin-bottom: 150px;
  }
`;

const shuffleAnim = keyframes`
  0%{transform: translateY(0%); z-index: 0;}
  50%{transform: translateY(-52%); z-index: 0;}
  60%{transform: translateY(-52%); z-index: 3;}
  100%{transform: translateY(-0%); z-index: 3;}
`;

const slideIn = keyframes`
  0%{transform: translateX(80%)}
  100%{transform: translateX(0%)}
`;
export const Top = styled.div`
  grid-column: 2/3;
  display: flex;
  gap: 85px;
  margin-top: 71px;
  h1 {
    z-index: 3;
    width: 53%;
  }
  .animate {
    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${slideIn};
      animation-duration: 2s;
      animation-iteration-count: 1;
    }
  }
  img {
    margin-top: 57px;
  }
  .topImg {
    filter: var(--imgShadow);
    &:hover {
      z-index: 3;
      animation-name: ${shuffleAnim};
      animation-duration: 1.5s;
      animation-iteration-count: 1;
    }
  }
`;
export const Bottom = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
  gap: 80px;
  transform: translateY(-50%);
  & > .bottom-img {
    height: 496px;
    width: 496px;
  }
  .botImg {
    filter: var(--imgShadow);
  }
  article {
    z-index: 3;
    width: 38%;
    position: relative;
    font: var(--paragraph);
    p {
      margin: 11px auto;
      span {
        font: var(--paragraph-bold);
        color: var(--secondary);
        cursor: pointer;
      }
    }
    button {
      position: absolute;
      bottom: 0;
    }
  }
`;
