import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import photo from "../assets/img/study2.png";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const AboutScreen = () => {

    return (
        <LinearGradient
            colors={["#06466B", "#010114"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <ScrollView>
                <Animatable.View
                    animation="fadeInDown"
                    duration={8000}
                    delay={1000}
                >
                    <Card wrapperStyle={{ margin: 20 }}>
                        <Card.Title style={styles.cardTitle}>
                            About us
                        </Card.Title>
                        <Card.Divider></Card.Divider>


                        <Card.Image
                            source={require("../assets/img/study2.png")}
                        ></Card.Image>
                        <Text style={{ margin: 10, textAlign: "center" }}>
                            "As former students, our mission is to empower
                            individuals to unlock their full potential by
                            drawing upon our own experiences and providing them
                            with the knowledge and tools needed to master
                            effective study techniques and elevate their
                            learning journey."
                        </Text>
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
});

export default AboutScreen;
