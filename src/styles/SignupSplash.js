import styled from "styled-components/native";

export const Background = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ImageBG = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Para = styled.Text`
  width: 260px;
  text-align: center;
  font-family: "norm";
  font-size: ${(props) => (props.size ? props.size : "24px")};
  color: #fff;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 30px;
  width: 260px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: #ff2d55;
  border-radius: 5px;
`;

export const Wrapper = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
