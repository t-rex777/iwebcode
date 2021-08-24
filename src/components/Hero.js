import React from "react";
import styled from "styled-components";
import Bird from "../images/Bird.svg";
import { HeroContainer, Heroimage, HeroText } from "../styles";

function Hero() {

  return (
    <HeroContainer>
      <HeroText>
        I’m Arnau Ros, a graphic designer & content creator based in Barcelona.
        Available for freelance & collaborations.{" "}
      </HeroText>
      <Heroimage src={Bird}></Heroimage>
    </HeroContainer>
  );
}

export default Hero;
