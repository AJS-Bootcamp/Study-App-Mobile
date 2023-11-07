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
                    textDecorationLine: item.complete ? "line-through" : "none",
                }}
            >
                {item.task}
            </Text>
            <Button
                title="Complete Task"
                active={item.complete}
                onPress={() => completeTask(item.id)}
                color="#139A43"
            />
            <Button
                title="Remove Task"
                onPress={() => removeItem(item.id)}
                color="#d11a2a"
            />
        </View>
    );
}

export default TaskList;
