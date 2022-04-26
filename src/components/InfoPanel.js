import React from "react";
import { ReactComponent as Pin } from "../assets/icons/pin.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { InfoWrapper } from "../StyledComponents";

export default function InfoPanel({ font, color }) {
  return (
    <InfoWrapper font={font} color={color}>
      <li>
        <Pin />
        Dinuba, CA
      </li>
      <li>
        <Mail />
        kaconstruction@gmail.com
      </li>
      <li>
        <Phone />
        (559) 824-1084
      </li>
    </InfoWrapper>
  );
}
