import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Alert,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import Header from './components/header';
import AddTodo from './components/addTodo';
export default function App() {

  const [todo,setTodo] =useState([
    {text:'study reactNative', key:'1'},
    {text:'study reactjs', key:'2'},
    {text:'do a project', key:'3'},
    {text:'study resume in and out', key:'4'},
  ]);

  const submitHandler = (text) => {
    if(text.length >3){
      setTodo((alltodo) =>{
          return[
            {text:text, key:Math.random().toString()},
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
    <View style={styles.container}>
      <Header />
        <View style ={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.inContent}>
            
              <FlatList 
                data={todo}
                renderItem = {({item})=>(
                  <TouchableOpacity onPress={()=>clickDel(item.key)}>
                    <Text style={styles.todos}>{item.text}</Text>
                  </TouchableOpacity>
                )
              }
              />
              
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  inContent:{
    marginTop:30,
  },
  todos:{
    marginTop:20,
    padding:20,
    backgroundColor:"lavender",
    borderColor:"black",
    borderWidth:2,
    borderStyle:'dashed',
    borderRadius:6,
  }
});
