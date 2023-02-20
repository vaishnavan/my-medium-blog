import React from "react";
import { CContainer, CFormInput, CForm } from "@coreui/react";

import {
  FormContainer,
  FormControl,
  InputBreak,
  LabelText,
  Anchor,
  ContainerBg,
} from "../../assets/styles/form.styled";

const Login = () => {
  return (
    <>
      <ContainerBg>
        <CContainer>
          <FormContainer>
            <FormControl>
              <CForm>
                <InputBreak>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    label="Email address"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </InputBreak>
                <InputBreak>
                  <CFormInput
                    type="password"
                    id="exampleFormControlInput1"
                    label="Password"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </InputBreak>
                <InputBreak>
                  <CFormInput
                    type="submit"
                    id="exampleFormControlInput1"
                    aria-describedby="exampleFormControlInputHelpInline"
                    style={{ background: "green", color: "white" }}
                    value="Login"
                  />
                </InputBreak>
                <LabelText>
                  {" "}
                  Please Sign Up!{" "}
                  <Anchor href="#">Click Here to SignUp</Anchor>
                </LabelText>
              </CForm>
            </FormControl>
          </FormContainer>
        </CContainer>
      </ContainerBg>
    </>
  );
};

export default Login;
