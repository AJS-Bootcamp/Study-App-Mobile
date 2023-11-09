import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";

const initialValue = "";

const TaskForm = ({ addItem }) => {
    const [task, setTask] = useState(initialValue);

    function handleSubmit() {
        addItem(task);
        setTask(initialValue);
    }

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.textInput}
                editable
                placeholder="Enter Study Task Here..."
                placeholderTextColor="white"
                value={task}
                onChangeText={(task) => setTask(task)}
            />
            <Button
                onPress={() => handleSubmit()}
                title="Add Item"
                accessibilityLabel="Tap me to add an item to your list"
                buttonStyle={{ backgroundColor: "#09B4B7" }}
                icon={
                    <Icon
                        name="plus"
                        type="font-awesome"
                        color="#FFF"
                        iconStyle={{ marginRight: 10 }}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    textInput: {
        fontSize: 20,
        marginLeft: 15,
        marginRight: 5,
        color: "white",
    },
});

export default TaskForm;
