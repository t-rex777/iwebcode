import React from "react";
import {
  Header,
  HelloText,
  HelloContainer,
  HelloForm,
  InputForm,
  Input,
  Email,
  HelloButton,
} from "../styles";

function Hello() {
  return (
    <>
      <Header>Say Hello</Header>
      <HelloContainer>
        <div>
          <HelloText>
            Looking to start a new project or just want to say hi? Send me an
            email and I’ll do my best to reply within 24 hrs!
          </HelloText>
          <HelloText>
            If contact forms aren’t your thing... send me an email at
            <Email>hello@arnau.design</Email>
          </HelloText>
        </div>
        <HelloForm>
          <span>
            <label>Name*</label>
            <InputForm>
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="First Name" />
            </InputForm>
          </span>
          <span>
            <label>Inquiry*</label>
            <InputForm>
              <Input type="text" placeholder="Collab/Client" />
              <Input type="text" placeholder="hello@arnau.design" />
            </InputForm>
          </span>
          <span>
            <label style={{ marginBottom: "2rem" }}>Message*</label>
            <InputForm>
              <textarea cols={58} rows={5} placeholder="Hello.." />
            </InputForm>
          </span>

          <span>
            <HelloButton>Send</HelloButton>
          </span>
        </HelloForm>
      </HelloContainer>
    </>
  );
}

export default Hello;
