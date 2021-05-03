import React from "react";
import { connect } from "react-redux";
import { Screen } from "../styles/global.stc";
import { Entypo } from "@expo/vector-icons";
import {
  BarWrapepr,
  FieldWrapper,
  Input,
  InputControl,
  PhotoField,
  PhotoFieldWrapper,
  PhotoFieldWrapper2,
  Popup,
} from "../styles/profile-edit.stc";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, Platform } from "react-native";
import { useState } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { ToastAndroid } from "react-native";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import storage from "@react-native-firebase/storage";
import { createProfile } from "../store/actions/profile";

const moment = require("moment");

const selectImage = (type, data, setUri, setVisible) => {
  const options = {
    mediaType: "photo",
    maxWidth: 4500,
    maxHeight: 4500,
    saveToPhotos: true,
  };
  if (type === "CAMERA") {
    launchCamera(options, (res) => {
      if (res.didCancel) {
        ToastAndroid.show("No Photo Selected", ToastAndroid.SHORT);
      }
      if (res.errorCode) {
        ToastAndroid.show("Could not get image", ToastAndroid.SHORT);
      } else {
        setUri({ ...data, uim_dp: res.uri });
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
        setUri({ ...data, uim_dp: res.uri });
        setVisible(false);
      }
    });
  }
};
const TopBarOne = ({ onUpdate, goBack }) => {
  return (
    <BarWrapepr>
      <TouchableOpacity onPress={() => goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: "#202020", fontFamily: "med" }}>
        Edit
      </Text>
      <TouchableOpacity
        onPress={() => onUpdate()}
        style={{ padding: 5, backgroundColor: "rgba(255, 45, 85, 0.01)" }}
      >
        <Text style={{ color: "#FF2D55", fontSize: 16, fontFamily: "med" }}>
          Update
        </Text>
      </TouchableOpacity>
    </BarWrapepr>
  );
};
const TopBarTwo = ({ onSave }) => {
  return (
    <BarWrapepr>
      <Text style={{ fontSize: 20, color: "#202020", fontFamily: "med" }}>
        Create Profile
      </Text>
      <TouchableOpacity
        onPress={() => onSave()}
        style={{ padding: 5, backgroundColor: "rgba(255, 45, 85, 0.01)" }}
      >
        <Text style={{ color: "#FF2D55", fontSize: 16, fontFamily: "med" }}>
          Save
        </Text>
      </TouchableOpacity>
    </BarWrapepr>
  );
};

