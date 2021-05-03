import styled from "styled-components/native";

export const Post_container = styled.View`
    height:100px;
    width:93%;
    border-radius: 8px;
    border-width: 1px;
    border-color: #E8E8E8;
    alignSelf: center;
`;
export const Caption_Input = styled.TextInput`
    top:-20px;
    left: 5px;
    font-family: "SF-UI-Display-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.32px;
`;

export const Tag = styled.View`
    width: 65px;
    height: 18px;
    background: #F7F8FA;
    border-radius: 3px;
`;

export const AddPost_txt = styled.Text`
    font-family: "SF-UI-Display-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0.32px;
    color: #000000;
    text-align: center;
`;

export const Upload_photo = styled.Image`
    top:7.5px;
    left: -7.5px;
    height:79px;
    width:79px;
    border-radius: 7px;
`;

export const Seperator_1 = styled.View`
  marginTop:21px;
  height: 1px;
  align-self: center;
  width: 93%;
  background: #bab8b8;
  border-radius: 10px;
  opacity: 0.2;
`;

export const Item_add = styled.View`
  
`;

export const Upload_gallery = styled.Image`
    border-width:1px;
    border-color: white;
    border-radius: 10px;
`;

export const SelectButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EEEEEE;
  border-radius: 4px;
`;

export const SelectButton_2 = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EEEEEE;
  border-radius: 4px;
`;

export const Image_upload = styled.Image`
  background-color: #EEEEEE;
  border-radius: 4px;
  right:10px;
  top:13px;
`;