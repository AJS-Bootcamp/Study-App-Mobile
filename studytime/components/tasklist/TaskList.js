import React from "react";
import { Button, Text, View } from "react-native";

const TaskList = ({ items, removeItem, completeTask }) => {
    return (
        <View>
            {items.map((item) => (
                <Item
                    item={item}
                    key={item.id}
                    removeItem={removeItem}
                    completeTask={completeTask}
                />
            ))}
        </View>
    );
};

function Item({ item, removeItem, completeTask }) {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                marginVertical: 5,
                marginHorizontal: 15,
            }}
        >
            <Text
                style={{
                    flex: 1,
                    alignSelf: "center",
                    textAlign: "center",
                    fontSize: 20,
                    color: "white",
                    textDecorationLine: item.complete ? "line-through" : "none",
                }}
            >
                {item.task}
            </Text>
            <Button
                title="Completed"
                active={item.complete}
                onPress={() => completeTask(item.id)}
                color="#0ABAB5"
            />
            <Button
                title="Remove"
                onPress={() => removeItem(item.id)}
                color="#DD1C1A"
            />
        </View>
    );
}

export default TaskList;
