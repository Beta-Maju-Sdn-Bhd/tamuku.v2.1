import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";
import {
  Store_item_image,
  Store_text,
  Add_item_btn,
  Store_text_price,
} from "../../styles/store-stc";
import * as Icon from "react-native-vector-icons";
import { connect } from "react-redux";
import { getUserProduct } from "../../store/actions/product";

import { moderateScale, scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const StoreIndex = ({ navigation, products, getProducts, uid }) => {
  useEffect(() => {
    getProducts(uid);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:"white"
      }}><View style={styles.headerContainer}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon.Ionicons name="ios-chevron-back" size={24} />
                </TouchableOpacity>
            </View>
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>Your store</Text>
        </View>
        <View style={{ flex: 1 //header end
        }}></View>
      </View>
      <View style ={{backgroundColor:'white'}}>
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginLeft: 20,
                  marginTop: 10,
                  marginBottom: 10,
                }}
                onPress={() =>
                  navigation.navigate("Store_Item_Detail", {
                    ...item,
                    isPreview: true,
                  })
                }
              >
                <View>
                  <Store_item_image 
                  style={{width:scale(60) , height:verticalScale(60)}}
                  source={{ uri: item.photo_uri }} />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    left:20,
                    top:"1.5%"
                  }}
                >
                  <Store_text style={{ fontSize:RFValue(17) }}>
                    {item.name}
                  </Store_text>
                  <Store_text_price
                    style={{ fontSize:RFValue(17) }}
                  >
                    RM {item.price}
                  </Store_text_price>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Add_item_btn style={{width:scale(30) , height:scale(30)}}>
        <TouchableOpacity onPress={() => navigation.navigate("Store_Add_Item")}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Icon.Ionicons
              name="add-outline"
              size={scale(24)}
              style={{
                color: "white",
                marginTop: "9%",
              }}
            />
          </View>
        </TouchableOpacity>
      </Add_item_btn>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products.userProdcut,
    uid: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (uid) => dispatch(getUserProduct(uid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StoreIndex);

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