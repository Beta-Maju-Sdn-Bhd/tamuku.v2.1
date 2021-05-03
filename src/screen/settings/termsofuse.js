import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import * as Icon from "react-native-vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const termsofuse = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Ionicons name="ios-chevron-back" size={RFValue(24)} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Terms of Use</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>

      <View style={styles.bigTitleContainer}>
        <Text style={styles.bigTitle}>Terms of use</Text>
      </View>

      <View style={styles.rectangleContainer}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/settings/doc-circle.png")}
          ></Image>
          <View style={styles.textContainer}>
            <ScrollView>
              <Text></Text>
              <Text style={styles.text}>Terms of Service</Text>
              <Text></Text>
              <Text style={styles.text}>Last updated, February 2019</Text>
              <Text></Text>
              <Text style={styles.text}>1. Your Relationship With Us</Text>
              <Text></Text>
              <Text style={styles.text}>
                Welcome to Tamuku (the “Platform”), which is provided by Beta
                Maju Sdn Bhd. in the Malaysia (collectively such entities will
                be referred to as “Tamuku”, “we” or “us”).
              </Text>
              <Text></Text>
              <Text style={styles.text}>
                You are reading the terms of service (the “Terms”), which govern
                the relationship and serve as an agreement between you and us
                and set forth the terms and conditions by which you may access
                and for private, non-commercial use. For purposes of these
                Terms, “you” and
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default termsofuse;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: RFValue(50),
    width: "100%",
    paddingHorizontal: RFValue(14),
    backgroundColor: "#F7F9FA",
  },
  title: {
    fontFamily: "SF-UI-Display-Semibold",
    fontSize: RFValue(17),
    color: "#000000",
    textAlign: "center",
  },
  bigTitleContainer: {
    alignItems: "center",
    paddingTop: RFValue(30),
    paddingBottom: RFValue(20),
  },
  bigTitle: {
    fontFamily: "SF-UI-Display-Semibold",
    fontSize: RFValue(24),
    color: "#000000",
  },
  rectangleContainer: {
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: RFValue(30),
    borderRadius: RFValue(20),
    borderWidth: RFValue(2.5),
    borderColor: "#dedede",
  },
  rectangle: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: RFValue(25),
  },
  image: {
    width: RFValue(150),
    height: RFValue(150),
  },
  textContainer: {
    marginHorizontal: RFValue(16),
    height: "53%",
  },
  text: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: RFValue(15),
    color: "#000000",
  },
});
