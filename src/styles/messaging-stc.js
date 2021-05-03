import styled from "styled-components/native";
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

//component_style
export const Profil_Component_2 = styled.View`
  padding-top: 10%;
  padding: 5%;
  justify-content: center;                            
`;

export const Profil_component_1 = styled.View`
  border-bottom-color: #eaecef;
  border-bottom-width: 1px;
  background: #ffffff;
`;

export const Profil_background = styled.View`
  background: #f7f8fa;
`;
export const Profil_Menu_1 = styled.View`
  top: 17px;
  margin-left: 2.5%;
  max-width: 95%;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.0796252);
  border-radius: 8px;
`;
export const Profil_Menu_2 = styled.View`
  top: 32px;
  margin-left: 2.5%;
  max-width: 95%;
  background: #ffffff;
  shadow-color: black;
  border-radius: 8px;
`;

export const Profil_Menu_Effect = styled.View`
  box-shadow: 10px 20px 20px #969595;
  border-radius: 8px;
`;

export const Seperator = styled.View`
  height: 2px;
  align-self: center;
  width: 90%;
  background: #bab8b8;
  border-radius: 10px;
`;

export const Chat_me = styled.View`
  border-radius: 10px;
  margin-right: 3%;
  margin-bottom: 3%;
  min-width: 20px;
  max-width: 80%;
  height: auto;
  border-top-right-radius: 0px;
  background: #ff2d55;
`;
export const Chat_other = styled.View`
  border-radius: 10px;
  margin-left: 3%;
  margin-bottom: 3%;
  min-width: 20px;
  max-width: 80%;
  height: auto;
  border-top-left-radius: 0px;
  background: #f1f2f4;
  flex-direction: row;
`;
export const Chat_input = styled.View`
  width: 100%;
  border-top-color: #acb1c0;
  border-top-width: 1px;
`;
export const Noti_bubble = styled.View`
  position: absolute;
  top: 30px;
  left: 30px;
  min-width:18px;
  max-width: 90px;
  height: 18px;
  background: #FF2D55;
  border-radius: 15px;
  border-width:1px;
  border-color:white;
`;

//image style for profile
export const Profil_image = styled.Image`
  height: 105px;
  width: 105px;
  border-radius: 6px;
`;

export const Profil_icon2 = styled.Image`
  width:60px;
  height:60px;
`;

export const Message_icon  = styled.Image`
  width:30px;
  height:30px;
  border-radius:30px;
`;

//text format for profile
export const ProfileEditText = styled.Text`
  font-family: "SF-UI-Display-Semibold";
  left: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.32px;
  color: #ffffff;
`;

export const Menu_text = styled.Text`
  font-family: "SF-UI-Display-Regular";
  line-height: 18px;
  letter-spacing: 0.32px;
  color: #1E2432;
`;

export const Profil_name = styled.Text`
  font-family: "SF-UI-Display-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: 0.32px;
  color: #1e2432;
`;

export const Profil_id = styled.Text`
  font-family: "SF-UI-Display-Regular";
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.32px;
`;

export const FollowProfile_text = styled.Text`
  font-family: "SF-UI-Display-Regular";
  text-align: center;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.32px;
  color: #acb1c0;
`;
export const Profil_General = styled.Text`
  font-family: "SF-UI-Display-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  letter-spacing: 0.32px;
  line-height: 22px;
  color: #000000;
`;
export const Chat_text = styled.Text`
  font-family: "norm";
  color: black;
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
  margin-right: 3%;
`;
//button for profile
export const Edit_button = styled.TouchableOpacity`
  height: 20px;
  width: 101px;
  border-radius: 20px;
  background: #FF2D55;
`;

export const Profil_icon = styled.ImageBackground`
  height: 30px;
  width: 30px;
`;

//input for profile
export const Profil_input = styled.TextInput`
  font-family: "norm";
  width: 92%;
  padding: 2%;
  align-self: flex-end;
  flex-direction: row;
  background: white;
  color: #acb1c0;
`;