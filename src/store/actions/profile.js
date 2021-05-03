import firestore from "@react-native-firebase/firestore";

export const getProfile = (user) => (dispatch) => {
  firestore()
    .collection("profile")
    .doc(user.token)
    .get()
    .then((data) => dispatch({
      type: 'GET_PROFILE',
      payload: data._data
    }))
    .catch(() =>
      dispatch({
        type: "PROFILE_ERROR",
      })
    );
};

export const createProfile = (user, data) => async (dispatch) => {
  const docs = await firestore().collection("profile").doc(user.token).get();
  await firestore()
    .collection("profile")
    .doc(user.token)
    .update({ ...data });
  const profile = await firestore().collection("profile").doc(user.token).get();
  return dispatch({
    type: "CREATE_PROFILE",
    payload: {
      ...profile._data,
      id: docs.id,
    },
  });
};


export const getAllProfile = () => async dispatch => {
  const profiles = await firestore().collection('profile').get();
  let data = []
  profiles._docs.map((item ) => data.push(item._data))

  return dispatch({
    type: 'ALL_PROFILE',
    payload: data
  })
} 
 