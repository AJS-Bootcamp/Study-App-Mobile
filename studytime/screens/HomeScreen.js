import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TaskForm from "../components/tasklist/TaskForm";
import TaskList from "../components/tasklist/TaskList";
import { View, Text, ScrollView } from "react-native";
import * as Progress from "react-native-progress";

const HomeScreen = () => {
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
        </ScrollView>
    );
};

export default HomeScreen;
