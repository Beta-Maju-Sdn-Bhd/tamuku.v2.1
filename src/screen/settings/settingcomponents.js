import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as Icon from "react-native-vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const SettingComponents = ({ settingOptions, topOption, bottomOption }) => {
  return (
    <SafeAreaView style={styles.contentContainer}>
      {topOption.map(({ title, onPress }) => (
        <TouchableOpacity key={title} onPress={onPress}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: RFValue(21),
              paddingRight: RFValue(15),
            }}
          >
            <View
              style={{
                paddingTop: RFValue(20),
                paddingBottom: RFValue(18),
                flex: 7,
              }}
            >
              <Text
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(15),
                  color: "#000000",
                }}
              >
                {title}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Icon.Ionicons name="chevron-forward" size={RFValue(24)} />
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.greyEmptyRow} />

      {settingOptions.map(({ title, onPress }) => (
        <TouchableOpacity key={title} onPress={onPress}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: RFValue(21),
              paddingRight: RFValue(12),
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                paddingTop: RFValue(18),
                paddingBottom: RFValue(18),
                flex: 7,
              }}
            >
              <Text
                style={{
                  fontFamily: "SF-UI-Display-Regular",
                  fontSize: RFValue(15),
                  color: "#000000",
                }}
              >
                {title}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Icon.Ionicons name="chevron-forward" size={RFValue(24)} />
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.greyEmptyRow} />

      {bottomOption.map(({ title, onPress }) => (
        <TouchableOpacity key={title} onPress={onPress}>
          <View
            style={{
              paddingBottom: RFValue(18),
              paddingTop: RFValue(18),
            }}
          >
            <Text
              style={{
                fontFamily: "SF-UI-Display-Regular",
                fontSize: RFValue(15),
                color: "#000000",
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.greyEmptyRow} />
    </SafeAreaView>
  );
};

export default SettingComponents;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
  },

  greyEmptyRow: {
    height: RFValue(10),
    backgroundColor: "#e8e8e8",
  },
});
