import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoItem({item,pressHandler}){            //passing the key
    return(
        <TouchableOpacity onPress = {()=>pressHandler(item.key)} >  
        <View style ={styles.item}>
        <MaterialIcons style={styles.icons} name ='delete' size ={18} color='#333'/>
        <Text style ={styles.itemtext}>{item.text}</Text>
        </View>
       
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:15,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dotted',
        borderRadius:10,
        flexDirection:'row'
    },
    itemtext:{
        marginLeft:10,
    },
    
})