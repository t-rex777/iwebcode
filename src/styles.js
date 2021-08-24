import styled from "styled-components";
import { screen } from "@testing-library/react";

// global
export const Header = styled.h1`
  font-size: 2rem;
  border-bottom: solid 2px black;
  padding: 1rem;
  margin: 3rem;
  font-weight: 500;
  @media only screen and (max-width: 678px) {
    font-size: 1.5rem;
  }
`;

//nav styles
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  @media only screen and (max-width: 455px) {
    justify-content: space-evenly;
    padding: 1rem;
  }
`;
export const Navitem = styled.span`
  border-bottom: ${(props) => props.active && "solid 2px black"};
  margin: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  & > img {
    width: 3rem;
  }
  & > a{
    text-decoration: none;
    color : #000
  }
  @media only screen and (max-width: 678px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 455px) {
    font-size: 0.75rem &>img {
      width: 1.5rem;
    }
  }
`;

//hero styles
export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 678px) {
    flex-direction: column-reverse;
  }
`;

export const HeroText = styled.p`
  font-size: 3rem;
  margin: 3rem;
  width: 50%;
  font-weight: 500;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 678px) {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    margin: 1rem;
  }
`;
export const Heroimage = styled.img`
  width: 50%;
  @media only screen and (max-width: 678px) {
    width: 70%;
  }
`;

//project styles
export const Projectimage = styled.img`
  width: 100%;
  @media only screen and (max-width: 678px) {
    height: 300px;
  }
`;
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 678px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.span`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .add {
    max-width: 2rem;
  }
  @media only screen and (max-width: 678px) {
    align-items: center;
    .add {
      margin-top: 2rem;
    }
  }
`;

// content styles
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 3rem;
  @media only screen and (max-width: 968px) {
    flex-direction: column;
  }
`;
export const ContentText = styled.p`
  font-size: 1.7rem;
  @media only screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 678px) {
    font-size: 1rem;
  }
`;
export const ContentImg = styled.img`
  width: 60vw;
  @media only screen and (max-width: 1024px) {
    width: 40vw;
  }
  @media only screen and (max-width: 1024px) {
    width: 90vw;
  }
`;
export const ContentLink = styled.a`
  display: block;
  text-decoration: underline;
  font-size: 1.7rem;
  margin: 1.5rem 0;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 678px) {
    font-size: 1rem;
  }
`;

// About styles

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 3rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const AboutSkills = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
  justify-content: space-evenly;
  margin: 0 1rem;
  & > p {
    margin: 0 1rem;
  }
`;

export const AboutBox = styled.div`
  min-width: 30rem;
  margin-left: 3rem;
  @media only screen and (max-width: 900px) {
    min-width: 100%;
    margin-left: 1rem;
  }
`;

export const AboutItemHeader = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  border-bottom: solid 2px black;
  font-weight: 500;
  margin-top: -1rem;
`;

// Client
export const Clientwrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ClientContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 3rem;
  padding: 0 3rem;
  width: 60%;
  & > img {
    width: 4rem;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin: 0 1rem;
    padding: 0 1rem;
  }
  @media only screen and (max-width: 756px) {
    & > img {
      width: 2rem;
    }
  }
`;

export const ClientText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 0 3rem;
  flex-grow: 1;
  @media only screen and (max-width: 1024px) {
    font-size: 1.2rem;
    margin: 0 2rem;
  }
  @media only screen and (max-width: 756px) {
    width: 100%;
    min-width: 2;
    font-size: 1rem;
  }
`;

export const ClientTextContainer = styled.div`
  margin-top: 1.5rem;
`;

//hello styles
export const HelloContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 3rem;
  padding: 0 3rem;
  @media only screen and (max-width: 756px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 0 1rem;
  }
`;

export const HelloText = styled.p`
  width: 40vw;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 3rem;
  @media only screen and (max-width: 1024px) {
    margin-right: 1rem;
  }
  @media only screen and (max-width: 756px) {
    width: 100%;
    margin-right: 0rem;
    margin: 0 1rem;
    font-size: 1rem;
  }
`;

export const HelloForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem;
  & > span {
    margin: 0 2rem;
  }
  @media only screen and (max-width: 678px) {
    margin: 0 1rem;
  }
`;
export const InputForm = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  & > textarea {
    padding: 1rem;
    width: 100%;
    border: solid 1px gray;
  }
  @media only screen and (max-width: 678px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  margin: 0 1rem 0.5rem 0;
  border: solid 1px gray;
  width: 100%;
  min-width: 120px;
  @media only screen and (max-width: 756px) {
    width: 280px;
  }
  @media only screen and (max-width: 456px) {
    width: 200px;
  }
`;
export const Email = styled.p`
  text-decoration: underline;
  margin-top: 0px;
`;
export const HelloButton = styled.button`
  margin-top: 1.7rem;
  border: solid 2px gray;
  padding: 0.3rem 1.5rem;
  background-color: #fff;
`;

// Blog styles
export const BlogHeader = styled.h1`
  margin-top: 5rem;
  text-align: center;
  font-weight: 500;
`;

export const BlogContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3rem;
  padding: 0 3rem;
  @media only screen and (max-width: 756px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;
export const BlogItem = styled.div`
  border-left: ${(props) => props.borderLeft && "solid 1px black"};
  border-right: ${(props) => props.borderRight && "solid 1px black"};
  padding: 1rem 2rem;
  & > span {
    text-decoration: underline;
    margin-top: 1rem;
    cursor: pointer;
  }
  @media only screen and (max-width: 756px) {
    border: none;
    padding: 1rem;
    width: 100%;
  }
`;

//newsletter
export const NewletterContainer = styled.div`
  padding-bottom: 3rem;
  & > img {
    width: 100%;
  }
`;
export const NewsLetterText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > p {
    text-align: center;
    width: 20rem;
  }
`;

export const NewsletterInput = styled.input`
  border: solid 1px black;
  padding: 0.5rem 2rem;
`;

export const NewsletterBtn = styled.button`
  background-color: #4e4e4e;
  color: #fff;
  margin-left: 1rem;
  border: none;
  padding: 0 1rem;
`;

// footer styles
export const FooterContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-top: solid 1px black;
  & > div {
    display: flex;
  }
  @media only screen and (max-width: 756px) {
    & > p {
      font-size: 0.75rem;
    }
    justify-content: space-space-evenly;
  }
`;
export const FooterItem = styled.span`
  display: flex;
  margin: 10px;
  font-size: 1rem;
  cursor: pointer;
  & > img {
    width: 1rem;
  }
  @media only screen and (max-width: 756px) {
    & > p {
      font-size: 0.75rem;
    }
    & > img {
      width: 0.75rem;
    }
  }
`;

// project page styles ProjectPageContainer

export const ProjectPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectHero = styled.img`
  width: ${(props) => (props.dual ? "50%" : "90%")};
  width: ${(props) => (props.triple && "300px")};
  margin: 1rem 2rem;
  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.triple && "200px")};
  }
`;
export const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 6rem;
  & > p {
    width: 300px;
  }
  & > h1 {
    font-weight: 500;
  }
  @media only screen and (max-width: 756px) {
    flex-direction: column;
    align-items: center;
    & > h1 {
      font-size: 1.5rem;
      white-space: nowrap;
    }
  }
`;

export const ProjectPageContainer2 = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 3rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectPageContainer3 = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 3rem;
  &>span{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
