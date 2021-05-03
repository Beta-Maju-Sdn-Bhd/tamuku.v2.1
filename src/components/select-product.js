import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  Store_item_image,
  Store_text,
  Store_text_price,
} from "../styles/store-stc";
import { connect } from "react-redux";
import { getUserProduct } from "../store/actions/product";

const SelectProduct = ({
  navigation,
  products,
  getProducts,
  uid,
  selectProd,
}) => {
  useEffect(() => {
    getProducts(uid);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View>
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
                onPress={() => {
                  selectProd({ ...item });
                  navigation.navigate("AddIndex");
                }}
              >
                <View>
                  <Store_item_image source={{ uri: item.photo_uri }} />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Store_text style={{ marginLeft: 17, marginTop: 20 }}>
                    {item.name}
                  </Store_text>
                  <Store_text_price
                    style={{ marginLeft: 17, marginBottom: 20 }}
                  >
                    RM {item.price}
                  </Store_text_price>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
    selectProd: (data) => dispatch({ type: "SELECT", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectProduct);
