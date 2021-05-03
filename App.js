import "react-native-gesture-handler";
import React from "react";
import AuthRoutes from "./src/routes/auth-routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import { persistor, store } from "./src/store";

export default function App() {
  let [fontloaded] = useFonts({
    norm: Poppins_400Regular,
    semi: Poppins_600SemiBold,
    med: Poppins_500Medium,
    bold: Poppins_700Bold,
  });

  if (!fontloaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<AppLoading />}>
          <AuthRoutes />
        </PersistGate>
      </Provider>
    );
  }
}
