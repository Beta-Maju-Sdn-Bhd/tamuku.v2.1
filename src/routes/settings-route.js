import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../screen/settings/setting";
import systemsettings from "../screen/settings/systemsettings";
import guidelines from "../screen/settings/communityguidelines";
import termsofuse from "../screen/settings/termsofuse";
import privacypolicy from "../screen/settings/privacypolicy";
import copyrightpolicy from "../screen/settings/copyrightpolicy";
import promote from "../screen/settings/promote";

const Stack = createStackNavigator();

const SettingsRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SettingsRoot" component={Setting} />
      <Stack.Screen name="SystemSettings" component={systemsettings} />
      <Stack.Screen name="CommunityGuidelines" component={guidelines} />
      <Stack.Screen name="TermsofUse" component={termsofuse} />
      <Stack.Screen name="PrivacyPolicy" component={privacypolicy} />
      <Stack.Screen name="CopyrightPolicy" component={copyrightpolicy} />
      <Stack.Screen name="Promote" component={promote} />
    </Stack.Navigator>
  );
};

export default SettingsRoutes;
