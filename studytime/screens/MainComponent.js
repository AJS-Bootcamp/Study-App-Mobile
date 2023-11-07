import { Platform } from "react-native";
import Constants from "expo-constants";
import * as React from "react";
import { View, useWindowDimensions, Text, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import StudyScreen from "./StudyScreen";
import ContactScreen from "./ContactScreen";
import logo from "../assets/img/lightAJS.png";
import { Image } from "react-native";

const FirstRoute = () => (
  <HomeScreen style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <StudyScreen style={{ flex: 1, backgroundColor: "#673ab7" }} />
);
const ThirdRoute = () => (
  <AboutScreen style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const FourthRoute = () => (
  <ContactScreen style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

export default function TabViewMain() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Home" },
    { key: "second", title: "Study" },
    { key: "third", title: "About" },
    { key: "fourth", title: "Contact" },
  ]);

  // ...

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <View style={styles.header}>
        <Image source={logo} style={{ width: 50, height: 50 }} />
        <Text style={styles.headerText}>Your Study App</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
