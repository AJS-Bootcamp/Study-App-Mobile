import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Modal,
} from "react-native";
import { Card, Button } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Rating } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";

const BOOK = require("../assets/img/book2.png");

const ContactScreen = () => {
  const [buttonTitle, setButtonTitle] = useState("Review Us");

  // const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [rating, setRating] = useState("5");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    const newComment = {
      author,
      rating,
      text,
    };
    setShowModal(!showModal);
  };

  const resetForm = () => {
    setRating(5);
    setAuthor("");
    setText("");
  };

  return (
    <LinearGradient
      colors={["#06466B", "#010114"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={8000} delay={1000}>
          <Card wrapperStyle={{ margin: 20 }}>
            <Card.Title style={styles.cardTitle}>Review Us</Card.Title>
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
              onPress={() => {
                setButtonTitle("Thank you");
                setShowModal(!showModal);
              }}
              buttonStyle={styles.button}
              titleStyle={styles.text}
            />

            <Modal
              animationType="slide"
              transparent={false}
              visible={showModal}
              onRequestClose={() => setShowModal(!showModal)}
            >
              <View style={styles.modal}>
                <Rating
                  type="custom"
                  ratingImage={BOOK}
                  // tintColor="yellow"
                  ratingTextColor="#010114"
                  ratingColor="white"
                  ratingBackgroundColor="white"
                  ratingCount={5}
                  imageSize={60}
                  showRating
                  startingValue={rating}
                  onFinishRating={(rating) => setRating(rating)}
                  style={{ paddingVertical: 10 }}
                />
                <Input
                  placeholder="Author"
                  leftIcon={{ type: "font-awesome", name: "user-o" }}
                  leftIconContainerStyle={{ paddingRight: 10 }}
                  onChangeText={(author) => setAuthor(author)}
                  value={author}
                />
                <Input
                  placeholder="Comment"
                  leftIcon={{ type: "font-awesome", name: "comment-o" }}
                  leftIconContainerStyle={{ paddingRight: 10 }}
                  onChangeText={(text) => setText(text)}
                  value={text}
                />
                <View style={{ margin: 10 }}>
                  <Button
                    onPress={() => {
                      handleSubmit();
                      resetForm();
                    }}
                    buttonStyle={{ backgroundColor: "#09B4B7" }}
                    title="Submit"
                  />
                </View>
                <View style={{ margin: 10 }}>
                  <Button
                    onPress={() => {
                      setShowModal(!showModal);
                      resetForm();
                      setButtonTitle("Review Us");
                    }}
                    buttonStyle={{ backgroundColor: "#09B4B7" }}
                    title="Cancel"
                  />
                </View>
              </View>
            </Modal>
          </Card>
        </Animatable.View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 30,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 1,
    backgroundColor: "#09B4B7",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
});

export default ContactScreen;
