import React, { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import ProfileEdit from "../screen/profile-edit";
import ProfileRoutes from "./profile-route";
import SearchIndex from "../screen/search/SearchIndex";
import NotificationIndex from "../screen/notification/notification-index";
import { getAllProfile, getProfile } from "../store/actions/profile";
import AddPostRoutes from '../routes/post-add-routes';
import { getAllProduct } from "../store/actions/product";
import PostRoute from "./post-route";

const Tab = createBottomTabNavigator();

const BottomNav = ({ profile, get_profile, get_user_profile, auth, get_all_prod }) => {
  useEffect(() => {
    get_profile();
    get_user_profile(auth);
    get_all_prod()
  }, []);
  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ff2d55",
        inactiveTintColor: "gray",
        showLabel: false,
        adaptive: true,
      }}
    >
      {profile.profileExists ? (
        <>
          <Tab.Screen
            name="Feed"
            component={
              profile.profileExists ? PostRoute : ProfileEdit
            }
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchIndex}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Post"
            component={AddPostRoutes}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="plussquare" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Noti"
            component={NotificationIndex}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="bells" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileRoutes}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="user-circle" size={size} color={color} />
              ),
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="Edit"
          component={ProfileEdit}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user-circle" size={size} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    auth: state.auth,
  };
};
const mapDisPatchToProps = (dispatch) => ({
  get_profile: () => dispatch(getAllProfile()),
  get_user_profile: (uid) => dispatch(getProfile(uid)),
  get_all_prod: () => dispatch(getAllProduct())
});
export default connect(mapStateToProps, mapDisPatchToProps)(BottomNav);
