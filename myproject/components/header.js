import React from 'react';
import {StyleSheet,Text,View,FlatList} from 'react-native';

export default function Header(){
    return(
        <View style ={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:40,
        backgroundColor:'green',
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})