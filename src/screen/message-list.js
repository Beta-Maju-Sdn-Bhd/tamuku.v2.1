import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllRooms } from "../store/actions/messages";
import {
  Profil_General,
  Profil_icon2,
  Seperator,
} from "../styles/messaging-stc";
import { getChatProfile } from "../utils/utils";

const moment = require("moment");

const MessageList = ({ navigation, user, getRooms, rooms, profiles }) => {
  // console.log('Height on: ' , Platform.OS , StatusBar.currentHeight);
  useEffect(() => {
    getRooms(user.token);
  }, []);
  return (
    <SafeAreaView
      style={{
        maxHeight: "100%",
        width: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {rooms && (
        <>
          <FlatList
            data={rooms.rooms}
            keyExtractor={(item) => item.room_id}
            renderItem={({ item }) => {
              const ids = item.room_id.split(",");
              const uid = ids[0] === user.token ? ids[1] : ids[0];
              const profile = getChatProfile(profiles.profiles, uid);
              if (item.seen === false) {
                return (
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      marginLeft: 15,
                      marginBottom: 16,
                    }}
                    onPress={() =>
                      navigation.navigate("MessageItem", { id: item.room_id })
                    }
                  >
                    <Profil_icon2
                      source={{
                        uri: profile.uim_dp,
                      }}
                      style={{ borderRadius: 200 / 2 }}
                    />
                    <View
                      style={{
                        justifyContent: "flex-start",
                        width: "75%",
                        marginLeft: 20,
                      }}
                    >
                      <View>
                        <Profil_General
                          style={{
                            textAlign: "right",
                            top: 4,
                            fontSize: 13,
                            color: "#ACB1C0",
                          }}
                        >
                          {moment(
                            item.messages[
                              item.messages.length - 1
                            ].created_at.toDate()
                          ).format('LL')}
                        </Profil_General>
                        <Profil_General
                          style={{ textAlign: "left", marginTop: -15 }}
                        >
                          {profile.name}
                        </Profil_General>
                        <Profil_General
                          numberOfLines={1}
                          style={{ textAlign: "left", color: "#ACB1C0" }}
                        >
                          {item.messages[item.messages.length - 1].body}
                        </Profil_General>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      marginLeft: 15,
                      marginBottom: 16,
                    }}
                    onPress={() =>
                      navigation.navigate("MessageItem", { id: item.room_id })
                    }
                  >
                    <Profil_icon2
                      source={{
                        uri: profile.uim_dp,
                      }}
                      style={{ borderRadius: 200 / 2 }}
                    />
                    <View
                      style={{
                        justifyContent: "flex-start",
                        width: "75%",
                        marginLeft: 20,
                      }}
                    >
                      <View>
                        <Profil_General
                          style={{
                            textAlign: "right",
                            top: 4,
                            fontSize: 13,
                            color: "#ACB1C0",
                          }}
                        >
                          {moment(
                            item.messages[
                              item.messages.length - 1
                            ].created_at.toDate()
                          ).format('LL')}
                        </Profil_General>
                        <Profil_General
                          style={{ textAlign: "left", marginTop: -15 }}
                        >
                          {profile.name}
                        </Profil_General>
                        <Profil_General
                          numberOfLines={1}
                          style={{ textAlign: "left" }}
                        >
                          {item.messages[item.messages.length - 1].body}
                        </Profil_General>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }
            }}
          />
          <Seperator />
        </>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    rooms: state.messages,
    profiles: state.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRooms: (user) => dispatch(getAllRooms(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
