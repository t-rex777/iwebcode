import React from "react";
import styled from "styled-components";
import Logo from "../images/Group.svg";
import { Navbar, Navitem } from "../styles";
function Nav() {
  return (
    <Navbar>
      <div>
        <Navitem>
          <img src={Logo} />{" "}
        </Navitem>
      </div>
      <div>
        <Navitem active>Work</Navitem>
        <Navitem>About</Navitem>
        <Navitem>Contact</Navitem>
        <Navitem>Other</Navitem>
      </div>
    </Navbar>
  );
}

export default Nav;
