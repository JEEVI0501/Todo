import { StyleSheet, Text, View,FlatList,Alert,TouchableOpacity,Keyboard,TouchableWithoutFeedback } from 'react-native';
import React,{useState} from 'react';
import Header from './components/header';
import AddTodo from './components/addTodo';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  const [todo,setTodo] =useState([
    {text:'study reactNative', key:'1'},
    {text:'study reactjs', key:'2'},
    {text:'do a project', key:'3'},
    {text:'study resume in and out', key:'4'},
  ]);

  const submitHandler = (text) => {
    if(text.length >3){
      let val = Math.random()
      setTodo((alltodo) =>{
          return[
            {text:text, key:val.toString()},
            ...alltodo
          ]
      })
    }
    else{
      Alert.alert('Oops!','ur todo is less than 4 characters',[
        {text:'got it',onPress:()=>{console.log('Alert closed')}}
      ]);
    }
  }

  const clickDel = (key)=>{
    setTodo((it)=>{
      return it.filter(todo=>todo.key!=key);
    }
    )
  }
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
      console.log('keyboard')
    }}>
    <View style={styles.container}>
      <Header />
        <View style ={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.inContent}>
            
              <FlatList 
                data={todo}
                renderItem = {({item})=>(
                  <TouchableOpacity >
                    <View style={styles.todos}>
                      
                    <Text>{item.text}</Text>
                    <MaterialIcons name="delete" size={24} color="#6e38b5" onPress={()=>clickDel(item.key)}/>
                    </View>
                    {/* <Text style={styles.todos}><MaterialIcons name="delete" size={24} color="#6e38b5" onPress={()=>clickDel(item.key)}/>{item.text}</Text> */}
                  </TouchableOpacity>
                  
                )
              }
              />
              
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
     flex:1
  },
  inContent:{
     flex:1,
    marginTop:30,
     
  },
  todos:{
    flexDirection:'row',
    marginTop:20,
    padding:20,
    backgroundColor:"lavender",
    borderColor:"black",
    borderWidth:2,
    borderStyle:'dashed',
    borderRadius:6,
    justifyContent:'space-between',
    
  },
  del:{
    
    alignContent:'center',
    justifyContent:'space-between',
  }
});
