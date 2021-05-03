import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import * as Icon from "react-native-vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const copyrightpolicy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon.Ionicons name="ios-chevron-back" size={RFValue(24)} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>Copyright Policy</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>

        <View style={styles.bigTitleContainer}>
          <Text style={styles.bigTitle}>Copyright Policy</Text>
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
                <Text style={styles.text}>Copyright</Text>
                <Text></Text>
                <Text style={styles.text}>
                  Copyright is a legal right that protects original works of
                  authorship (e.g., music, videos, etc.). Generally, copyright
                  protects an original expression of an idea (e.g., the specific
                  way a video or music is expressed or created) but does not
                  protect underlying ideas or facts.
                </Text>
                <Text></Text>
                <Text style={styles.text}>Copyright Infringement</Text>
                <Text></Text>
                <Text style={styles.text}>
                  We do not allow any content that infringes copyright. The use
                  of copyrighted content of others without proper authorization
                  or legally valid reason may lead to a violation of Tamuku's
                  policies.
                </Text>
                <Text></Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default copyrightpolicy;

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
    height: "47%",
  },
  text: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: RFValue(15),
    color: "#000000",
  },
});
