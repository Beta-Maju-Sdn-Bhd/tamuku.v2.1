import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Switch,
} from "react-native";
import colors from "../../styles/colors";
import * as Icon from "react-native-vector-icons";

const systemsettings = ({ navigation }) => {
  const [micEnabled, micIsEnabled] = useState(false);
  const mictoggleSwitch = () => micIsEnabled((previousState) => !previousState);

  const [albumEnabled, albumIsEnabled] = useState(false);
  const albumtoggleSwitch = () =>
    albumIsEnabled((previousState) => !previousState);

  const [cameraEnabled, cameraIsEnabled] = useState(false);
  const cameratoggleSwitch = () =>
    cameraIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Ionicons name="ios-chevron-back" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.title}>System Settings</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <View>
        <View>
          <View style={styles.option}>
            <Text style={styles.text}>Allow Tamuku to access microphone</Text>
            <Switch
              trackColor={{ false: "#BDBDBD", true: "#FF8C00" }}
              thumbColor={micEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={mictoggleSwitch}
              value={micEnabled}
            />
          </View>
          <View style={styles.optionsubtitle}>
            <Text style={styles.textsubtitle}>
              Enable access so you can start taking videos for video posting
            </Text>
          </View>

          <View style={styles.option}>
            <Text style={styles.text}>Allow Tamuku to access photo album</Text>
            <Switch
              trackColor={{ false: "#BDBDBD", true: "#FF8C00" }}
              thumbColor={albumEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={albumtoggleSwitch}
              value={albumEnabled}
            />
          </View>
          <View style={styles.optionsubtitle}>
            <Text style={styles.textsubtitle}>
              Enable access so you can upload photos and videos for profile
              photos, product photos and video posting
            </Text>
          </View>

          <View style={styles.option}>
            <Text style={styles.text}>Allow Tamuku to access camera</Text>
            <Switch
              trackColor={{ false: "#BDBDBD", true: "#FF8C00" }}
              thumbColor={cameraEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={cameratoggleSwitch}
              value={cameraEnabled}
            />
          </View>
        </View>
        <View style={styles.optionsubtitle}>
          <Text style={styles.textsubtitle}>
            Enable access so you can start taking photos any videos
          </Text>
        </View>
        <View style={styles.option}>
            <Text style={styles.text}>Change Languge</Text>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default systemsettings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    paddingHorizontal: 21,
    backgroundColor: "#F7F9FA",
  },
  title: {
    fontFamily: "SF UI Display",
    fontSize: 17,
    color: "#000000",
    textAlign: "center",
  },
  text: {
    fontFamily: "SF UI Display",
    fontSize: 15,
    color: "#000000",
  },
  textsubtitle: {
    fontFamily: "SF UI Display",
    fontSize: 13,
    color: "#5E5E5E",
  },
  option: {
    paddingLeft: 21,
    paddingRight: 7,
    paddingBottom: 16.5,
    paddingTop: 16.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  optionsubtitle: {
    backgroundColor: "#E8E8E8",
    paddingLeft: 21,
    paddingRight: 15,
    paddingBottom: 16.5,
    paddingTop: 16.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});