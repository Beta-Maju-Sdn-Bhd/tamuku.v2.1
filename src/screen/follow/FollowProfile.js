import React, { useState, Component } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Follower_profilBrand,
  Follower_bg,
  Follower_profilPic,
  Follower_text,
  Follower_text_2,
  Follower_follow_btn,
  Item_picture,
} from "../../styles/follower-stc";
import * as Icon from "react-native-vector-icons";

const numColumn = 3; //for number of flatlist row (idiot utube tutorial doesnt know row and column :')

const FollowProfile = ({ navigation }) => {
  const [postList, setPostListe] = useState([
    {
      key: "1",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "2",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "3",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "4",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "5",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "6",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "7",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "9",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "10",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "11",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "12",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "13",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "14",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "15",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "16",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
    {
      key: "17",
      itemPic: require("../../assets/images/messaging_asset/women_bag_item.png"),
    },
  ]);

  formatData = (postList, numColumn) => {
    //this is for auto fill if one row is not enough 3 item, it will automatically fill blank space
    const totalRows = Math.floor(postList.length / numColumn);
    let totalLastRow = postList.length - totalRows * numColumn;

    while (totalLastRow !== 0 && totalLastRow !== numColumn) {
      postList.push({ key: "blank", empty: true });
      totalLastRow++;
    }
    return postList;
  };

  _renderItem = ({ item, index }) => {
    //this is one is flatlist render for EACH item.
    return (
      <TouchableOpacity
        style={{
          flexDirection: "column",
          aspectRatio: 1,
          width: "30.3%",
          margin: 5,
        }}
      >
        <Item_picture
          source={item.itemPic}
          style={{ width: "25%", aspectRatio: 1 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ height: "100%", width: "100%", flexDirection: "column" }}>
      <Follower_bg
        source={require("../../assets/images/follower_asset/Follower_bg.png")}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <Icon.Ionicons
            name="chevron-back-outline"
            size={24}
            style={{ color: "#FFFFFF" }}
          />
          <Icon.Ionicons
            name="ellipsis-vertical-outline"
            size={24}
            style={{ color: "#FFFFFF" }}
          />
        </View>
        <View
          style={{
            height: "75%",
            flexDirection: "column-reverse",
            marginLeft: "5%",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "55%",
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Follow_LIST")}
                >
                  <Follower_text_2>128</Follower_text_2>
                  <Follower_text_2>Following</Follower_text_2>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity>
                  <Follower_text
                    onPress={() => navigation.navigate("Follow_LIST")}
                  >
                    3120
                  </Follower_text>
                  <Follower_text>Follower</Follower_text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity>
                  <Follower_text>5024</Follower_text>
                </TouchableOpacity>
                <Follower_text>Likes</Follower_text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Follower_follow_btn
                  source={require("../../assets/images/follower_asset/btn_follow.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Follower_profilPic
                source={require("../../assets/images/follower_asset/Follower_profile.png")}
              />
              <Follower_profilBrand
                source={require("../../assets/images/follower_asset/business_icon.png")}
              />
            </View>
            <View style={{ marginLeft: "2%" }}>
              <Follower_text style={{ fontSize: 20, lineHeight: 28 }}>
                Catherine Lynch
              </Follower_text>
              <Follower_text
                style={{ fontSize: 13, lineHeight: 18, letterSpacing: 0.32 }}
              >
                Business
              </Follower_text>
            </View>
          </View>
        </View>
      </Follower_bg>
      <View
        style={{
          top: "2%",
          height: "58%",
          width: "98%",
          margin: 'auto',
          alignSelf: "center",
          marginTop: "1.5%",
        }}
      >
        <FlatList
          data={postList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
          numColumns={numColumn}
        />
      </View>
    </View>
  );
};

export default FollowProfile;