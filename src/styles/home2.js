import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.4,
  },

  uiContainer: {
    height: "100%",
    justifyContent: "flex-end",
    paddingBottom: RFValue(20),
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: RFValue(8.5),
    marginRight: RFValue(11.5),
    marginBottom: RFValue(53),
  },
  rightContainer: {
    height: RFValue(200),
    justifyContent: "space-between",
  },
  leftContainer: {
    justifyContent: "flex-end",
    width: "80%",
    marginLeft: RFValue(20),
  },
  product: {
    fontFamily: "SF-UI-Display-Bold",
    fontSize: RFValue(18),
    //fontWeight: "bold",
    color: "#FFFFFF",
  },
  price: {
    fontFamily: "SF-UI-Display-Bold",
    fontSize: RFValue(17),
    //fontWeight: "bold",
    color: "#FFFFFF",
  },
  description: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: RFValue(16),
    color: "#FFFFFF",
  },

  iconContainer: {
    alignItems: "center",
  },
  iconImage: {
    width: RFValue(30),
    height: RFValue(30),
  },
  iconLabel: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: RFValue(15),
    color: "#FFFFFF",
  },
});

export default styles;
