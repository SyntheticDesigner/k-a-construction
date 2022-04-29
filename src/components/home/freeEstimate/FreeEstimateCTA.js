import React, { useRef, useEffect, useState, useCallback } from "react";
import { Btn } from "../../../StyledComponents";
import { Bottom, FreeEstimateWrapper, Top } from "./FreeEstimateStyle";
import { ParallaxBanner } from "react-scroll-parallax";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function FreeEstimateCTA() {
  const header = useRef(null);
  const [topHover, setTopHover] = useState();

  //this is an observer function wrapped in a useEffect, when in use it will detect the
  //position of the screen relative to the object it is observing and trigger an event'
  //based on when the observed object enters the view port.
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         header.current.classList.add("animate");
  //         return;
  //       }
  //       header.current.classList.remove("animate");
  //     });
  //   });
  //   let _header = header.current;
  //   observer.observe(_header);
  // }, [header]);

  //these are small function to give me finer control over the hover effects.
  function mouseIn() {
    setTopHover("in");
  }
  //by adding a timeout to the mouse out event I allow the
  //mouse in animation to complete before the next starts
  function mouseOut() {
    const _timeout = setTimeout(() => {
      setTopHover("out");
    }, 1500);

    return () => clearTimeout(_timeout);
  }
  return (
    <FreeEstimateWrapper>
      <Top topHover={topHover}>
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
          onMouseEnter={() => {
            mouseIn();
          }}
          onMouseLeave={() => {
            mouseOut();
          }}
        />
        <Parallax
          style={{ width: "53%" }}
          translateX={["200", "0"]}
          startScroll={200}
          endScroll={800}
        >
          <h1 ref={header}>Dinuba Based, Valley Strong.</h1>
        </Parallax>
      </Top>
      <Bottom>
        <ParallaxBanner
          layers={[
            {
              image: `${process.env.PUBLIC_URL}/images/bedroom.png`,
              translateY: [-20, 10],
            },
          ]}
          style={{ aspectRatio: "1 / 1", height: "496px", width: "496px" }}
          className='botImg'
        />
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

/* <img
  src={process.env.PUBLIC_URL + "/images/bedroom.png"}
  alt='Bedrooms'
  /> */
/* <img
  src={process.env.PUBLIC_URL + "/images/bathroom_slider.png"}
  alt='Bathrooms'
  /> */
