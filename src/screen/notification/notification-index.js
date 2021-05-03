import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const NotiData = [
  {
    id: "1",
    image: require("../../assets/notification/notipic1.png"),
    name: "Jimmy Nilson",
    details: "followed you",
    contents: null,
    photo: null,
    time: "2 hours ago",
  },
  {
    id: "2",
    image: require("../../assets/notification/notipic2.png"),
    name: "Katie Malone",
    details: "liked 3 your photos",
    contents: null,
    photo: require("../../assets/notification/notiphoto1.png"),
    time: "2 hours ago",
  },
  {
    id: "3",
    image: require("../../assets/notification/notipic3.png"),
    name: "@gorlova",
    details: "commented on your photo",
    contents: "The Luxury Of Traveling With Yacht Charter Companies",
    photo: require("../../assets/notification/notiphoto2.png"),
    time: "2 hours ago",
  },
  {
    id: "4",
    image: require("../../assets/notification/notipic4.png"),
    name: "Austin Gonzalez",
    details: "added 5 photos",
    contents: null,
    photo: require("../../assets/notification/notiphoto3.png"),
    time: "2 hours ago",
  },
];

const NotificationIndex = () => {
  const [listData, setListData] = useState(
    NotiData.map((NotiDataItem, index) => ({
      key: `${index}`,
      image: NotiDataItem.image,
      name: NotiDataItem.name,
      details: NotiDataItem.details,
      contents: NotiDataItem.contents,
      time: NotiDataItem.time,
      photo: NotiDataItem.photo,
    }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const VisibleItem = (props) => {
    const { data } = props;
    return (
      <View style={styles.rowFront}>
        <TouchableHighlight style={styles.rowFrontVisible}>
          <View style={styles.nameDetails}>
            <View style={styles.imageContainer}>
              <Image style={styles.profImage} source={data.item.image} />
            </View>
            <View style={styles.nameDetailsPhotoContainer}>
              <View style={styles.nameDetails}>
                <Text style={styles.name} numberOfLines={1}>
                  {data.item.name}{" "}
                </Text>
                <Text style={styles.details} numberOfLines={1}>
                  {data.item.details}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "SF-UI-Display-Regular",
                    fontSize: RFValue(15),
                    color: "#000000",
                  }}
                >
                  {data.item.contents}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "SF-UI-Display-Regular",
                    fontSize: RFValue(15),
                    color: "#ACB1C0",
                  }}
                >
                  {data.item.time}
                </Text>
              </View>
            </View>
            <View style={{ marginTop: RFValue(20) }}>
              <Image style={styles.photo} source={data.item.photo} />
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.greyline}></View>
      </View>
    );
  };

  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />;
  };

  const HiddenItemWithActions = (props) => {
    const { swipeAnimatedValue, onClose, onDelete } = props;

    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}
        >
          <Animated.View
            style={[
              styles.deleteView,
              {
                transform: [
                  {
                    scale: swipeAnimatedValue.interpolate({
                      inputRange: [RFValue(-90), RFValue(-45)],
                      outputRange: [RFValue(1), RFValue(0)],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.delete}> Delete </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        //onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1, alignItems: "flex-start" }}></View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Notifications</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}></View>
      </View>

      <View style={styles.container2}>
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={RFValue(75)}
          rightOpenValue={RFValue(-90)}
          disableRightSwipe
        />
      </View>
    </View>
  );
};

export default NotificationIndex;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: RFValue(50),
    width: "100%",
    paddingHorizontal: RFValue(21),
    backgroundColor: "#F7F9FA",
  },
  title: {
    fontFamily: "SF-UI-Display-Semibold",
    fontSize: RFValue(17),
    color: "#000000",
  },

  container2: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    backgroundColor: "#FFF",
    borderRadius: RFValue(5),
    //height: 60,
  },
  rowFrontVisible: {
    backgroundColor: "#FFF",
    //height: 60,
    paddingTop: RFValue(10),
    marginBottom: RFValue(15),
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: RFValue(15),
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: RFValue(90),
  },

  backRightBtnRight: {
    backgroundColor: "#FF2D55",
    right: 0,
  },
  nameDetails: {
    flexDirection: "row",
    width: "95%",
  },
  name: {
    fontSize: RFValue(15),
    fontFamily: "SF-UI-Display-Semibold",
    marginBottom: RFValue(5),
    color: "#000000",
  },
  details: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: RFValue(15),
    color: "#000000",
  },
  deleteView: {
    justifyContent: "center",
  },
  delete: {
    fontFamily: "SF-UI-Display-Regular",
    fontSize: RFValue(15),
    color: "#FFFFFF",
    textAlign: "center",
  },
  profImage: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(25),
  },
  imageContainer: {
    paddingHorizontal: RFValue(12),
  },
  nameDetailsPhotoContainer: {
    flexDirection: "column",
    width: "60%",
  },
  photo: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(3),
    marginLeft: RFValue(15),
  },
  greyline: {
    backgroundColor: "#EAECEF",
    height: RFValue(2),
    width: "80%",
    alignSelf: "flex-end",
  },
});
