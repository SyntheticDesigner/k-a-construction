import React, { useRef, useEffect, useState, useCallback } from "react";
import { Btn } from "../../../StyledComponents";
import {
  Bottom,
  BottomImg,
  FreeEstimateWrapper,
  Top,
} from "./FreeEstimateStyle";
import { ParallaxBanner } from "react-scroll-parallax";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function FreeEstimateCTA() {
  const header = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.current.classList.add("animate");
          return;
        }
        header.current.classList.remove("animate");
      });
    });
    let _header = header.current;
    observer.observe(_header);
  }, [header]);

  return (
    <FreeEstimateWrapper>
      <Top>
        <ParallaxBanner
          layers={[
            {
              image: `${process.env.PUBLIC_URL}/images/bathroom_slider.png`,
              translateY: [-20, 0],
            },
          ]}
          style={{
            aspectRatio: "1 / 1",
            height: "496px",
            width: "496px",
            marginTop: "57px",
          }}
          className='topImg'
        />
        {/* <img
          src={process.env.PUBLIC_URL + "/images/bathroom_slider.png"}
          alt='Bathrooms'
        /> */}
        {/* <Parallax style={{width:"53%"}} translateX={['100', '-50']}> */}
        <h1 ref={header}>Dinuba Based, Valley Strong.</h1>
        {/* </Parallax> */}
      </Top>
      <Bottom>
        <ParallaxBanner
          layers={[
            {
              image: `${process.env.PUBLIC_URL}/images/bedroom.png`,
              // speed: -10,
              translateY: [-20, 10],
            },
          ]}
          style={{ aspectRatio: "1 / 1", height: "496px", width: "496px" }}
          className='botImg'
        />
        {/* <img
          src={process.env.PUBLIC_URL + "/images/bedroom.png"}
          alt='Bedrooms'
        /> */}
        <article>
          <p>
            With work experience ranging from all over Califronia, KA
            Construction specializes in serving the customers in the Central
            Valley.
          </p>
          <p>
            Residing in Dinuba, Califronia, we at KA Construction are open and
            willing to travel across the Central Valley for your remodeling
            needs.
          </p>
          <p>
            We understand these are troubling times, so here at KA Construction
            we are offering{" "}
            <span title='Click here to get a free estimates in the Central Valley.'>
              FREE ESTIMATES
            </span>{" "}
            for local customers. We’ve got your back.
          </p>
          <Btn>Get An Estimate</Btn>
        </article>
      </Bottom>
      <h2>Click to explore our previous work!</h2>
    </FreeEstimateWrapper>
  );
}
