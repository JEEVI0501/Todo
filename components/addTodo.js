import { StyleSheet, TextInput, View, Button } from 'react-native';
import React,{useState} from 'react';



export default function AddTodo({submitHandler}){

    const [text,setText] = useState('');
    // const changeText = (val)=>{
    //     setText(val);
    // }
    const handleClick=(text)=>{
        setText('');
    }

    return(
        <View style ={styles.todoadd}>
            <TextInput style = {styles.newTodo}
                multiline
                placeholder='enter ur todos' 
                // onChangeText={changeText}
                onChangeText={(val) => setText(val)}
                />
            <View style = {styles.button}>
                <Button color="#6e38b5" onPress ={()=>{submitHandler(text);handleClick(text);}} title = 'add todo' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoadd:{
       
        marginTop:30,
    },
    newTodo:{
        
        marginTop:20,
        padding:20,
        borderColor:"#6e38b5",
        borderWidth:2,
        borderStyle:'dashed',
        borderRadius:6,
  },
  button:{
    marginTop:20,
    marginHorizontal:150,
    borderRadius:6,
  },
})