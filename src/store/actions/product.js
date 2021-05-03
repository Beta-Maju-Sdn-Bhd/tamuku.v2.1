import firestore from "@react-native-firebase/firestore";

export const getAllProduct = () => async (dispatch) => {
  const products = await firestore().collection("products").get();
  let cleanData = [];
  products.docs.map((item) => cleanData.push({...item._data, id: item.id}));
  return dispatch({
    type: "GET_ALL_PROD",
    payload: cleanData,
  });
};

export const getUserProduct = (uid) => async (dispatch) => {
  const products = await firestore().collection("products").where("profile_id", "==", uid).get()
  let cleanData = []
  products.docs.map(item => cleanData.push({...item._data, id: item.id}));

  return dispatch({
      type: 'GET_USER_PROD',
      payload: cleanData
  })
};


export const addProduct = (data) => async (dispatch) => {
    await firestore().collection('products').add(data)
    return dispatch({
        type: 'ADD_PRODUCT',
        payload: data
    })
}
