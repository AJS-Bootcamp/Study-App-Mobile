import React, { useState } from "react";
import { Text, TouchableOpacity, TextInput, View, Button } from "react-native";

const initialValue = "";

const TaskForm = ({ addItem }) => {
    const [task, setTask] = useState(initialValue);

    function handleSubmit() {
        addItem(task);
        setTask(initialValue);
    }

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: 20,
                borderStyle: "solid",
                borderBottomColor: "black",
            }}
        >
            <TextInput
                style={{ fontSize: 20, marginLeft: 20, color: "white" }}
                editable
                placeholder="Enter Study Task Here..."
                placeholderTextColor="white"
                value={task}
                onChangeText={(task) => setTask(task)}
            />
            {/* <TouchableOpacity
                onPress={() => handleSubmit()}
                title="Add Item"
                style={{ backgroundColor: "rgba(63,195,128,1)" }}
                accessibilityLabel="Tap me to add an item to your list"
            >
                <Text>Add Item</Text>
            </TouchableOpacity> */}
            <Button
                onPress={() => handleSubmit()}
                title="Add Item"
                color="#0ABAB5"
                accessibilityLabel="Tap me to add an item to your list"
                style={{}}
            />
        </View>
    );
};

export default TaskForm;
