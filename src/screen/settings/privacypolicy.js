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

const privacypolicy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Ionicons name="ios-chevron-back" size={RFValue(24)} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.title}>Privacy Policy</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>

      <View style={styles.bigTitleContainer}>
        <Text style={styles.bigTitle}>Privacy Policy</Text>
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
              <Text style={styles.text}>Privacy Policy</Text>
              <Text></Text>
              <Text style={styles.text}>Last updated: January 2021</Text>
              <Text></Text>
              <Text style={styles.text}>
                Welcome to Tamuku (the “Platform”). The Platform is provided and
                controlled by Beta Maju Sdb Bhd., (“Tamuku”, “we” or “us”).
              </Text>
              <Text></Text>
              <Text style={styles.text}>
                We are committed to protecting and respecting your privacy. This
                policy explains our practices concerning the personal data we
                collect from you, or that you provide to us. If you do not agree
                with this policy, you should not use the Platform.
              </Text>
              <Text></Text>
              <Text style={styles.text}>
                If you have any questions about how we use your personal data,
                contact us at
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default privacypolicy;

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
    paddingTop: RFValue(25),
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
