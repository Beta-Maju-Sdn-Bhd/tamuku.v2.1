import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as Icon from "react-native-vector-icons";

import { scale, verticalScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";

import { Upload_gallery } from "../styles/add-post-1";
import { selectVideo } from "../utils/utils";

const Capture = ({ navigation }) => {
  // const [vidpath, setVidPath] = useState("");
  return (
    <View style={styles.background}>
      <View style={styles.container_1}>
        <Icon.Ionicons
          name="close-circle"
          size={RFValue(40)}
          style={{ color: "#FFFFFF", top: verticalScale(16) }}
        />
      </View>
      <View style={styles.container_2}>
        <View style={{ width: RFValue(65) }}></View>
        <TouchableOpacity
          onPress={() => {
            selectVideo("VIDEO", navigation);
          }}
        >
          <Image
            style={{
              width: RFValue(90),
              height: RFValue(90),
              alignSelf: "flex-end",
            }}
            source={require("../assets/images/capture.png")}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "column", top: "4%" }}>
          <TouchableOpacity
            onPress={() => {
              selectVideo("VIDEOX", navigation);
              // navigation.navigate("AddDescription", { path: vidpath });
            }}
          >
            <Upload_gallery
              style={{
                width: scale(54),
                height: verticalScale(54),
              }}
              source={require("../assets/images/sample.png")}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Upload</Text>
        </View>
      </View>
    </View>
  );
};

export default Capture;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container_1: {
    margin: 20,
  },

  container_2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  text: {
    color: "white",
    fontSize: RFValue(15),
    fontFamily: "SF-UI-Display-Regular",
    lineHeight: 18,
    letterSpacing: -0.3,
    textAlign: "center",
  },
});
