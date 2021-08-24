import styled from "styled-components";

// global
export const Header = styled.h1`
  font-size: 2rem;
  border-bottom: solid 2px black;
  padding: 1rem;
  margin: 3rem;
  font-weight: 500;
`;

//nav styles
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;
export const Navitem = styled.span`
  margin: 10px;
  font-size: 1.5rem;
  cursor: pointer;
`;

//hero styles
export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeroText = styled.p`
  font-size: 3rem;
  margin: 3rem;
  width: 50%;
  font-weight: 500;
`;
export const Heroimage = styled.img`
  width: 50%;
`;

//project styles
export const Projectimage = styled.img`
  width: 100%;
`;
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Wrapper = styled.span`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// content styles
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 3rem;
`;
export const ContentText = styled.p`
  font-size: 1.7rem;
`;
export const ContentImg = styled.img`
  width: 60vw;
`;
export const ContentLink = styled.a`
  display: block;
  text-decoration: underline;
  font-size: 1.7rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;

// About styles
export const AboutSkills = styled.div`
  display: flex;
  overflow-x: auto;
  justify-content: space-evenly;
`;

export const AboutBox = styled.div`
  min-width: 500px;
  margin-left: 3rem;
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
`;

export const ClientText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 0 3rem;
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
`;

export const HelloText = styled.p`
  width: 40vw;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 3rem;
`;

export const HelloForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputForm = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  margin: 0 1rem 0.5rem 0;
`;
export const Email = styled.p`
  text-decoration: underline;
  margin-top: 0px;
`;
export const HelloButton = styled.button`
  margin-top: 1.7rem;
  border: solid 1px gray;
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
`;

//newsletter
export const NewletterContainer = styled.div`
  border-bottom: solid 1px black;
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
  & > div {
    display: flex;
  }
`;
export const FooterItem = styled.span`
  display: flex;
  margin: 10px;
  font-size: 1rem;
  cursor: pointer;
`;
