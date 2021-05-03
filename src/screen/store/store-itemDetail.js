import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { addProduct } from "../../store/actions/product";
import {
  Store_text,
  Store_item_image,
  Bottom_button,
  Button_text,
  Store_text_price,
  Store_detail_text,
} from "../../styles/store-stc";
import storage from "@react-native-firebase/storage";
import * as Icon from "react-native-vector-icons";

import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from "react-native-size-matters";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const StoreItemDetail = ({ route, auth, add_prod, navigation }) => {
  const product = route.params;
  const submit = async () => {
    const refs = storage().ref(`${auth.token}-${Date.now()}-product.png`);
    await refs.putFile(product.photo_uri);
    const path = await refs.getDownloadURL();

    add_prod({
      name: product.name,
      price: product.price,
      photo_uri: path,
      description: product.description,
      profile_id: auth.token,
    });
    navigation.navigate("StoreIndex");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Ionicons name="ios-chevron-back" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Product</Text>
        </View>
        <View
          style={{
            flex: 1, //header end
          }}
        >
          <Text style={{ alignSelf: "flex-end", color: "black" }}>Edit</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", width: "100%", marginLeft: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View>
            <Store_item_image
              style={{ height: verticalScale(70), width: scale(70) }}
              source={{ uri: product.photo_uri }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              top: "3%",
              left: 20,
            }}
          >
            <Store_text
              style={{
                fontSize: RFValue(15),
                fontFamily: "SF-UI-Display-Semibold",
              }}
            >
              {product.name}
            </Store_text>
            <Store_text_price style={{ fontSize: RFValue(15) }}>
              RM {product.price}
            </Store_text_price>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Store_text
            style={{
              fontFamily: "SF-UI-Display-Semibold",
              fontSize: RFValue(14),
            }}
          >
            Description:{" "}
          </Store_text>
        </View>
        <View>
          <View style={{ height: "40%", width: "89%", marginTop: 5 }}>
            <Store_detail_text
              style={{ color: "black", fontSize: RFValue(14) }}
            >
              {product.description}
            </Store_detail_text>
          </View>
        </View>
      </View>
      {product.isPreview ? (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("StoreIndex")}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 40,
              }}
            >
              <Bottom_button
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  width: scale(300),
                  height: verticalScale(44),
                }}
              >
                <Button_text
                  style={{
                    fontFamily: "SF-UI-Display-Semibold",
                    fontSize: RFValue(17),
                  }}
                >
                  Save
                </Button_text>
              </Bottom_button>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => submit()}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 40,
              }}
            >
              <Bottom_button
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  width: scale(325),
                  height: verticalScale(44),
                }}
              >
                <Button_text>ADD</Button_text>
              </Bottom_button>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_prod: (data) => dispatch(addProduct(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StoreItemDetail);
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(50),
    width: "100%",
    paddingHorizontal: 21,
    backgroundColor: "#F7F9FA",
  },
  title: {
    fontFamily: "SF-UI-Display-Semibold",
    fontWeight: "600",
    fontSize: RFValue(17),
    color: "#000000",
    textAlign: "center",
  },
});
