import React, { useState } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  AddPhoto_item_btn,
  Store_input,
  Store_text,
  Store_input_detail,
  Bottom_button,
  Button_text,
} from "../../styles/store-stc";
import * as Icon from "react-native-vector-icons";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { Entypo } from "@expo/vector-icons";

import { PopUpPost, PhotoFieldWrapper2 } from "../../styles/add-posts.stc";
import { PhotoField } from "../../styles/profile-edit.stc";

const StoreAddItem = ({ navigation }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    photo_uri: "",
  });
  const [dialogVisible, setVisibile] = useState(false);

  const handleTextChange = (key, value) =>
    setProduct({ ...product, [key]: value });
  const selectImage = (type, data, setUri, setVisible) => {
    let options = {
      mediaType: "photo",
      maxWidth: 4500,
      maxHeight: 4500,
      saveToPhotos: true,
    };

    if (type === "PHOTO") {
      launchCamera(options, (res) => {
        if (res.didCancel) {
          ToastAndroid.show("No Photo Selected", ToastAndroid.SHORT);
        }
        if (res.errorCode) {
          ToastAndroid.show("Could not get image", ToastAndroid.SHORT);
        } else {
          setUri({ ...data, photo_uri: res.uri });
          setVisible(false);
        }
      });
    } else {
      launchImageLibrary(options, (res) => {
        if (res.didCancel) {
          ToastAndroid.show("No Photo Selected", ToastAndroid.SHORT);
        }
        if (res.errorCode) {
          ToastAndroid.show("Could not get image", ToastAndroid.SHORT);
        } else {
          setUri({ ...data, photo_uri: res.uri });
          setVisible(false);
        }
      });
    }
  };
  return (
    <SafeAreaView
      style={{
        height: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor:"white"
      }}
    >
      <Dialog visible={dialogVisible} onTouchOutside={() => setVisibile(false)}>
        <DialogContent>
          <PopUpPost>
            <PhotoFieldWrapper2 style={{ marginTop: 10 }}>
              <PhotoField
                source={
                  product.photo_uri.length === 0
                    ? require("../../assets/images/photo-field-bg.png")
                    : { uri: product.photo_uri }
                }
                imageStyle={{ borderRadius: 16 }}
                style={{ marginRight: 20 }}
              >
                <TouchableOpacity
                  onPress={() =>
                    selectImage("PHOTO", product, setProduct, setVisibile)
                  }
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Entypo name="camera" size={32} color="#404040" />
                  <Text
                    style={{ color: "#000", fontFamily: "med", fontSize: 16 }}
                  >
                    Take Photo
                  </Text>
                </TouchableOpacity>
              </PhotoField>
              <PhotoField
                source={
                  product.photo_uri.length === 0
                    ? require("../../assets/images/photo-field-bg.png")
                    : { uri: product.photo_uri }
                }
                imageStyle={{ borderRadius: 16 }}
              >
                <TouchableOpacity
                  onPress={() =>
                    selectImage("PHOTO_X", product, setProduct, setVisibile)
                  }
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Entypo name="camera" size={32} color="#404040" />
                  <Text
                    style={{ color: "#000", fontFamily: "med", fontSize: 16 }}
                  >
                    Select Photo
                  </Text>
                </TouchableOpacity>
              </PhotoField>
            </PhotoFieldWrapper2>
          </PopUpPost>
        </DialogContent>
      </Dialog>
      <View style={{ flexDirection: "column", backgroundColor: " #FFFFFF" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <TouchableOpacity onPress={() => setVisibile(true)}>
            <AddPhoto_item_btn
              source={
                product.photo_uri.length === 0
                  ? require("../../assets/images/photo-field-bg.png")
                  : { uri: product.photo_uri }
              }
              imageStyle={{borderRadius: 10}}
              style={{
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Icon.Ionicons
                  name="add-outline"
                  size={40}
                  style={{
                    color: "white",
                    marginTop: 7,
                  }}
                />
              </View>
            </AddPhoto_item_btn>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginLeft: 45,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Store_text style={{ marginTop: 5 }}>Item Name </Store_text>
            <Store_text style={{ marginTop: 20 }}>Item Price </Store_text>
            <Store_text style={{ marginTop: 40 }}>Detail</Store_text>
          </View>

          <View style={{ flexDirection: "column" }}>
            <Store_input
              placeholder="Name"
              style={{
                marginBottom: 5,
                width: 170,
                fontFamily: "norm",
                paddingLeft: 10,
              }}
              value={product.name}
              onChangeText={(text) => handleTextChange("name", text)}
            />
            <Store_input
              placeholder="Price..."
              style={{ width: 170, fontFamily: "norm", paddingLeft: 10 }}
              value={product.price}
              keyboardType="number-pad"
              onChangeText={(text) => handleTextChange("price", text)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: 120,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "80%",
              backgroundColor: "#deded9",
              borderRadius: 4,
              marginTop: 5,
            }}
          >
            <Store_input_detail
              multiline={true}
              placeholder="your detail here..."
              value={product.description}
              onChangeText={(text) => handleTextChange("description", text)}
            />
          </View>
        </View>
      </View>
      <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Store_Item_Detail", {
              ...product,
              isPreview: false,
            });

            setProduct({
              ...product,
              name: '',
              price: '',
              description: '',
              photo_uri: ''
            })
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <Bottom_button
              style={{ width: 300, height: 44,flexDirection: "row", justifyContent: "center" }}
            >
              <Button_text>ADD</Button_text>
            </Bottom_button>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StoreAddItem;