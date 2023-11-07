import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import { useState } from "react";
//Speedial with social media
import { SpeedDial } from "react-native-elements";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);

  //colors={["#446879", "#0e122c"]}

  // "#008080" #09B4B7 #06466B #E5E8E7 #B3B5B7 #010114
  return (
    <LinearGradient
      colors={["#06466B", "#010114"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {/* <ScrollView> */}
      <Text
        style={{
          color: "#FFFF00",

          fontSize: 40,
        }}
      >
        HomeScreen
      </Text>
      <SpeedDial
        isOpen={open}
        icon={{ name: "star", color: "#fff" }}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        buttonStyle={{ backgroundColor: "#0ABAB5" }}
      >
        <SpeedDial.Action
          icon={<Icon name="facebook" size={20} color="white" />}
          title="Facebook"
          onPress={() => Linking.openURL("https://www.facebook.com/")}
          buttonStyle={{ backgroundColor: "#4267B2" }}
        ></SpeedDial.Action>

        <SpeedDial.Action
          icon={<Icon name="instagram" size={20} color="white" />}
          title="Instagram"
          onPress={() => Linking.openURL("https://www.instagram.com/")}
          buttonStyle={{ backgroundColor: "#E1306C" }}
        ></SpeedDial.Action>

        <SpeedDial.Action
          icon={<Icon name="github" size={20} color="white" />}
          title="GitHub"
          onPress={() => Linking.openURL("https://www.github.com/")}
          buttonStyle={{ backgroundColor: "#333" }}
        ></SpeedDial.Action>
      </SpeedDial>
      {/* </ScrollView> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
