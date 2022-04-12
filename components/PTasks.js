import react from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";
import colors from "../config/colors";
import Task from "./Task";

const PTasks = (props) => {
  const deleteTask = (index) => {
    let itemsCopy = [...props.taskItems];
    itemsCopy.splice(index, 1);
    props.setTaskItems(itemsCopy);
  };

  const completeTask = (index) => {
    props.setCompleteItems([...props.completeItems, props.taskItems[index]]);
    let itemsCopy = [...props.taskItems];
    itemsCopy.splice(index, 1);
    props.setTaskItems(itemsCopy);
  };

  const handleEdit = (index) => {
    props.setEdit(true);
    // Keyboard.dismiss();
    let itemsCopy = [...props.taskItems];
    const valueToEdit = itemsCopy[index];
    props.setEditValue(valueToEdit);
    console.log("Value to Edit: ", valueToEdit);
    console.log("editValue: ", props.editValue);
    itemsCopy.splice(index, 1);
    props.setTaskItems(itemsCopy);
    // props.setEdit(false);
    // props.setEditValue("");
  };

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View style={styles.textWrapper}>
          <View style={styles.items}>
            {/* All the tasks will come here */}
            {props.taskItems.map((item, index) => {
              console.log("index: ", index);
              const num = 12;
              return (
                <TouchableOpacity
                  onPress={() => {
                    completeTask(index);
                  }}
                >
                  <Task
                    key={index}
                    // actionEditToTask={props.actionEdit(index)}
                    actionEditToTask={() => handleEdit(index)}
                    actionDelete={() => deleteTask(index)}
                    actionComplete={() => completeTask(index)}
                    text={item}
                  />
                  {/* <Text key={index}>{item}</Text> */}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.back,
    width: "100%",
    // borderColor: 'red',
    // borderWidth: 1,
    justifyContent: "flex-start",
  },
  textWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  items: {
    marginTop: 0,
  },

  writeTaskWrapper: {
    width: "100%",
    flexDirection: "row",
    // justifyContent: 'space-around',
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,

    marginRight: 7,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,

    marginLeft: 7,
  },
  addText: {},
});

export default PTasks;
