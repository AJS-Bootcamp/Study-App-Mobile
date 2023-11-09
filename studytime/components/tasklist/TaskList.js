import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";

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
    <View style={styles.itemContainer}>
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
        icon={
          <Icon
            name="check-circle"
            type="font-awesome"
            color="#FFF"
            iconStyle={{ marginRight: 10 }}
          />
        }
        buttonStyle={{ backgroundColor: "#09B4B7" }}
      />
      <Button
        onPress={() => removeItem(item.id)}
        icon={
          <Icon
            name="trash"
            type="font-awesome"
            color="#FFF"
            iconStyle={{ paddingHorizontal: 15 }}
          />
        }
        buttonStyle={{ backgroundColor: "#010114", marginLeft: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default TaskList;
