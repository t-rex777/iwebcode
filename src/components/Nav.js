import React from "react";
import styled from "styled-components";
import Logo from "../images/Group.svg";
import { Navbar, Navitem } from "../styles";
function Nav() {
  return (
    <Navbar>
      <div>
        <Navitem>
          <a href="/">
            <img src={Logo} />{" "}
          </a>
        </Navitem>
      </div>
      <div>
        <Navitem active>
          <a href="#work">Work</a>
        </Navitem>
        <Navitem> <a href="#about">About</a></Navitem>
        <Navitem> <a href="#contact">Contact</a></Navitem>
        <Navitem> <a href="#other">Other</a></Navitem>
      </div>
    </Navbar>
  );
}

export default Nav;
