import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Video from "react-native-video";
import styles from "../styles/home2";
import * as Icon from "react-native-vector-icons";
import { DP, UserCrad, Txt, TopWrapper } from "../styles/home.stc";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { getChatProfile, getSingleProduct, isLiked } from "../utils/utils";

import { Buy_pop, Pop_text } from "../styles/popUp-stc";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { Comment, LikePost } from "../store/actions/posts";
import Share from "react-native-share";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [cartModal, setCartModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);

  const [paused, setPaused] = useState(true);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  const [prod, setProd] = useState("");

  useEffect(() => {
    setProd(getSingleProduct(props.post.product_id, props.products));
  }, []);

  const toggleComment = () => {
    setCommentModal(!commentModal);
  };
  const toggleCart = () => {
    console.log("here");
    setCartModal(!cartModal);
  };

  const onPressShare = async () => {
    const shareOptions = {
      message: " This is a test message",
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log("Error => ", error);
    }

    //console.warn("Shared");
  };

  const Item = ({ user, comment, time, profImage }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginRight: RFValue(15) }}>
          <Image
            style={{
              width: RFValue(40),
              height: RFValue(40),
              borderRadius: RFValue(20),
            }}
            source={{ uri: profImage }}
          />
        </View>
        <View style={{ width: "85%" }}>
          <View style={{ marginRight: RFValue(22) }}>
            <Text
              style={{
                fontSize: RFValue(15),

                color: "#000000",
                fontFamily: "SF-UI-Display-Semibold",
              }}
            >
              {user}
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                color: "#ACB1C0",
                marginBottom: RFValue(7),
                fontFamily: "SF-UI-Display-Regular",
              }}
            >
              {/* {moment(time.toDate()).fromNow()} */}
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                color: "#000000",
                fontFamily: "SF-UI-Display-Regular",
              }}
            >
              {comment}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: RFValue(15),
                  color: "#ACB1C0",
                  marginBottom: RFValue(14),
                  fontFamily: "SF-UI-Display-Regular",
                }}
              >
                Reply
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: RFValue(1),
              backgroundColor: "#E4E4E4",
              marginBottom: RFValue(14),
            }}
          />
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    const profile = getChatProfile(props.profiles, item.user);
    return (
      <Item
        profImage={profile.uim_dp}
        user={profile.name}
        comment={item.comment}
        time={item.createdAt}
      />
    );
  };

  const [commentData, setCommentdata] = useState({
    uid: post.id,
    user: props.auth.token,
    comment: "",
    createdAt: new Date(),
  });

  const handleTextChange = (text, key) =>
    setCommentdata({ ...commentData, [key]: text });
  return (
    <View style={styles.container}>
      <View>
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
          <Video
            source={{ uri: post.photo_uri }}
            onError={(e) => {}}
            style={styles.video}
            resizeMode={"cover"}
            repeat={true}
            paused={paused}
            // onLayout={(e) => props.vidEvent(e)}
          />
        </TouchableWithoutFeedback>
        <UserCrad>
          <DP
            source={{ uri: post.profile_id.uim_dp }}
            imageStyle={{ borderRadius: RFValue(50) }}
          />
          <View>
            <Txt size="16px" family="med" color="#111">
              {post.profile_id.name}
            </Txt>
            <Txt size="16px" family="med" color="#111">
              <Entypo name="eye" size={RFValue(24)} color="black" />{" "}
              {post.view > 1000 ? post.view / 1000 + " k" : post.view}
            </Txt>
          </View>
          {props.auth.token === post.profile_id.uid ? (
            <View></View>
          ) : (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Follow")}
            >
              <ImageBackground
                style={{ width: RFValue(30), height: RFValue(30) }}
                source={require("../assets/images/follow.png")}
              ></ImageBackground>
            </TouchableOpacity>
          )}
        </UserCrad>
        <TopWrapper style={{ width: RFValue(30) }}>
          {prod ? (
            <>
              <TouchableOpacity onPress={toggleCart}>
                <Feather name="shopping-bag" size={RFValue(24)} color="#fff" />
              </TouchableOpacity>
              <Modal
                isVisible={cartModal}
                transparent={true}
                backdropOpacity={0}
                animationInTiming={0}
                animationOutTiming={0}
              >
                <Buy_pop>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: RFValue(7),
                    }}
                  >
                    <Pop_text>Product</Pop_text>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Pressable
                      style={{ width: RFValue(30), height: RFValue(30) }}
                      onPress={() => toggleCart()}
                    >
                      <Icon.Ionicons
                        name="close-outline"
                        size={RFValue(30)}
                        style={{ color: "white" }}
                      />
                    </Pressable>
                  </View>
                  <View
                    style={{ flexDirection: "column", alignSelf: "center" }}
                  >
                    <Pressable
                      onPress={() => props.navigation.navigate("MessageList")}
                      onPressIn={toggleCart}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={{ uri: prod.photo_uri }}
                          style={{ height: RFValue(120), width: RFValue(120) }}
                        />
                      </View>
                    </Pressable>
                    <Pop_text style={{ marginTop: RFValue(15) }}>
                      {prod.name}
                    </Pop_text>
                    <Pop_text>RM {prod.price}</Pop_text>
                  </View>
                </Buy_pop>
              </Modal>
            </>
          ) : (
            <></>
          )}
        </TopWrapper>
        <View style={styles.uiContainer}>
          <View style={styles.bottomContainer}>
            <View style={styles.leftContainer}>
              {prod ? (
                <>
                  <Text style={styles.product}>{prod.name}</Text>
                  <Text style={styles.price}>RM {prod.price}</Text>
                </>
              ) : (
                <></>
              )}
              <View>
                <Text style={styles.description}>{post.description}</Text>
              </View>
            </View>

            <View style={styles.rightContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => props.addLike(post.id, post, props.auth.token)}
                >
                  <Icon.Ionicons
                    name="ios-heart"
                    size={RFValue(30)}
                    color={
                      isLiked(props.auth.token, post.likes)
                        ? "#FF0000"
                        : "#FFFFFF"
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.iconLabel}>{post.likes.length}</Text>
              </View>

              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={toggleComment}>
                  <Image
                    source={require("../assets/home/comment.png")}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <Text style={styles.iconLabel}>{post.comments.length}</Text>

                <Modal
                  isVisible={commentModal}
                  onBackdropPress={toggleComment}
                  style={{ margin: 0, justifyContent: "flex-end" }}
                >
                  <View
                    style={{
                      height: "70%",
                      backgroundColor: "#FFFFFF",
                      borderTopStartRadius: RFValue(20),
                      borderTopEndRadius: RFValue(20),
                      paddingTop: RFValue(14),
                      paddingHorizontal: RFValue(8),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginBottom: RFValue(14),
                      }}
                    >
                      <View style={{ flex: 1 }} />
                      <View
                        style={{
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{ fontSize: RFValue(15), color: "#000000" }}
                        >
                          {post.comments.length} comments
                        </Text>
                      </View>
                      <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Pressable onPress={toggleComment}>
                          <Ionicons
                            name="ios-close"
                            size={RFValue(28)}
                            color="black"
                          />
                        </Pressable>
                      </View>
                    </View>
                    <View>
                      <FlatList
                        style={{ height: "80%" }}
                        data={post.comments}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                      />
                      <View
                        style={{
                          width: "100%",
                          height: RFValue(1),
                          backgroundColor: "#E4E4E4",
                        }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <TextInput
                          placeholder="Write a comment..."
                          onChangeText={(text) =>
                            handleTextChange(text, "comment")
                          }
                          value={commentData.comment}
                        ></TextInput>
                        <Pressable
                          style={{ width: RFValue(30), height: RFValue(30) }}
                          onPress={() =>
                            props.addComment(post, commentData, post.id)
                          }
                        >
                          <Image
                            style={{ width: RFValue(18), height: RFValue(18) }}
                            source={require("../assets/home/Plane.png")}
                          />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>

              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={onPressShare}>
                  <Image
                    source={require("../assets/home/share.png")}
                    style={styles.iconImage}
                  />
                </TouchableOpacity>
                <Text style={styles.iconLabel}>{post.share.length}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  products: state.products.allProduct,
  auth: state.auth,
  profiles: state.profile.profiles,
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (post, comment, uid) => dispatch(Comment(post, comment, uid)),
  addLike: (uid, data, user) => dispatch(LikePost(uid, data, user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);
