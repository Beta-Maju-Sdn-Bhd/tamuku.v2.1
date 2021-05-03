import React from "react";
import { SafeAreaView, View, ImageBackground, Text } from "react-native";
import { Post } from "../static_data/home.data";
import {
  Buttons,
  DP,
  HomeWarpper,
  ImageBG,
  Info,
  PostWrapper,
  Prod,
  TopWrapper,
  Txt,
  UserCrad,
} from "../styles/home.stc";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { getPosts, LikePost } from "../store/actions/posts";
import { useEffect } from "react";

const Home = ({ get_posts, posts, like_post, profile }) => {
  useEffect(() => {
    get_posts();
  }, []);
  return (
    <SafeAreaView>
      
      {posts.isThere ? (
        <HomeWarpper>
          {posts.posts.map((i, k) => (
            <ImageBG source={{ uri: i.photo_uri }} key={k}>
              <PostWrapper>
                <UserCrad>
                  <DP
                    source={{ uri: i.profile_id.uim_dp }}
                    imageStyle={{ borderRadius: 50 }}
                  ></DP>
                  <View>
                    <Txt size="16px" family="med" color="#111">
                      {i.profile_id.name}
                    </Txt>
                    <Txt size="16px" family="med" color="#111">
                      <Entypo name="eye" size={24} color="black" />{" "}
                      {i.view > 1000 ? i.view / 1000 + " k" : i.view}
                    </Txt>
                  </View>
                  <TouchableOpacity>
                    <ImageBackground
                      style={{ width: 30, height: 30 }}
                      source={require("../assets/images/follow.png")}
                    ></ImageBackground>
                  </TouchableOpacity>
                </UserCrad>
                <TopWrapper style={{ width: 30 }}>
                  <TouchableOpacity>
                    <Feather name="shopping-bag" size={24} color="#fff" />
                  </TouchableOpacity>
                </TopWrapper>
              </PostWrapper>
              <Info>
                <Buttons onPress={() => like_post(i.id, i, profile.info.uid)}>
                  <Entypo name="heart" size={30} color="#fff" />
                  <Txt size="14px" family="norm" color="#fff">
                    {i.likes.length > 1000
                      ? i.likes.length / 1000 + " k"
                      : i.likes.length}
                  </Txt>
                </Buttons>
                <Buttons>
                  <MaterialCommunityIcons
                    name="message-processing"
                    size={30}
                    color="#fff"
                  />
                  <Txt size="14px" family="norm" color="#fff">
                    {i.comments.length > 1000
                      ? i.comments.length / 1000 + " k"
                      : i.comments.length}
                  </Txt>
                </Buttons>
                <Buttons>
                  <Octicons name="link-external" size={30} color="#fff" />
                  <Txt size="14px" family="norm" color="#fff">
                    {i.share.length > 1000
                      ? i.share.length / 1000 + " k"
                      : i.share.length}
                  </Txt>
                </Buttons>
              </Info>
              <Prod>
                <Txt size="30px" family="bold" color="#fff">
                  {i.prod_name}
                </Txt>
                <Txt size="20px" family="bold" color="#fff">
                  RM {i.price}
                </Txt>
                <Txt size="16px" family="norm" color="#fff">
                  {i.description}
                </Txt>
              </Prod>
            </ImageBG>
          ))}
        </HomeWarpper>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_posts: () => dispatch(getPosts()),
    like_post: (uid, data, user) => dispatch(LikePost(uid, data, user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
