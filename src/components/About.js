import React from "react";
import {
   AboutContainer,
  Header,
  ContentText as AboutText,
  AboutBox,
  AboutItemHeader,
  AboutSkills,
} from "../styles";
import UpArrow from "../images/UpArrow.svg";
import DownArrow from "../images/DownArrow.svg";

function About() {
  return (
    <div id="about">
      <Header>About Me</Header>

      <AboutContainer>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nullam
          augue dolor libero at in. Egestas in elit vitae tincidunt morbi
          egestas nec massa. Pretium, placerat quis sem gravida vel quam nisl in
          semper. Platea enim nunc aliquam volutpat, ut sed morbi. Sit leo
          aliquam at amet, eu dictumst accumsan eu, quis. Nam ac mattis
          adipiscing euismod arcu ac laoreet vitae at. Nibh etiam dictumst nibh
          ut. Vitae massa rhoncus, et massa. Diam fermentum malesuada
          scelerisque orci massa.{" "}
        </AboutText>
        <AboutBox>
          <h2>Your one stop shop for:</h2>
          <AboutItemHeader>
            <p> ① Branding/Logo</p>
            <img src={UpArrow} />
          </AboutItemHeader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed
            pulvinar rutrum tempor. Etiam duis massa elementum, etiam cras
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mi sed pulvinar rutrum tempor. Etiam duis massa elem Starting at €
            2,450
          </p>
          <AboutItemHeader>
            <p> ② Packaging</p> <img src={DownArrow} />{" "}
          </AboutItemHeader>
          <AboutItemHeader>
            <p> ③ Website</p> <img src={DownArrow} />{" "}
          </AboutItemHeader>
        </AboutBox>
      </AboutContainer>
      <AboutSkills>
        <p>Illustator</p>
        <p>•</p>
        <p>Webflow</p>
        <p>•</p>
        <p>Figma</p>
        <p>•</p>
        <p>Indesign</p>
        <p>•</p>
        <p>PremiereP</p>
        <p>•</p>
        <p>cinema 4D</p>
        <p>•</p>
        <p>Sketch</p>
      </AboutSkills>
    </div>
  );
}

export default About;
