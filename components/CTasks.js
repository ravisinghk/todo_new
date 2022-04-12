import react from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../config/colors";
import Task from "./Task";
import CTask from "./CTask";

const CTasks = (props) => {
  const deleteTask = (index) => {
    let itemsCopy = [...props.completeItems];
    itemsCopy.splice(index, 1);
    props.setCompleteItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View style={styles.textWrapper}>
          {props.completeItems.length === 0 ? (
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("../assets/ctasks.png")}
              />
              <Text style={styles.imageText}>No Completed Tasks</Text>
            </View>
          ) : (
            <View style={styles.items}>
              {/* All the tasks will come here */}
              {props.completeItems.map((item, index) => {
                return (
                  <TouchableOpacity>
                    <CTask
                      key={index}
                      actionDelete={() => deleteTask(index)}
                      text={item}
                    />
                    {/* <Text key={index}>{item}</Text> */}
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
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
  imageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 500,
  },
  image: {
    height: 300,
    width: 300,
    marginTop: 50,
  },
  imageText: {
    fontWeight: "bold",
    opacity: 0.3,
    fontSize: 17,
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.back,
//   },
//   textWrapper: {
//     paddingTop: 70,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   items: {
//     marginTop: 30,
//   },

//   writeTaskWrapper: {
//     position: "absolute",
//     bottom: 60,
//     width: "100%",
//     flexDirection: "row",
//     // justifyContent: 'space-around',
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   input: {
//     paddingVertical: 12,
//     paddingHorizontal: 12,
//     backgroundColor: "#FFF",
//     borderRadius: 60,
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//     width: 250,

//     marginRight: 7,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#FFF",
//     borderRadius: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#C0C0C0",
//     borderWidth: 1,

//     marginLeft: 7,
//   },
//   addText: {},
// });

export default CTasks;
