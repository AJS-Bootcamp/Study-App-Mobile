import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import React from "react";
import { useState } from "react";

const ContactScreen = () => {
  const [buttonTitle, setButtonTitle] = useState("Contact Us");

  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={8000} delay={1000}>
        <Card wrapperStyle={{ margin: 20 }}>
          <Card.Title>Contact us</Card.Title>
          <Card.Divider></Card.Divider>
          <Text style={{ margin: 10, textAlign: "center" }}>
            Determined to discover effective methods to enhance your study
            skills and optimize your learning experience.
          </Text>
          <Text style={{ margin: 10, textAlign: "justify" }}>
            We kindly invite you to share your insights.
          </Text>
          <Button
            title={buttonTitle}
            type="outline"
            onPress={() => setButtonTitle("Thank you")}
            buttonStyle={styles.button}
            titleStyle={styles.text}
          />
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default ContactScreen;
