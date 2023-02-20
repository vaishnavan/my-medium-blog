import styled from "styled-components";
import signupbg from "../../assets/images/signup-bg.jpg";

export const ContainerBg = styled.div`
  background: url(${signupbg});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 10px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormControl = styled.div`
  width: 450px;
  height: auto;
  border: 1px solid #f5f6f7;
  box-shadow: 0 0 2px #808080;
  padding: 40px;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    width: 350px;
    height: auto;
  }
  @media screen and (max-width: 400px) {
    width: 280px;
    height: auto;
  }
`;

export const InputBreak = styled.div`
  margin: 20px 0;
`;
export const LabelText = styled.p`
  text-align: center;
`;
export const Anchor = styled.a`
  font-weight: bold;
  text-decoration: none;
`;
