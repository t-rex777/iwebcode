import React from "react";
import PorjectHero1 from "../images/ProjectHero.svg";
import ProjectHero2 from "../images/ProjectHero2.svg";
import ProjectHero3 from "../images/ProjectHero3.svg";
import ProjectHero4 from "../images/ProjectHero4.svg";
import Extra1 from "../images/MoreProject1.svg";
import Extra2 from "../images/MoreProject2.svg";
import Extra3 from "../images/MoreProject3.svg";
import {
  ProjectHero,
  ProjectPageContainer,
  ProjectPageContainer2,
  ProjectPageContainer3,
  ProjectTitle,
} from "../styles";
function ProjectPage() {
  return (
    <>
      <ProjectPageContainer>
        <ProjectHero src={PorjectHero1} />
      </ProjectPageContainer>
      <ProjectTitle>
        <h1>Title of Project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna feugiat
          maecenas eu imperdiet varius nec pulvinar sem ultrices. Adipiscing
          viverra mauris, nunc nisl sociis dui. Sagittis, curabitur libero urna
          interdum metus.
        </p>
      </ProjectTitle>
      <ProjectPageContainer>
        <ProjectHero src={ProjectHero2} />
      </ProjectPageContainer>
      <ProjectPageContainer2>
        <ProjectHero dual src={ProjectHero3} />
        <ProjectHero dual src={ProjectHero4} />
      </ProjectPageContainer2>

      <h1 align="center">More Projects</h1>
      <ProjectPageContainer3>
        <span>
          <ProjectHero triple src={Extra1} />
          <p>Lorem ipsum dolor</p>
        </span>
        <span>
          <ProjectHero triple src={Extra2} />
          <p>Lorem ipsum dolor</p>
        </span>
        <span>
          <ProjectHero triple src={Extra3} />
          <p>Lorem ipsum dolor</p>
        </span>
      </ProjectPageContainer3>
    </>
  );
}

export default ProjectPage;
