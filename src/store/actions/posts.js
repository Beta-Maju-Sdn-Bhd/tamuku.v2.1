import firestore from "@react-native-firebase/firestore";
import { ToastAndroid } from "react-native";
import { isLiked } from "../../utils/utils";

export const createPosts = (data) => async (dispatch) => {
  await firestore()
    .collection("posts")
    .add({ ...data });

  return dispatch({
    type: "CREATE_POST",
    payload: data,
  });
};

export const getPosts = () => async (dispatch) => {
  const posts = await firestore().collection("posts").get();
  const cleanData = [];
  posts.docs.forEach((elm) => cleanData.push({ ...elm._data, id: elm.id }));
  return dispatch({
    type: "GET_POST",
    payload: cleanData,
  });
};

export const LikePost = (uid, data, user) => async (dispatch) => {
  if (
    data.profile_id.uid != user &&
    isLiked(data.profile_id.uid, data.likes) === false
  ) {
    await firestore()
      .collection("posts")
      .doc(uid)
      .update({ ...data, likes: [...data.likes, user] });
    return dispatch({
      type: "POST_LIKE",
      payload: {
        uid: user,
        id: uid,
        type: "add",
      },
    });
  } else {
    data.likes.map((i, k) => {
      if (i === data.profile_id.uid) {
        data.likes.splice(k, 1);
      }
    });
    await firestore()
      .collection("posts")
      .doc(uid)
      .update({ ...data });

    return dispatch({
      type: "POST_LIKE",
      payload: {
        uid: user,
        id: uid,
        likes: data.likes,
        type: "rem",
      },
    });
  }
};

export const Comment = (post, comment, uid) => async (dispatch) => {
  await firestore()
    .collection("posts")
    .doc(uid)
    .update({ ...post, comments: [...post.comments, comment] });
  return dispatch({
    type: "POST_COMMENT",
    payload: comment,
    id: uid,
  });
};
