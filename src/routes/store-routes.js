import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StoreIndex from "../screen/store/store";
import StoreAddItem from "../screen/store/store-addItem";
import StoreItemDetail from "../screen/store/store-itemDetail";

const Stack = createStackNavigator();

const StoreRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name='StoreIndex' component={StoreIndex}/>
        <Stack.Screen name='Store_Add_Item' component={StoreAddItem}/>
        <Stack.Screen name='Store_Item_Detail' component={StoreItemDetail}/>
    </Stack.Navigator>
  );
};

export default StoreRoutes;
