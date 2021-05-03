import styled from "styled-components/native";

export const FormWrapper = styled.View`
  width: 80%;
  height: 65%;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

export const Input = styled.TextInput`
  width: 250px;
  background-color: #f1f2f6;
  border-radius: 6px;
  font-family: "norm";
  font-size: 15px;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

export const Para = styled.Text`
  font-family: "norm";
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  text-align: center;
`;

export const Change_language_text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.32px;
  color: #ffffff;
`;
