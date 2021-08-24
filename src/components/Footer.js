import React from "react";
import Logo from "../images/Group.svg";
import Facebook from "../images/facebook.svg";
import Dribble from "../images/dribbble.svg";
import Twitter from "../images/twitter.svg";
import { FooterContainer, FooterItem } from "../styles";
function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterItem>
          <img src={Logo} style={{ marginRight: "1rem" }} />{" "}
          <p style={{ color: "gray" }}>
            © 2021 Arnau Ros, LLC. All rights reserved.
          </p>
        </FooterItem>
      </div>
      <div>
        <FooterItem>
          <img src={Facebook} />
        </FooterItem>
        <FooterItem>
          <img src={Twitter} />
        </FooterItem>
        <FooterItem>
          <img src={Dribble} />
        </FooterItem>
      </div>
    </FooterContainer>
  );
}

export default Footer;
