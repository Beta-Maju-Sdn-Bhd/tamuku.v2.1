import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import home2 from "../screen/home2";
import FollowProfile from "../screen/follow/FollowProfile";
import FollowRoute from "./follow-route";

const Stack = createStackNavigator();

const PostRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="POST_INDEX" component={home2} />
      <Stack.Screen name='Follow' component={FollowRoute}/>
    </Stack.Navigator>
  );
};

export default PostRoute;
