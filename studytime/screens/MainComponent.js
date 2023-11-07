import * as React from "react";
import { Image, View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import StudyScreen from "./StudyScreen";
import ContactScreen from "./ContactScreen";

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
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}
