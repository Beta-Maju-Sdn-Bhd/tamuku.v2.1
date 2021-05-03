import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import SettingComponents from "./settingcomponents";
import * as Icon from "react-native-vector-icons";
import { SignOutUser } from "../../store/actions/auth";
import { connect } from "react-redux";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Setting = ({ navigation, logout, profileLogout }) => {
  const topOption = [
    {
      title: "System Settings",
      onPress: () => navigation.navigate("SystemSettings"),
    },
  ];
  const settingOptions = [
    {
      title: "Community Guidelines",
      onPress: () => navigation.navigate("CommunityGuidelines"),
    },
    { title: "Terms of Use", onPress: () => navigation.navigate("TermsofUse") },
    {
      title: "Privacy Policy",
      onPress: () => navigation.navigate("PrivacyPolicy"),
    },
    {
      title: "Copyright Policy",
      onPress: () => navigation.navigate("CopyrightPolicy"),
    },
    {
      title: "Promote your videos on Tamuku",
      onPress: () => navigation.navigate("Promote"),
    },
  ];
  const bottomOption = [
    {
      title: "Log out",
      onPress: () => {
        logout();
        profileLogout();
        navigation.navigate('SignupSplash');
      },
    },
  ];

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Ionicons name="ios-chevron-back" size={RFValue(24)} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      <SettingComponents
        settingOptions={settingOptions}
        topOption={topOption}
        bottomOption={bottomOption}
      />
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(SignOutUser()),
    profileLogout: () => dispatch({ type: "PROFILE_LOGOUT" }),
  };
};
export default connect(null, mapDispatchToProps)(Setting);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: RFValue(50),
    width: "100%",
    paddingHorizontal: RFValue(21),
    backgroundColor: "#F7F9FA",
  },
  title: {
    fontFamily: "SF-UI-Display-Semibold",
    fontSize: RFValue(17),
    color: "#000000",
    textAlign: "center",
  },
});
