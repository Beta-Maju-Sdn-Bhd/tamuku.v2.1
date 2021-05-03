import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddPost from "../screen/add-post";
import SelectProduct from "../components/select-product";
import Capture from "../screen/add-post-camera";

const Stack = createStackNavigator();

const AddPostRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name='AddIndex' component={Capture} />
        <Stack.Screen name='AddDescription' component={AddPost} />
        <Stack.Screen name='SelectProduct' component={SelectProduct} />
    </Stack.Navigator>
  );
};

export default AddPostRoutes;
