import { Text, ScrollView } from "react-native";

import { useState } from "react";
import { SpeedDial } from "react-native-elements";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <ScrollView>
      <Text
        style={{
          color: "#5637DD",

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
        buttonStyle={{ backgroundColor: "#5637DD" }}
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
    </ScrollView>
  );
};

export default HomeScreen;
