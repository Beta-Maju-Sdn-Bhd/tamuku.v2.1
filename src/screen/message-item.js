import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from "react-native";
import {
  Chat_other,
  Chat_text,
  Chat_me,
  Chat_input,
  Profil_input,
} from "../styles/messaging-stc";
import * as Icon from "react-native-vector-icons";
import { connect } from "react-redux";
import { getRoom, sendMessage } from "../store/actions/messages";
import { TouchableOpacity } from "react-native-gesture-handler";

const MessageItem = ({ route, rooms, get_room, profile, send_msg }) => {
  const [msg, setMessage] = useState({
    id: profile.uid,
    body: "",
    created_at: new Date(),
  });
  const handleTextChange = (key, value) =>
    setMessage({
      ...msg,
      [key]: value,
    });
  useEffect(() => {
    get_room(rooms.rooms, route.params.id);
  }, []);
  return (
    <KeyboardAvoidingView>
      <View
        style={{
          height: "100%",
          backgroundColor: "white",
          width: "100%",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        {rooms.room && (
          <FlatList
            data={rooms.room.messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              if (item.id === profile.uid) {
                //this is bubble chat for receiver ( receiver / the one who currently using the app)
                return (
                  <View style={{ justifyContent: "flex-end" }}>
                    <Chat_me style={{ alignSelf: "flex-end" }}>
                      <Chat_text color="#fff">{item.body}</Chat_text>
                    </Chat_me>
                  </View>
                );
              } //this is for sender ( other peoiple than this person)
              else {
                return (
                  <View style={{ justifyContent: "flex-start" }}>
                    <Chat_other style={{ alignSelf: "flex-start" }}>
                      <Chat_text color="#000">{item.body}</Chat_text>
                    </Chat_other>
                  </View>
                );
              }
            }}
          />
        )}
        <KeyboardAvoidingView style={{ height: "auto" }}>
          <Chat_input
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Profil_input
              placeholder="write a message..."
              multiline={true}
              value={msg.body}
              onChangeText={(text) => handleTextChange("body", text)}
            />
            <TouchableOpacity
              onPress={() => {
                if (msg.body.length !== 0) {
                  send_msg(msg, route.params.id);
                  setMessage({ ...msg, body: "" });
                }
              }}
            >
              <Icon.Ionicons
                name="send"
                size={24}
                style={{
                  color: "#FF2D55",
                  marginTop: 7,
                  alignSelf: "flex-end",
                  marginRight: 5,
                  marginBottom: 5,
                }}
              />
            </TouchableOpacity>
          </Chat_input>
        </KeyboardAvoidingView>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => {
  return {
    rooms: state.messages,
    profile: state.profile.info,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    get_room: (rooms, id) => dispatch(getRoom(rooms, id)),
    send_msg: (msg, id) => dispatch(sendMessage(msg, id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);
