import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TaskForm from "../components/tasklist/TaskForm";
import TaskList from "../components/tasklist/TaskList";

import * as Progress from "react-native-progress";

import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";

//Speedial with social media
import { SpeedDial } from "react-native-elements";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { LinearGradient } from "expo-linear-gradient";


const HomeScreen = () => {
   const [open, setOpen] = useState(false);

  //colors={["#446879", "#0e122c"]}

  // "#008080" #09B4B7 #06466B #E5E8E7 #B3B5B7 #010114
  
    const [items, setItems] = useState([]);
    const [completionPercentage, setCompletionPercentage] = useState(0);

    function handleAddItem(item) {
        const newItem = { id: uuid(), task: item, complete: false };
        setItems((items) => [...items, newItem]);
    }

    function handleRemoveItem(itemId) {
        setItems(items.filter((item) => item.id !== itemId));
    }

    function calculateCompletionPercentage(items) {
        const totalTasks = items.length;
        if (totalTasks === 0) {
            return 0;
        }
        const completedTasks = items.filter((item) => item.complete).length;
        const percentage = (completedTasks / totalTasks) * 100;
        return percentage;
    }

    const completeTask = (itemId) => {
        const updatedItems = items.map((item) =>
            item.id === itemId ? { ...item, complete: !item.complete } : item
        );
        // Update the items state with the updated completion status
        setItems(updatedItems);
    };

    useEffect(() => {
        const percentage = calculateCompletionPercentage(items);
        setCompletionPercentage(+percentage.toFixed(2));
    }, [items]); // Recalculate percentage whenever items change

    return (
        <LinearGradient
      colors={["#06466B", "#010114"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
        <ScrollView>
            <View>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "600",
                        marginVertical: 10,
                    }}
                >
                    Study Tasks
                </Text>
                <TaskForm addItem={handleAddItem} />
                <TaskList
                    items={items}
                    removeItem={handleRemoveItem}
                    completeTask={completeTask}
                />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 20,
                    }}
                >
                    {completionPercentage}%
                </Text>
                <Progress.Bar
                    progress={completionPercentage / 100}
                    width={350}
                    style={{ alignSelf: "center" }}
                />
            </View>
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
});

export default HomeScreen;
