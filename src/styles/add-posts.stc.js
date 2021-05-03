import styled from "styled-components/native";

export const Wrappr = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const TopBar = styled.View`
  width: 100%;
  height: 60px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Para = styled.Text`
  font-family: ${(props) => props.family};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;

export const FieldWrapper = styled.View`
  width: 80%;
  height: 230px;
  margin: 30px auto;
  border: 2px solid rgba(1, 1, 1, 0.2);
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  width: 90%;
  margin: 10px auto;
  font-size: 15px;
  font-family: "norm";
`;

export const FieldWrapper2 = styled.View`
  width: 80%;
  margin: 0 auto;
  height: 60px;
  flex-direction: row;
`;



export const SelectButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e7e7e7;
  border-radius: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 100%;
    height: 44px;
    align-items: center;
    justify-content: center;
    background-color: #FF2D55;
    border-radius: 10px;
`
export const PopUpPost = styled.View`
  width: 250px;
  height: 180px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PhotoFieldWrapper2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`