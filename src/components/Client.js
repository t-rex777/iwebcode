import React from "react";
import {
  Header,
  ClientContainer,
  ClientText,
  ClientTextContainer,
  Clientwrapper,
} from "./../styles";
import LeftArrow from "../images/LeftArrow.svg";
import RightArrow from "../images/RightArrow.svg";

function Client() {
  return (
    <>
      <Header>What Clients Say</Header>
      <Clientwrapper>
        <ClientContainer>
          <img src={LeftArrow} />
          <ClientText>
            “I rehired Arnau to do some additional design work for my private
            label brand. Again, he was creative and efficient in bringing my
            ideas to fruition. Thanks Arnau” <br />
            <ClientTextContainer>
              - Ronald Weasley <br /> CEO
            </ClientTextContainer>
          </ClientText>
          <img src={RightArrow} />
        </ClientContainer>
      </Clientwrapper>
    </>
  );
}

export default Client;
