import React, { useState } from "react";
import { View, StatusBar, Platform, FlatList } from "react-native";
import {
  FollowBtn_false,
  FollowBtn_text_1,
  Follower_profilPic,
  Follower_text_3,
  FollowList_title,
  FollowBtn_text_2,
  FollowBtn_true,
} from "../../styles/follower-stc";
import { FollowProfile_text, Seperator } from "../../styles/messaging-stc";

const Follower_FollowerList = () => {
  const [followList, setFollowList] = useState([
    {
      key: "1",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "true",
    },
    {
      key: "2",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "true",
    },
    {
      key: "3",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "4",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "5",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "6",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "7",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "8",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "9",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "true",
    },
    {
      key: "10",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "11",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "12",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "false",
    },
    {
      key: "13",
      name: "nizar",
      relation: "instagram",
      pic: require("../../assets/images/follower_asset/Follower_profile.png"),
      followViewStatus: "true",
    },
  ]);

  list = ({ item, index }) => {
    return (
      <View
        style={{
          width: "100%",
          height: 60,
          flexDirection: "column",
          margin: "2%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "30%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Follower_profilPic source={item.pic} />
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                marginLeft: 4,
              }}
            >
              <Follower_text_3>{item.name}</Follower_text_3>
              <FollowProfile_text>{item.relation}</FollowProfile_text>
            </View>
          </View>
          <View style={{marginRight: 20}}>
            {item.followViewStatus === "true" ? (
              <FollowBtn_true
                style={{ flexDirection: "row", justifyContent: "center" }}
              >
                <FollowBtn_text_2>Follow</FollowBtn_text_2>
              </FollowBtn_true>
            ) : (
              <FollowBtn_false
                style={{ flexDirection: "row", justifyContent: "center" }}
              >
                <FollowBtn_text_1>Follow</FollowBtn_text_1>
              </FollowBtn_false>
            )}
          </View>
        </View>
        <Seperator
          style={{ top: 40, alignSelf: "flex-end", width: "80%" }}
        ></Seperator>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        paddingTop: 0,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "12%",
          backgroundColor: "#F7F8FA",
        }}
      >
        <FollowList_title
          style={{ marginBottom: 20, marginLeft: 20, marginRight: 20 }}
        >
          Followers
        </FollowList_title>
      </View>
      <View style={{ height: "85%", margin: "2%" }}>
        <FlatList
          data={followList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={list}
        />
      </View>
    </View>
  );
};

export default Follower_FollowerList;
