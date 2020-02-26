import React from 'react';
import {StyleSheet,Text,View,FlatList} from 'react-native';
export default function Sandbox(){
    return(
    <View style ={styles.container} >
      <Text style ={styles.box1}>One</Text> 
      <Text style ={styles.box2}>two</Text>
      <Text style ={styles.box3}>three</Text>
      <Text style ={styles.box4}>four</Text>
    </View>
        
    )
} 
const styles = StyleSheet.create({
    container:{
       // flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        justifyContent:'space-around',
       // alignItems:'center',
       alignItems:'flex-end',
        paddingTop:40,
        backgroundColor:'#ddd',

    },
    box1:{
        backgroundColor:'violet',
        padding:10,
    },
    box2:{
        backgroundColor:'indigo',
        padding:20,
    },
    box3:{
        backgroundColor:'blue',
        padding:30,
    },
    box4:{
        backgroundColor:'green',
        padding:40,
    },

});