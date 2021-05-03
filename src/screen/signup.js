import React from "react";
import { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { SignUpUser } from "../store/actions/auth";
import { Keyboard } from "react-native";

import * as Icon from "react-native-vector-icons";
import { Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";
import {  RFValue } from "react-native-responsive-fontsize";

const SignUp = ({ navigation, signIn }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const handleTextChange = (key, value) => setUser({ ...user, [key]: value });

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/signup-bg.png")}
        style={{ flex: 1 }}
      >
        <View
          style={{
            height: "25%",
            width: "100%",
            paddingTop: "3.75%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon.Ionicons
                name="ios-chevron-back"
                size={RFValue(24)}
                style={{ marginLeft: "5.9%" }}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: RFValue(111), height: RFValue(111) }}
          />
        </View>

        <View
          style={{
            height: "10%",

            //justifyContent: "flex-start",
            //alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",

              marginTop: "1.4%",
              //marginBottom: RFValue(53),
            }}
          >
            <TouchableOpacity
              onPress={toggleModal}
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",

                ///marginTop: "1.4%",
                //marginBottom: RFValue(53),
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: RFValue(15) }}>
                English
              </Text>
              <View style={{ marginTop: RFValue(4) }}>
                <Entypo name="chevron-down" size={14} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Modal
              isVisible={isModalVisible}
              onBackdropPress={toggleModal}
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  width: RFValue(315),
                  height: RFValue(478),
                  backgroundColor: "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Image
                  source={require("../assets/images/translateImg.png")}
                  style={{
                    width: RFValue(140),
                    height: RFValue(140),
                    marginBottom: RFValue(48),
                  }}
                />
                <Text
                  style={{
                    fontFamily: "SF-UI-Display-Regular",
                    fontSize: RFValue(24),
                    color: "#000000",
                  }}
                >
                  Change Language
                </Text>
                <View
                  style={{
                    marginBottom: RFValue(75),
                    marginTop: RFValue(15),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.radioButton}
                    >
                      <View style={styles.radioButtonIcon} />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: "SF-UI-Display-Regular",
                        fontSize: RFValue(20),
                        color: "#000000",
                      }}
                    >
                      English
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.radioButton}
                    ></TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: "SF-UI-Display-Regular",
                        fontSize: RFValue(20),
                        color: "#000000",
                      }}
                    >
                      Bahasa Melayu
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={toggleModal}>
                  <View
                    //backgroundColor={"#FF2D55"}
                    style={{
                      borderRadius: 5,
                      backgroundColor: "#FF2D55",
                      width: RFValue(97),
                      height: RFValue(44),
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "SF-UI-Display-Semibold",
                        fontSize: RFValue(17),
                        color: "#FFFFFF",
                      }}
                    >
                      Done
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </View>

        <View
          style={{
            height: "57%",

            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "100%",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: RFValue(10),
              paddingHorizontal: "8%",
              paddingTop: "5%",
              paddingBottom: "4.125%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                alignItems: "center",
                //backgroundColor: "white",
                //height: scale(52),
              }}
            >
              <Text
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(34),

                  // marginBottom: "1.25%",
                  color: "#1E2432",
                }}
              >
                Sign Up
              </Text>

              <Text
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(15),
                  //marginBottom: RFValue(22),
                  color: "#ACB1C0",
                }}
              >
                Create a new account
              </Text>
            </View>

            <View style={{ width: "100%" }}>
              <TextInput
                placeholder="Name"
                value={user.name}
                onChangeText={(text) => handleTextChange("name", text)}
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(15),
                  width: "100%",
                  height: RFValue(44),
                  backgroundColor: "#F1F2F6",
                  marginBottom: "1.25%",
                  justifyContent: "center",
                  borderRadius: RFValue(5),
                  paddingHorizontal: RFValue(17),
                  color: "#000000",
                }}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                value={user.email}
                onChangeText={(text) => handleTextChange("email", text)}
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(15),
                  width: "100%",
                  height: RFValue(44),
                  backgroundColor: "#F1F2F6",
                  marginBottom: "1.25%",
                  justifyContent: "center",
                  borderRadius: RFValue(5),
                  paddingHorizontal: RFValue(17),
                }}
              />
              <TextInput
                placeholder="Password"
                //   keyboardType="visible-password"
                secureTextEntry={true}
                value={user.password}
                onChangeText={(text) => handleTextChange("password", text)}
                blurOnSubmit={false}
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(15),
                  width: "100%",
                  height: RFValue(44),
                  backgroundColor: "#F1F2F6",
                  marginBottom: "1.25%",
                  justifyContent: "center",
                  borderRadius: RFValue(5),
                  paddingHorizontal: RFValue(17),
                }}
              />
              <TextInput
                //   keyboardType="visible-password"
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={user.password1}
                onChangeText={(text) => handleTextChange("password1", text)}
                onSubmitEditing={() => Keyboard.dismiss()}
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(15),
                  width: "100%",
                  height: RFValue(44),
                  backgroundColor: "#F1F2F6",
                  //marginBottom: RFValue(22),
                  justifyContent: "center",
                  borderRadius: RFValue(5),
                  paddingHorizontal: RFValue(17),
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                signIn(user);
                navigation.navigate("Verify");
              }}
              style={{
                width: "100%",
                height: RFValue(44),
                backgroundColor: "#FF2D55",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: RFValue(5),
              }}
            >
              <Text
                style={{
                  fontFamily: "SF-UI-Display-Semibold",
                  fontSize: RFValue(17),
                  color: "#FFFFFF",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: "8%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginRight: 5,
              fontFamily: "SF-UI-Display-Regular",
              fontSize: RFValue(15),
              color: "#FFFFFF",
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text
              style={{
                fontFamily: "SF-UI-Display-Regular",
                fontSize: RFValue(15),
                color: "#FF2D55",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const mapStateToDispatch = (dispatch) => {
  return {
    signIn: (user) => dispatch(SignUpUser(user)),
  };
};
export default connect(null, mapStateToDispatch)(SignUp);

const styles = StyleSheet.create({
  radioButton: {
    height: RFValue(24),
    width: RFValue(24),
    backgroundColor: "#F8F8F8",
    borderRadius: RFValue(12),
    borderWidth: RFValue(1),
    borderColor: "#FF2D55",
    alignItems: "center",
    justifyContent: "center",
    marginRight: RFValue(17),
  },
  radioButtonIcon: {
    height: RFValue(14),
    width: RFValue(14),
    borderRadius: RFValue(7),
    backgroundColor: "#FF2D55",
  },
});
