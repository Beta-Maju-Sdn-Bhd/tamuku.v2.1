import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageList from "../screen/message-list";
import MessageItem from "../screen/message-item";

const Stack = createStackNavigator();

const MessageRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MessageList" component={MessageList} />
      <Stack.Screen name="MessageItem" component={MessageItem} />
    </Stack.Navigator>
  );
};

export default MessageRoutes;
