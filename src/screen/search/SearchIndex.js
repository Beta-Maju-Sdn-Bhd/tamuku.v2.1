import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const DATA = [
  {
    id: "1",

    title: "Popular",
    video1: require("../../assets/search/popularmostcommented1.png"),
    video2: require("../../assets/search/popularmostcommented2.png"),
    video3: require("../../assets/search/popularmostcommented3.png"),
    time: "3 hours ago",
    comment: null,
  },
  {
    id: "2",
    title: "Latest",
    video1: require("../../assets/search/latesttopweekly1.png"),
    video2: require("../../assets/search/latesttopweekly2.png"),
    video3: require("../../assets/search/latesttopweekly3.png"),
    time: "5 hours ago",
    comment: null,
  },
  {
    id: "3",

    title: "Most commented",
    video1: require("../../assets/search/popularmostcommented1.png"),
    video2: require("../../assets/search/popularmostcommented2.png"),
    video3: require("../../assets/search/popularmostcommented3.png"),
    time: "5 hours ago",
    comment: null,
  },
  {
    id: "4",

    title: "Top weekly ",
    video1: require("../../assets/search/latesttopweekly1.png"),
    video2: require("../../assets/search/latesttopweekly2.png"),
    video3: require("../../assets/search/latesttopweekly3.png"),
    time: "5 hours ago",
    comment: null,
  },
];

const SearchIndex = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const Item = ({ title, comment, time, video1, video2, video3 }) => (
    <View>
      <View
        style={{
          height: RFValue(1),
          backgroundColor: "#E4E4E4",
          marginBottom: RFValue(14),
        }}
      />
      <View
        style={{
          paddingHorizontal: RFValue(16),
          paddingTop: RFValue(12),
          paddingBottom: RFValue(15),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: RFValue(10),
          }}
        >
          <Text
            style={{
              fontFamily: "SF-UI-Display-Semibold",
              fontSize: RFValue(20),
              color: "#000000",
            }}
          >
            {title}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "SF-UI-Display-Regular",
                fontSize: RFValue(15),
                color: "#FF2D55",
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={video1}
                style={{
                  width: RFValue(135),
                  height: RFValue(135),
                  marginRight: 20,
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(13),
                  color: "#ACB1C0",
                  marginBottom: RFValue(7),
                }}
              >
                {time}
              </Text>
            </View>
            <View>
              <Image
                source={video2}
                style={{
                  width: RFValue(135),
                  height: RFValue(135),
                  marginRight: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(13),
                  color: "#ACB1C0",
                  marginBottom: RFValue(7),
                }}
              >
                {time}
              </Text>
            </View>
            <View>
              <Image
                source={video3}
                style={{
                  width: RFValue(135),
                  height: RFValue(135),
                  marginRight: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(13),
                  color: "#ACB1C0",
                  marginBottom: RFValue(7),
                }}
              >
                {time}
              </Text>
            </View>

            <Text style={{ fontSize: RFValue(13), color: "#000000" }}>
              {comment}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      comment={item.comment}
      time={item.time}
      video1={item.video1}
      video2={item.video2}
      video3={item.video3}
    />
  );

  return (
    <View
      style={{ flex: 1, paddingTop: RFValue(5), backgroundColor: "#FFFFFF" }}
    >
      <View>
        <SearchBar
          containerStyle={{
            backgroundColor: "#FFFFFF",
            borderTopColor: "#FFFFFF",
            borderBottomColor: "#FFFFFF",
            paddingHorizontal: RFValue(20),
          }}
          inputContainerStyle={{
            borderRadius: RFValue(50),
            height: RFValue(36),
            backgroundColor: "#F1F2F6",
          }}
          placeholder="Search brands, shops and more... "
          onChangeText={onChangeSearch}
          value={searchQuery}
          inputStyle={{
            marginTop: RFValue(5),
            fontFamily: "SF-UI-Display-Regular",
            fontSize: RFValue(15),
            textAlignVertical: "center",
            color: "#000000",
          }}
          searchIcon={
            <Feather
              name="search"
              size={20}
              color="#ACB1C0"
              style={{ marginLeft: RFValue(3), marginRight: RFValue(-10) }}
            />
          }
        />
      </View>
      <View
        style={{
          paddingHorizontal: RFValue(16),
          paddingTop: RFValue(12),
          paddingBottom: RFValue(15),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: RFValue(23),
          }}
        >
          <Text
            style={{
              fontFamily: "SF-UI-Display-Semibold",
              fontSize: RFValue(20),
              //fontWeight: "bold",
              color: "#000000",
            }}
          >
            Sponsored
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "SF-UI-Display-Regular",
                fontSize: RFValue(15),
                color: "#FF2D55",
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: RFValue(34) }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/search/sponsored1.png")}
              style={{
                width: RFValue(135),
                height: RFValue(179),
                marginRight: RFValue(20),
              }}
            />
            <Image
              source={require("../../assets/search/sponsored2.png")}
              style={{
                width: RFValue(135),
                height: RFValue(179),
                marginRight: RFValue(20),
              }}
            />
            <Image
              source={require("../../assets/search/sponsored3.png")}
              style={{
                width: RFValue(135),
                height: RFValue(179),
                marginRight: RFValue(20),
              }}
            />
          </View>
        </ScrollView>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SearchIndex;
