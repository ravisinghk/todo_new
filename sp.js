import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, ScrollView, Keyboard } from 'react-native';
import Task from './components/Task';
import PTasks from './components/PTasks';
import CTasks from './components/CTasks';

import colors from './config/colors';

export default function App() {
  console.log("App Exec")

  const [task, setTask] = useState();
  const [taskItems, setTaskItems]  = useState([]);
  
  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }


  const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);

  }

  return (

      <View style={styles.items}>

        {/* <View style={styles.headSection} >
          <TouchableOpacity style={styles.pendingTasksHead} >
              <Text style={styles.pendingTasksTitle} >Today's Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.completedTasksHead} >
              <Text style={styles.completedTasksTitle} >Completed Tasks</Text>
          </TouchableOpacity>
        </View> */}

          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height" }
            style = {styles.writeTaskWrapper} 
            >
            <TextInput style ={styles.input} placeholder={'Write a Task'} value={task} onChangeText={(text) => setTask(text)} />

            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper} >
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>

          </KeyboardAvoidingView>

      </View>


      

      
  );
}

const styles = StyleSheet.create({
  headSection: {
    // flex: 1,
    // flexDirection: 'row',
    // height: '20%'
  },
  pendingTasksHead:{

  },
  pendingTasksHead:{

  },
  pendingTasksTitle:{

  },
  completedTasksTitle:{

  },
  container: {
    flex: 1,
    backgroundColor: colors.back,
  },
  textWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  items: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'black'
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,

    marginRight: 7
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

    marginLeft: 7
  },
  addText: {},
});
