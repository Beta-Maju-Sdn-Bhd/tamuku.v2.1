import React from "react";
import { SafeAreaView } from "react-native";
import { LOGO, Txt } from "../styles/verification.stc";

const Verfication = () => {
  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "#e7e7e7" }}
    >
      <LOGO source={require("../assets/images/logo.png")} />
      <Txt>Please Check Email To verify your account</Txt>
    </SafeAreaView>
  );
};

export default Verfication;
