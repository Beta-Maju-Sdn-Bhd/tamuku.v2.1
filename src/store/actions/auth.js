import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { ToastAndroid } from "react-native";

export const SignUpUser = (user) => (dispatch) => {
  if (user.password.length < 8) {
    ToastAndroid.show("Password must be 8 characters", ToastAndroid.SHORT);
  }
  if (user.password != user.password1) {
    ToastAndroid.show("Password does not match", ToastAndroid.SHORT);
  } else {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .catch((err) => console.log(err));
    auth().onAuthStateChanged((user) => {
      if (user.emailVerified === false) {
        user.sendEmailVerification();
      }
      firestore().collection("profile").doc(user.user.uid).set({
        uid: user.user.uid,
        name: user.name,
        email: user.email,
      });
    });
  }
};

export const SignOutUser = () => (dispatch) => {
  auth()
    .signOut()
    .then(() =>
      dispatch({
        type: "LOGOUT",
      })
    )
    .catch((err) => console.log(err));
};

export const SignInUser = (user, nav) => async (dispatch) => {
  auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      if (data.user.emailVerified === false) {
        auth().onAuthStateChanged((user) => user.sendEmailVerification());
        nav.navigate("Verify");
      } else {
        return dispatch({
          type: "SIGNIN",
          payload: {
            token: data.user.uid,
            user: data.user,
          },
        });
      }
    })
    .catch((err) => console.log(err));
};
