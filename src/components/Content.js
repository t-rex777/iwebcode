import React from "react";
import styled from "styled-components";
import CImage from "../images/Content.svg";
import Arrow from "../images/Arrow.svg"
import { ContentContainer, ContentImg, ContentLink, ContentText, Header } from "../styles";

function Content() {

  return (
    <div>
      <Header>Content Creation</Header>
      <ContentContainer>
        <ContentText>
          Lorem ipsum YouTube dolor sit amet, consectetur adipiscing elit. A
          nisi, accumsan, ornare donec risus pharetra mattis in. YouTube elit. A
          nisi, accumsan, ornare donec risus pharetra mattis in. YouTube elit. A
          nisi, accumsan, ornare donec risus pharetra mattis in.
          <ContentLink>Get in contact about a sponsorship <img src={Arrow}/></ContentLink>
        </ContentText>
        <ContentImg src={CImage} />
      </ContentContainer>
    </div>
  );
}

export default Content;
