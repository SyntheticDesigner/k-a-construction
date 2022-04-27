import React from "react";
import InfoPanel from "../InfoPanel";
import { ReactComponent as Facebook } from "../../assets/icons/facebook_vector.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram_vector.svg";
import { FooterGrid, FooterWrapper } from "./FooterStyle";

export default function Footer() {
  return (
    <FooterWrapper>
      <h1>Remodeling, Done Right.</h1>
      <FooterGrid>
        <img
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          alt='K.A. Construction'
        />
        <InfoPanel color='var(--light)' />
        <div className="social">
          <Facebook />
          <Instagram />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Bathroom</li>
            <li>Bedroom</li>
            <li>Kitchen</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Services</li>
            <li>Contact</li>
            <li>Estimate</li>
            <li>Living Room</li>
            <li>Outdoor</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <p>Contractor’s License Number: #9999999</p>
        <p>All right reserved, KA Construction ©</p>
      </FooterGrid>
    </FooterWrapper>
  );
}
