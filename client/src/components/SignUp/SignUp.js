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

const SignUp = () => {
  return (
    <>
      <ContainerBg>
        <CContainer>
          <FormContainer>
            <FormControl>
              <CForm>
                <InputBreak>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    label="UserName"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </InputBreak>
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
                    value="Sign Up"
                  />
                </InputBreak>
                <LabelText>
                  {" "}
                  If already Sign Up?{" "}
                  <Anchor href="#">Click Here to Login</Anchor>
                </LabelText>
              </CForm>
            </FormControl>
          </FormContainer>
        </CContainer>
      </ContainerBg>
    </>
  );
};

export default SignUp;
