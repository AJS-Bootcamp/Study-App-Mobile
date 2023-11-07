import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import photo from "../assets/img/study2.png";
import * as Animatable from "react-native-animatable";

const AboutScreen = () => {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={5000} delay={1000}>
        <Card wrapperStyle={{ margin: 20 }}>
          <Card.Title>About us</Card.Title>
          <Card.Divider></Card.Divider>

          <Card.Image source={require("../assets/img/study2.png")}></Card.Image>
          <Text style={{ margin: 10, textAlign: "center" }}>
            "As former students, our mission is to empower individuals to unlock
            their full potential by drawing upon our own experiences and
            providing them with the knowledge and tools needed to master
            effective study techniques and elevate their learning journey."
          </Text>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default AboutScreen;
