import styled from "styled-components";

export const OurWorkWrapper = styled.div`
  grid-column: 2/3;
  color: var(--dark);
  padding-bottom: 64px;
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