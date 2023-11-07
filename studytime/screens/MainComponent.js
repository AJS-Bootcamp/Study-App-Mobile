import { Platform } from "react-native";
import Constants from "expo-constants";
import * as React from "react";

import {
  View,
  useWindowDimensions,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import { TabView, SceneMap } from "react-native-tab-view";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import StudyScreen from "./StudyScreen";
import ContactScreen from "./ContactScreen";
import logo from "../assets/img/lightAJS.png";
import { TabBar } from "react-native-tab-view";

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
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: "#FFFF00",
            }}
            style={{ backgroundColor: "#008080" }}
          />
        )}
      />
    </View>
  );
}
// "#008080" #09B4B7 #06466B #E5E8E7 #B3B5B7 #010114
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 60,
    backgroundColor: "#0ABAB5",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    fontColor: "#010114",
  },
});
