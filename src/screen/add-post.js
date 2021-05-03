import { Feather } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { connect } from "react-redux";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { Entypo } from "@expo/vector-icons";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { ToastAndroid } from "react-native";

import {
  FieldWrapper,
  FieldWrapper2,
  Input,
  Para,
  PopUpPost,
  SelectButton,
  SubmitButton,
  TopBar,
  Wrappr,
  PhotoFieldWrapper2,
} from "../styles/add-posts.stc";
import { PhotoField } from "../styles/profile-edit.stc";
import { createPosts } from "../store/actions/posts";
import storage from "@react-native-firebase/storage";

const selectImage = (type, data, setUri, setVisible) => {
  let options = {
    mediaType: "photo",
    maxWidth: 4500,
    maxHeight: 4500,
    saveToPhotos: true,
    mediaType: "video",
    durationLimit: 30,
  };
  if (type === "VIDEO") {
    launchCamera(options, (res) => {
      if (res.didCancel) {
        ToastAndroid.show("No Photo Selected", ToastAndroid.SHORT); //for ios?
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

const AddPost = ({ profile, user, addPost, navigation, product, route }) => {
  const [post, setPost] = useState({
    description: "",
    hastag: "",
    photo_uri: route.params.path,
    product_id: "",
    profile_id: profile.info,
    likes: [],
    share: [],
    comments: [],
    view: 0,
    isPhoto: false,
  });
  const [dialogVisible, setVisibile] = useState(false);
  const handleChage = (key, value) => setPost({ ...post, [key]: value });

  const handleSubmit = async () => {
    const refs = storage().ref(`${user.token}-${Date.now()}-post.mp4`);
    await refs.putFile(post.photo_uri);
    const path = await refs.getDownloadURL();
    addPost({
      ...post,
      photo_uri: path,
      product_id: product.id ? product.id : "",
    });
    navigation.navigate("Feed");
    setPost({
      ...post,
      description: "",
      hastag: "",
      photo_uri: "",
      product_id: "",
      likes: 0,
      comments: [],
      isPhoto: false,
    });
  };
  return (
    <Wrappr>
      <Dialog visible={dialogVisible} onTouchOutside={() => setVisibile(false)}>
        <DialogContent>
          <PopUpPost>
            <PhotoFieldWrapper2 style={{ marginTop: 10 }}>
              <PhotoField
                source={
                  post.photo_uri.length === 0
                    ? require("../assets/images/photo-field-bg.png")
                    : { uri: post.photo_uri }
                }
                imageStyle={{ borderRadius: 16 }}
                style={{ marginRight: 20 }}
              >
                <TouchableOpacity
                  onPress={() =>
                    selectImage("VIDEO", post, setPost, setVisibile)
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
                    Take Video
                  </Text>
                </TouchableOpacity>
              </PhotoField>
              <PhotoField
                source={
                  post.photo_uri.length === 0
                    ? require("../assets/images/photo-field-bg.png")
                    : { uri: post.photo_uri }
                }
                imageStyle={{ borderRadius: 16 }}
              >
                <TouchableOpacity
                  onPress={() =>
                    selectImage("VIDEO_X", post, setPost, setVisibile)
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
                    Select Video
                  </Text>
                </TouchableOpacity>
              </PhotoField>
            </PhotoFieldWrapper2>
          </PopUpPost>
        </DialogContent>
      </Dialog>
      <TopBar>
        <Para size="20px" color="#111" family="bold">
          Post
        </Para>
      </TopBar>
      <FieldWrapper>
        <Input
          placeholder="Say Something"
          value={post.description}
          multiline
          onChangeText={(text) => handleChage("description", text)}
          maxLength={350}
        />
        <Input
          placeholder="Hash Tag, Seperate by coma"
          value={post.hastag}
          multiline
          onChangeText={(text) => handleChage("hastag", text)}
          maxLength={350}
        />
      </FieldWrapper>
      <Text
        style={{
          fontFamily: "bold",
          fontSize: 30,
          color: "#202020",
          marginBottom: 20,
          marginLeft: "10%",
        }}
      >
        Product
      </Text>
      <FieldWrapper2>
        <ImageBackground
          source={
            product
              ? { uri: product.photo_uri }
              : require("../assets/images/photo-field-bg.png")
          }
          imageStyle={{ borderRadius: 10 }}
          style={{
            width: 90,
            height: 90,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e7e7e7",
          }}
        >
          <SelectButton onPress={() => navigation.navigate("SelectProduct")}>
            <Feather name="plus" size={24} color="#111" />
          </SelectButton>
        </ImageBackground>
        <ImageBackground
          style={{
            width: 90,
            height: 90,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e7e7e7",
            marginLeft: 20,
            borderRadius: 10,
          }}
          imageStyle={{ borderRadius: 10 }}
          source={
            post.photo_uri
              ? { uri: post.photo_uri }
              : require("../assets/images/photo-field-bg.png")
          }
        >
          <SelectButton
            onPress={() => setVisibile(!dialogVisible)}
            style={{ width: 24, height: 24 }}
          >
            <Feather name="camera" size={24} color="#111" />
          </SelectButton>
        </ImageBackground>
      </FieldWrapper2>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: "10%",
          width: "80%",
          height: 40,
        }}
      >
        <SubmitButton onPress={() => handleSubmit()}>
          <Text
            style={{
              fontFamily: "bold",
              fontSize: 20,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Post
          </Text>
        </SubmitButton>
      </View>
    </Wrappr>
  );
};
const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    user: state.auth,
    product: state.products.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => dispatch(createPosts(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
