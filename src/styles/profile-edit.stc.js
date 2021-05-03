import styled from "styled-components/native";

export const BarWrapepr = styled.View`
  width: 100%;
  height: 8%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const PhotoFieldWrapper = styled.View`
  width: 100%;
  height: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PhotoField = styled.ImageBackground`
  width: 110px;
  height: 110px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FieldWrapper = styled.View`
  width: 100%;
  height: 70%;
  flex-direction: column;
  align-items: center;
`;

export const InputControl = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 40px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
    width: 60%;
    height: 40px;
    font-family: 'norm';
    font-size: 17px;
    padding: 10px 15px;
`;

export const Pick = styled.Picker`
    width: 60%;
    height: 40px;
    font-family: 'norm';
    font-size: 17px;
    padding: 10px 15px;
`;

export const Popup = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 240px;
  height: 200px;
`

export const PhotoFieldWrapper2 = styled.View`
  width: 80px;
  height: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;