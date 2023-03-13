import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default function Header(){
    return(
        <View style={styles.header}>
            <Text style = {styles.headerTitle}>My Todos</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    header:{
        //height:80,
        paddingTop:60,
        paddingBottom:40,
        backgroundColor:"#6e38b5",
    },
    headerTitle:{
        textAlign:"center",
        marginLeft:5,
        fontWeight:"bold",
        fontSize:30,
    }
});