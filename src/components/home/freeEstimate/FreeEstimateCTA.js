import React from "react";
import { Btn } from "../../../StyledComponents";
import { Bottom, FreeEstimateWrapper, Top } from "./FreeEstimateStyle";

export default function FreeEstimateCTA() {
  return (
    <FreeEstimateWrapper>
      <Top>
        <img
          src={process.env.PUBLIC_URL + "/images/bathroom_slider.png"}
          alt='Bathrooms'
        />
        <h1>Dinuba Based, Valley Strong.</h1>
      </Top>
      <Bottom>
        <img
          src={process.env.PUBLIC_URL + "/images/bedroom.png"}
          alt='Bedrooms'
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
