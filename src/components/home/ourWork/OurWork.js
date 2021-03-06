import React from "react";
import { OurWorkWrapper, QualityWorkWrapper } from "./OurWorkStyle";
import Article from "./Article";
import Review from "../../Review";
import { Parallax } from "react-scroll-parallax";

export default function OurWork() {
  return (
    <OurWorkWrapper>
      <QualityWorkWrapper>
        <Article />
        <div>
          <Review stars={5} name='Sarah M.'>
            <p>
              “KA Construction created <b>beautiful</b> work. I love my new
              space.”
            </p>
          </Review>
          <Parallax
            scale={[0.1, 1]}
            easing='easeInQuad'
            startScroll={1500}
            endScroll={2400} 
          >
            <img
              src={process.env.PUBLIC_URL + "/images/feather_interior.png"}
              alt='Interior Kitchen from Design to Reality'
            />
          </Parallax>
        </div>
      </QualityWorkWrapper>
      <h2>At KA Contruction, We Care.</h2>
    </OurWorkWrapper>
  );
}
