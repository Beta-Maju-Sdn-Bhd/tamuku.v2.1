import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import SignUp from "../screen/signup";
import SignIn from "../screen/signin";
import SignUpSplash from "../screen/signup-splash";
import BottomNav from "./bottom-nav-routes";
import Verfication from "../screen/verfication";
import RNBootSplash from "react-native-bootsplash";

const Stack = createStackNavigator();

const AuthRoutes = ({ auth }) => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {auth.isAuth ? (
          <>
            <Stack.Screen name="Home" component={BottomNav} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignupSplash" component={SignUpSplash} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Verify" component={Verfication} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(AuthRoutes);
