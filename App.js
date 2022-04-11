import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

import colors from "./config/colors";
import PTasks from "./components/PTasks";
import CTasks from "./components/CTasks";

export default function App() {
  console.log("App Exec");

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [completeItems, setCompleteItems] = useState([]);
  const [section, setSection] = useState(1);

  const [edit, setEdit] = useState(false);

  const handleAddTask = () => {
    // console.log(task);

    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    // setEdit(false);
  };

  const handleToggle = (n) => {
    if (n === 1) {
      setSection(1);
    } else {
      setSection(0);
    }
  };

  const handleEdit = (index) => {
    setEdit(true);
    // Keyboard.dismiss();
    let itemsCopy = [...taskItems];
    itemsCopy[index] = task;
    console.log(itemsCopy);
    setTaskItems(itemsCopy);
    setTask(null);
    setEdit(false);
  };

  // const completeTask = (index) => {
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(index, 1);
  //   setTaskItems(itemsCopy);
  //   setCompleteItems([...completeItems, taskItems[index]]);
  // };

  console.log(taskItems);

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}

      <View style={styles.headSection}>
        <TouchableOpacity
          style={
            section == 1 ? styles.pendingTasksHead : styles.pendingTasksHeadBlur
          }
          onPress={() => {
            handleToggle(1);
          }}
        >
          <Text
            style={
              section == 1
                ? styles.pendingTasksTitle
                : styles.pendingTasksTitleBlur
            }
          >
            Today's Tasks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            section == 0
              ? styles.completedTasksHead
              : styles.completedTasksHeadBlur
          }
          onPress={() => {
            handleToggle(0);
          }}
        >
          <Text
            style={
              section == 0
                ? styles.completedTasksTitle
                : styles.completedTasksTitleBlur
            }
          >
            Completed Tasks
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainList}>
        {section == 1 ? (
          <PTasks
            // actionDelete={() => {
            //   deleteTask();
            // }}
            taskItems={taskItems}
            setTaskItems={setTaskItems}
            completeItems={completeItems}
            setCompleteItems={setCompleteItems}
            edit={edit}
            setEdit={setEdit}
            actionEdit={() => {
              handleEdit();
            }}
          />
        ) : (
          <CTasks
            // action={() => {
            //   deleteTask();
            // }}
            taskItems={taskItems}
            setTaskItems={setTaskItems}
            completeItems={completeItems}
            setCompleteItems={setCompleteItems}
          />
        )}
        {/* <PTasks action={() => {deleteTask()}} taskItems={taskItems} setTaskItems={setTaskItems}/> */}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          value={task}
          onChangeText={(text) => setTask(text)}
          defaultValue={edit ? "To edit" : ""}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  headSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // borderColor: 'blue',
    // borderWidth: 5,
    maxHeight: 125,
  },
  pendingTasksHead: {
    marginTop: 60,
    paddingBottom: 10,
    borderBottomColor: colors.square,
    borderBottomWidth: 2,
    maxHeight: 40,
  },
  pendingTasksTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pendingTasksHeadBlur: {
    marginTop: 60,
    paddingBottom: 10,
    borderBottomColor: colors.square,
    maxHeight: 40,
  },
  pendingTasksTitleBlur: {
    fontSize: 18,
    fontWeight: "bold",
    opacity: 0.5,
  },
  completedTasksHead: {
    marginTop: 60,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.square,
    maxHeight: 40,
  },
  completedTasksTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  completedTasksHeadBlur: {
    marginTop: 60,
    paddingBottom: 10,
    borderBottomColor: colors.square,
    maxHeight: 40,
  },
  completedTasksTitleBlur: {
    fontSize: 18,
    fontWeight: "bold",
    opacity: 0.5,
  },
  mainList: {
    flex: 1,
    height: "75%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.back,
    // borderColor: 'blue',
    // borderWidth: 4
  },
  textWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
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
