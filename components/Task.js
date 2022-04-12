import react from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const Task = (props) => {
  // console.log("key in Task: ", props.key);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemsRight}>
        {/* <View style={styles.circularEdit} >
                    <Entypo name="edit" size={24} color="#55BCF6" />
                </View>
                <View style={styles.circularDelete} >
                    <AntDesign name="delete" size={24} color="#55BCF6" />
                </View> */}

        <Entypo
          onPress={() => props.actionEditToTask(props.key)}
          // onPress={() => console.log(props.key)}
          style={styles.circularEdit}
          name="edit"
          size={22}
          color="#55BCF6"
        />
        <AntDesign
          onPress={() => props.actionDelete(props.key)}
          style={styles.circularDelete}
          name="delete"
          size={22}
          color="#CB152B"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.taskBack,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderColor: "grey",
    borderWidth: 0.3,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemsRight: {
    flexDirection: "row",
    width: "25%",
    justifyContent: "space-between",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: colors.square,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circularEdit: {
    width: 22,
    height: 22,
    // borderColor: colors.square,
    // borderWidth: 2,
    // borderRadius: 8,
    // marginRight: 5
  },
  circularDelete: {
    width: 22,
    height: 22,
    // borderColor: colors.square,
    // borderWidth: 2,
    // borderRadius: 8,
    // marginLeft: 5
  },
});

export default Task;
