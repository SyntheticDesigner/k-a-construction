import styled from "styled-components";

export const OurWorkWrapper = styled.div`
  grid-column: 2/3;
  color: var(--dark);
  padding-bottom: 108px;
  & > h2 {
    margin-bottom: 64px;
  }
`;

export const QualityWorkWrapper = styled.div`
  margin: 64px 0px;
  display: flex;
  gap: 29px;
  & > article {
    width: 50%;
    h1 {
      margin-bottom: 40px;
    }
    p {
      font: var(--paragraph);
      width: 70%;
      margin-top: 23px;
    }
  }
  & > div {
    width: 50%;
    position: relative;

    .review {
      position: absolute;
      bottom: 64px;
      left: -64px;
    }
    & > img {
      width: 90%;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    h3{
        font: var(--button);
        letter-spacing: -0.05em
    }
    img{
        height: 100px;
    }
    p{
        font: var(--paragraph);
        letter-spacing: -0.05em;
    }
    hr{
        border: 3px solid #656565;
        border-radius: 5px;
    }
`;
