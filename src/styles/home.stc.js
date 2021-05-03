import styled from "styled-components/native";

export const HomeWarpper = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const PostWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const ImageBG = styled.ImageBackground`
  width: 100%;
  height: 760px;
`;

export const TopWrapper = styled.View`
  position: absolute;
  top: 42px;
  right: 20px;

  width: 40px;
  height: 40px;
`;
export const UserCrad = styled.View`
  position: absolute;
  top: 25px;
  left: 20px;

  width: 270px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 5px;
`;

export const DP = styled.ImageBackground`
  width: 52px;
  height: 52px;
`;

export const Txt = styled.Text`
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.family};
  color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  width: 50px;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 50px;
  right: 25px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 10px;
`;

export const Buttons = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Prod = styled.View`
  position: absolute;
  bottom: 50px;
  left: 25px;

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 250px;
`
