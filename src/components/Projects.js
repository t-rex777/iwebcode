import React from "react";
import styled from "styled-components";
import P1 from "../images/Rectangle 1.svg";
import P2 from "../images/Rectangle 2.svg";
import P3 from "../images/Rectangle 3.svg";
import Add from "../images/Add.svg";
import { ProjectContainer, Header, Wrapper, Projectimage } from "../styles";

function Projects() {
  return (
    <div>
      <Header>Projects</Header>
      <ProjectContainer>
        <Wrapper>
          <h3>01Example</h3>
          <Projectimage src={P1} />
        </Wrapper>
        <Wrapper>
          <h3>02Example</h3>
          <Projectimage src={P2} />
        </Wrapper>
        <Wrapper>
          <h3>03Example</h3>
          <Projectimage src={P3} />
        </Wrapper>
        <Wrapper>
          <img className="add" src={Add} />
        </Wrapper>
      </ProjectContainer>
    </div>
  );
}

export default Projects;
