import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screen/profile";
import ProfileEdit from "../screen/profile-edit";
import MessageRoutes from "./message-route";
import SettingsRoutes from "./settings-route";
import StoreRoutes from './store-routes';

const Stack = createStackNavigator();

const ProfileRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit" component={ProfileEdit} />
      <Stack.Screen name="Message" component={MessageRoutes} />
      <Stack.Screen name="Settings" component={SettingsRoutes} />
      <Stack.Screen name='Store' component={StoreRoutes} />
    </Stack.Navigator>
  );
};

export default ProfileRoutes;
