import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as Icon from "react-native-vector-icons";
import { Octicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const promote = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Ionicons name="ios-chevron-back" size={RFValue(24)} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.title}>Promote</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>

      <View style={styles.bigTitleContainer}>
        <Text style={styles.bigTitle}>Promote</Text>
      </View>

      <View style={styles.rectangleContainer}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/settings/phone-circle.png")}
          ></Image>

          <View style={styles.textContainer}>
            <ScrollView>
              <Text></Text>
              <Text style={styles.text}>Promote Your Videos on Tamuku</Text>
              <Text></Text>
              <Text style={styles.text}>
                Promoted videos are those that you create organically (just like
                any other post) then pay to have shown to a targeted audience.
                You promote your videos directly from the app by tapping
                “Promote” under your chosen post. Both ads and promoted posts
                feature a “Sponsored” tag to alert Tamuku users that the creator
                has paid to show them this content.
              </Text>
              <Text></Text>
              <Text style={styles.text}>How Do I Promote My Post?</Text>
              <Text></Text>
              <Text style={styles.text}>
                Promoting a video through the Tamuku app is as easy as tapping a
                few icons:
              </Text>
              <Text style={styles.text}>
                {"    "}
                <Octicons name="primitive-dot" size={15} color="black" />
                {" Log into the Tamuku app, and go to your Profile page."}
              </Text>
              <Text></Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default promote;

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
    height: "55%",
  },
  text: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: RFValue(15),
    color: "#000000",
  },
});
