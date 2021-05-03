import React, { useEffect, useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { connect } from "react-redux";
import Post from "../components/post";

import { getPosts } from "../store/actions/posts";
import RNBootSplash from "react-native-bootsplash";

const home2 = ({ posts, get_posts, navigation }) => {
  // const [layoutData, setLayoutData] = useState({
  //   paused: true,
  //   position: { s: null, e: null },
  //   threshold: 15,
  // });
  useEffect(() => {
    (async () => {
      await RNBootSplash.hide({ fade: true });
    })();
    get_posts();
  }, [posts]);

  // const handleOnScrool = (event) => {
  //   const scrollPos = event.nativeEvent.contentOffset.y;
  //   const paused = layoutData.paused;
  //   const { s, e } = layoutData.position;
    
  //   if (scrollPos < s && paused) {
  //     setLayoutData({ ...layoutData, paused: false });
  //   } else if (scrollPos > s && !paused) {
  //     setLayoutData({ ...layoutData, paused: true });
  //   } else if (scrollPos < e && !paused) {
  //     setLayoutData({ ...layoutData, paused: true });
  //   }
  // };

  // const handleVideo = (event) => {
  //   const { height } = Dimensions.get("window");

  //   setLayoutData({
  //     ...layoutData,
  //     position: {
  //       ...layoutData.position,
  //       s: -(event.nativeEvent.layout.y - height + layoutData.threshold),
  //       e:
  //         event.nativeEvent.layout.y +
  //         event.nativeEvent.layout.height -
  //         layoutData.threshold,
  //     },
  //   });
  // };

  return (
    <View style={{ backgroundColor: "#000000" }}>
      <FlatList
        // onScroll={(e) => handleOnScrool(e)}
        data={posts.posts}
        renderItem={({ item }) => (
          <Post
            post={item}
            navigation={navigation}
            // vidEvent={handleVideo}
            // pause={layoutData.paused}
            // setPause={setLayoutData}
            // layoutData={layoutData}
          />
        )}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_posts: () => dispatch(getPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(home2);
