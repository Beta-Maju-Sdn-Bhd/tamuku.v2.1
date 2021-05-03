import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import * as Icon from "react-native-vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const guidelines = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Ionicons name="ios-chevron-back" size={RFValue(24)} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 5 }}>
          <Text style={styles.title}>Community Guidelines</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>

      <View style={styles.bigTitleContainer}>
        <Text style={styles.bigTitle}>Community</Text>
        <Text style={styles.bigTitle}>Guidelines</Text>
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
              <Text style={styles.text}>Introduction</Text>
              <Text></Text>
              <Text style={styles.text}>Last updated, December 2020</Text>
              <Text></Text>
              <Text style={styles.text}>
                Tamuku's mission is to inspire creativity and bring joy. We are
                building a global community where people can create and share,
                discover the world around them, and connect with others across
                the globe. As we grow, we are committed to maintaining a
                supportive environment for our community. Our Community
                Guidelines define a set of norms and common code of conduct for
                Tamuku; they provide guidance on what is and is not allowed to
                make a welcoming space for everyone.
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default guidelines;

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
