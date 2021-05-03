import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { ToastAndroid } from "react-native";

export const getChatProfile = (profiles, uid) =>
  profiles.filter((item) => item.uid === uid)[0];

export const getSingleProduct = (uid, products) =>
  products.filter((item) => item.id === uid)[0];

export const isLiked = (uid, likes) => {
  let isLiked = false;

  if (likes.length === 0) {
    return false;
  } else {
    likes.map((i) => (i === uid ? (isLiked = true) : (isLiked = false)));
    return isLiked;
  }
};

export const selectVideo = async (type, navigation) => {
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
        // setData(res.uri);
        let path = res.uri
        // console.log(path);
        navigation.navigate("AddDescription", { path: path });
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
        // setData(res.uri);
        let path = res.uri
        // console.log(path);
        navigation.navigate("AddDescription", { path: path });
      }
    });
  }
};
