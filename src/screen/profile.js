import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Edit_button,
  Profil_background,
  Profil_Component_2,
  Profil_component_1,
  ProfileEditText,
  Profil_image,
  FollowProfile_text,
  Profil_General,
  Profil_Menu_1,
  Profil_Menu_2,
  Profil_icon,
} from "../styles/messaging-stc";
import * as Icon from "react-native-vector-icons";
import { connect } from "react-redux";
import { getProfile } from "../store/actions/profile";
import { getAllRooms } from "../store/actions/messages";

const Profile = ({ navigation, profile, auth, getProfileInfo, get_rooms }) => {
  const [menu_1] = useState([
    {
      id: "1",
      name: "Messages",
      icon: require("../assets/images/messaging_asset/message_icon.png"),
      navigation: "Message",
    },
    {
      id: "2",
      name: "Your Store",
      icon: require("../assets/images/messaging_asset/store.png"),
      navigation: "Store",
    },
  ]);

  const [menu_2] = useState([
    {
      id: "1",
      name: "Send us a message",
      icon: require("../assets/images/messaging_asset/feedback.png"),
      navigation: "Message",
    },
    {
      id: "2",
      name: "Tell a friend",
      icon: require("../assets/images/messaging_asset/Tell_a_friend.png"),
      navigation: "Message",
    },
    {
      id: "3",
      name: "Settings",
      icon: require("../assets/images/messaging_asset/settings.png"),
      navigation: "Settings",
    },
  ]);
  useEffect(() => {
    getProfileInfo(auth)
    get_rooms(auth.token)
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Profil_background>
        <Profil_component_1>
          <Profil_Component_2>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Profil_image
                source={{uri: profile.info.uim_dp}}
              />
              <View style={{ justifyContent: "flex-start" }}>
                <Profil_General style={{ left: 22, top: 5, fontSize: 28 }}>
                  {profile.info.name}
                </Profil_General>
                <Profil_General
                  style={{
                    left: -13,
                    top: 2,
                    fontSize: 13,
                    lineHeight: 18,
                    color: "#485164",
                    textAlign: "center",
                  }}
                >
                  @{profile.info.email.split("@")[0]}
                </Profil_General>
                <Edit_button
                  style={{ left: 22, top: 20 }}
                  onPress={() => navigation.navigate("Edit")}
                >
                  <ProfileEditText>Edit</ProfileEditText>
                </Edit_button>
              </View>
            </View>

            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 22,
              }}
            >
              <View style={{ width: 120 }}>
                <Profil_General style={{ textAlign: "center" }}>
                  {profile.info.following}
                </Profil_General>
                <FollowProfile_text>Following</FollowProfile_text>
              </View>
              <View style={{ width: 120 }}>
                <Profil_General style={{ textAlign: "center" }}>
                  {profile.info.follower}
                </Profil_General>
                <FollowProfile_text>Follower</FollowProfile_text>
              </View>
              <View style={{ width: 120 }}>
                <Profil_General style={{ textAlign: "center" }}>
                  {profile.info.likes}
                </Profil_General>
                <FollowProfile_text>Likes</FollowProfile_text>
              </View>
            </View>
          </Profil_Component_2>
        </Profil_component_1>

        <Profil_Menu_1
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 12 },
            shadowOpacity: 0.05,
            shadowRadius: 10,
            elevation: 7,
          }}
        >
          <FlatList
            data={menu_1}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                  }}
                  onPress={() => navigation.navigate(item.navigation)}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Profil_icon source={item.icon} />
                    <Text style={{ marginLeft: 10, marginTop: 5 }}>
                      {item.name}
                    </Text>
                  </View>
                  <Icon.Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    style={{ color: "#C2C4CA" }}
                  />
                </TouchableOpacity>
              </View>
            )}
            onpress={() => navigation.navigate("Messaging_2")}
          />
        </Profil_Menu_1>
        <Profil_Menu_2
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 12 },
            shadowOpacity: 0.05,
            shadowRadius: 10,
            elevation: 7,
          }}
        >
          <FlatList
            data={menu_2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  padding: 10,
                  justifyContent: "space-between",
                }}
                onPress={() => navigation.navigate(item.navigation)}
              >
                <View style={{ flexDirection: "row" }}>
                  <Profil_icon source={item.icon} />
                  <Text style={{ marginLeft: 10, marginTop: 5 }}>
                    {item.name}
                  </Text>
                </View>
                <Icon.Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  style={{ color: "#C2C4CA" }}
                />
              </TouchableOpacity>
            )}
          />
        </Profil_Menu_2>
      </Profil_background>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfileInfo: (user) => dispatch(getProfile(user)), 
        get_rooms: (user) => dispatch(getAllRooms(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
