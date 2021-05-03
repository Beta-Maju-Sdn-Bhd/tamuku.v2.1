import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppIntroSlider from "react-native-app-intro-slider";
import RNBootSplash from "react-native-bootsplash";

const slides = [
  {
    key: "1",
    title: "Visual content & marketing platform for brands",
    image: require("../assets/images/signup-splash-screen-1.png"),
    // logo: require("../assets/images/logo.png"),
  },
  {
    key: "2",
    title:
      "Tamuku amplifies your brand with creative visual content that resonates",
    image: require("../assets/images/signup-splash-screen-2.png"),
    // logo: require("../assets/images/logo.png"),
  },
  {
    key: "3",
    title:
      "Tamuku aims to deliver a seamless brand experience by making it easy to display to customers your brand photos, videos, and influencer content.",
    image: require("../assets/images/signup-splash-screen-3.png"),
    //logo: require("../assets/images/logo.png"),
  },
];

export default class SignUpSplash extends Component {
  componentDidMount() {
    RNBootSplash.hide({ fade: true });
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={item.image} style={styles.image}>
          <View style={styles.titleContainer}>
            <View style={{ height: "25%", justifyContent: "flex-end" }}>
              <Image
                source={require("../assets/images/logo.png")}
                style={styles.logo}
              />
            </View>

            <View
              style={{
                flex: 1,
                height: "55%",
                justifyContent: "flex-end",
                paddingHorizontal: RFValue(30),
                paddingBottom: RFValue(30),
                //backgroundColor: "#000",
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View
              style={{
                height: "20%",
                //marginBottom: scale(78),
                //backgroundColor: "#fff",
                // justifyContent: "flex-end",
              }}
            >
              {item.key == 3 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: RFValue(17),
                      fontFamily: "SF-UI-Display-Semibold",
                    }}
                  >
                    {"Sign Up"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  _onDone = () => {
    //User finished the introduction. Show real app through
    //navigation or simply by controlling state
    //this.setState({ showRealApp: true });
    this.props.navigation.navigate("SignUp");
  };

  render() {
    return (
      <AppIntroSlider
        activeDotStyle={{
          backgroundColor: "#FF2D55",
          width: RFValue(8),
          height: RFValue(8),
          //marginBottom: RFValue(139),
          // marginBottom: "100%",
        }}
        dotStyle={{
          backgroundColor: "#B5BBC6",
          width: RFValue(8),
          height: RFValue(8),
          //marginBottom: RFValue(139),
        }}
        showDoneButton={false}
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        nextLabel={null}
        //bottomButton={this._bottomButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //width: "100%",
    //height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    //justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    //paddingHorizontal: 30,
    // justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: RFValue(111),
    height: RFValue(111),
    //marginTop: 93,
  },

  title: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: RFValue(24),
    color: "#FFFFFF",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF2D55",
    width: RFValue(275),
    height: RFValue(44),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignSelf: "center",
    //marginBottom: scale(30),
  },
});