const ProfileEdit = ({ profileCreated, profile, navigation, user }) => {
  const [profileData, setProfileData] = useState({
    uim_email: user.user ? user.user.email: '',
    uim_pNumber: profile.profileExists ? profile.info.uim_pNumber : "",
    uim_dBirth: profile.profileExists
      ? new Date(
          profile.info.uim_dBirth.seconds * 1000 +
            profile.info.uim_dBirth.nanoseconds / 1000000
        )
      : new Date(),
    uim_dp: profile.profileExists ? profile.info.uim_dp : "",
    uim_gender: profile.profileExists ? profile.info.uim_gender : "Male",
  });
  const [dialogVisible, setVisibility] = useState(false);
  const [datePickerShow, setShow] = useState(false);
  const handleTextChange = (key, value) =>
    setProfileData({
      ...profileData,
      [key]: value,
    });
  return (
    <Screen>
      <Dialog
        visible={dialogVisible}
        onTouchOutside={() => setVisibility(false)}
      >
        <DialogContent>
          <Popup>
            <PhotoFieldWrapper2>
              <PhotoField
                source={
                  profile.profileExists
                    ? { uri: profile.info.uim_dp }
                    : require("../assets/images/photo-field-bg.png")
                }
                imageStyle={{ borderRadius: 16 }}
              >
                <TouchableOpacity
                  onPress={() =>
                    selectImage(
                      "CAMERA",
                      profileData,
                      setProfileData,
                      setVisibility
                    )
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
            </PhotoFieldWrapper2>
            <PhotoFieldWrapper2>
              <PhotoField
                source={
                  profile.profileExists
                    ? { uri: profile.info.profile_image }
                    : require("../assets/images/photo-field-bg.png")
                }
                imageStyle={{ borderRadius: 16 }}
              >
                <TouchableOpacity
                  onPress={() =>
                    selectImage(
                      "DEVICE",
                      profileData,
                      setProfileData,
                      setVisibility
                    )
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
          </Popup>
        </DialogContent>
      </Dialog>
      {/* Dialog box */}
      {profile.profileExists ? (
        <TopBarOne goBack={() => navigation.navigate("Profile")} />
      ) : (
        <TopBarTwo
          onSave={async () => {
            const referance = storage().ref(
              `${user.token}-${Date.now()}-prfile.png`
            );
            await referance.putFile(profileData.uim_dp);
            const imagePath = await referance.getDownloadURL();
            profileCreated(user, {...profileData, uim_dp: imagePath});
          }}
        />
      )}
      <PhotoFieldWrapper>
        <PhotoField
          source={
            profile.profileExists
              ? { uri: profile.info.uim_dp }
              : profileData.uim_dp
              ? { uri: profileData.uim_dp }
              : require("../assets/images/photo-field-bg.png")
          }
          imageStyle={{ borderRadius: 16 }}
        >
          <TouchableOpacity onPress={() => setVisibility(!dialogVisible)}>
            <Entypo name="camera" size={32} color="#404040" />
          </TouchableOpacity>
        </PhotoField>
      </PhotoFieldWrapper>
      <FieldWrapper>
        <InputControl>
          <Text style={{ fontFamily: "med", fontSize: 16 }}>Email </Text>
          <Text style={{ fontFamily: "med", fontSize: 16 }}>
            {profileData.uim_email}
          </Text>
        </InputControl>
        <InputControl>
          <Text style={{ fontFamily: "med", fontSize: 16 }}>Phone Number</Text>
          <Input
            placeholder="Add phone number"
            value={profileData.uim_pNumber}
            onChangeText={(text) => handleTextChange("uim_pNumber", text)}
          />
        </InputControl>
        <InputControl>
          <Text style={{ fontFamily: "med", fontSize: 16 }}>Gender</Text>
          {Platform.OS === "ios" ? (
            <PickerIOS
              style={{
                width: "60%",
                height: 40,
                fontFamily: "norm",
                fontSize: 17,
              }}
              selectedValue={profileData.uim_gender}
              onValueChange={(val, i) => handleTextChange("uim_gender", val)}
            >
              <PickerIOS.Item label="Male" value="Male" />
              <PickerIOS.Item label="Female" value="Female" />
            </PickerIOS>
          ) : (
            <Picker
              style={{
                width: "60%",
                height: 40,
                fontFamily: "norm",
                fontSize: 17,
              }}
              selectedValue={profileData.uim_gender}
              onValueChange={(val, i) => handleTextChange("uim_gender", val)}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          )}
        </InputControl>
        <InputControl>
          <Text style={{ fontFamily: "med", fontSize: 16 }}>Date Of Birth</Text>
          <TouchableOpacity
            onPress={() => setShow(!datePickerShow)}
            style={{
              width: "60%",
              height: 40,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ fontSize: 17, fontFamily: "norm" }}>
              {moment(profileData.uim_dBirth).format("MM/DD/YY")}
            </Text>
          </TouchableOpacity>
          {datePickerShow && (
            <DateTimePicker
              value={profileData.uim_dBirth}
              mode="date"
              onChange={(e, date) => {
                const selectedDate = date || new Date();
                setProfileData({ ...profileData, uim_dBirth: selectedDate });
                setShow(false);
              }}
            />
          )}
        </InputControl>
      </FieldWrapper>
    </Screen>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    profileCreated: (user, data) => dispatch(createProfile(user, data)),
  };
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    user: state.auth,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
