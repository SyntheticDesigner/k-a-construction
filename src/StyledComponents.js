import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root{
    --dark: #453f31;
    --light: #FBFBFB;
    --primary: #0090A5;
    --secondary: #6CC5F0;
    --gradient: linear-gradient(180deg, rgba(0, 144, 165, 0) 0%, #003F48 100%);
    --header1: 800 95px/101.9% 'Raleway', sans-serif;
    --header2: 800 43px/101.9% 'Raleway', sans-serif;
    --sliderLg: 800 50px/101.9% 'Raleway', sans-serif;
    --sliderSm: 800 156%/101.9% 'Raleway', sans-serif;
    --hero-paragraph: 500 29px/101.9% 'Raleway', sans-serif;
    --paragraph: 500 25px/101.9% 'Raleway', sans-serif;
    --paragraph-bold: 800 25px/101.9% 'Raleway', sans-serif;
    --button: 700 29px/101.9% 'Raleway', sans-serif;
    --nav: 600 22px 'Raleway', serif;
    --footer: 400 22px 'Rasa', serif;
    --info: 400 22px 'Rasa', serif;
    --imgShadow: drop-shadow(19px 20px 40px #332E24);
    --shadow: 13px 17px 36px rgba(0, 0, 0, 0.11);
    background-color: var(--light);
}
h1{
    letter-spacing: -0.01em;
    font: var(--header1);
}
h2{
    font: var(--header2);
    width: fit-content;
    margin: auto;
}
`;

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1240px 1fr;
  padding-top: 97px;
  overflow-x: hidden;
`;

export const Btn = styled.button`
  font: var(--button);
  padding: 17px 46px;
  border-radius: 14px;
  border: none;
  color: var(--light);
  background-color: var(--primary);
  width: fit-content;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transform: translateY(-4px);
  }
`;

export const InfoWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 29px;
  width: fit-content;
  color: ${({ color }) => (color ? color : `var(--dark)`)};
  & > li {
    font: ${({ font }) => (font ? font : `var(--info)`)};
  }
  svg {
    fill: ${({ color }) => (color ? color : `var(--dark)`)};;
    margin-right: 4px;
  }
`;
