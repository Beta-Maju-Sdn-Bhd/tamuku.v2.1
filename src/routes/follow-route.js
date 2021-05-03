import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FollowProfile from "../screen/follow/FollowProfile";
import Follower_FollowerList from "../screen/follow/Follower-list";

const Stack = createStackNavigator();

const FollowRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Follow_INDEX" component={FollowProfile} />
      <Stack.Screen name='Follow_LIST' component={Follower_FollowerList}/>
    </Stack.Navigator>
  );
};

export default FollowRoute;
