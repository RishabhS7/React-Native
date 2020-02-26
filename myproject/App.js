// import React,{useState} from 'react';
// import { StyleSheet, Text, View , Button,TextInput,ScrollView,FlatList,TouchableOpacity} from 'react-native';
// import { getCurrentFrame } from 'expo/build/AR';

// export default function App() {
//   // const[name,setName]= useState('Rishabh');
//   //  const[age,setAge] = useState('30')
//   // const clickHandler = ()=>{
//   //   setName('Singh');
//   //   setPerson({name:'luigi',age:46})
//   // }

//   const[people,setpeople]= useState([
//     {name:'shaun',id:'1'},
//     {name:'Rishabh',id:'2'},
//     {name:'Ravi',id:'3'},
//     {name:'Raj',id:'4'},
//     {name:'bond',id:'5'},
//     {name:'name',id:'6'},
//     {name:'Singh',id:'7'}
//   ]
//   );
//   const pressHandle =(id)=>{
//     console.log(id);
//     setpeople((prevPeople)=>{
//        return prevPeople.filter(person=>person.id!= id)
//     })
//   }


//   return (
//     <View style={styles.container}>
//     {/* <Text>Enter Name</Text>
//     <TextInput 
//     multiline
//     style={styles.input}
//     placeholder ='e.g Rishabh Singh'
//     onChangeText={(val)=> setName(val)}/>
//     <View style={styles.bttonContainer}>
//     <Button title = 'update' onPress = {clickHandler}/>
//     </View>

//     <Text> Enter age : </Text>
//     <TextInput 
//     multiline
//     keyboardType='numeric'
//     style={styles.input}
//     placeholder ='e.g 22'
//     onChangeText={(val)=> setAge(val)}/>
//     <View style={styles.bttonContainer}></View>
//     <Text>name:{name} age:{age}</Text> */}
     
//      {/* <ScrollView>

//     {people.map((item)=>(
//           <View key = {item.key}>
//             <Text style={styles.item}>{item.name}</Text>
//             </View>
//       )
//     )}
//     </ScrollView> */}


//    <FlatList  
//    numColumns={2}
//      keyExtractor={(item)=>item.id}       //automatically have key...dont need to specifically output the key
//      data={people}
//      renderItem={({item})=>(
//        <TouchableOpacity onPress={()=> pressHandle(item.id)}>
//         <Text style={styles.item}>{item.name}</Text>
//         </TouchableOpacity>
//      )}
//      />



//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop:40,
//     paddingHorizontal:20,
    
//     justifyContent: 'center',
//     padding :40,
//   },
//   item:{
//     marginTop:20,
//     padding:30,
//     backgroundColor:'pink',
//     fontSize:24,
//     marginHorizontal:10,
//   }
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//todo list

import React,{useState} from 'react';
import {StyleSheet,Text,View,FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';


export default function App(){

  const[todos,setTodos]= useState([
        {text:'Buy coffee',key:'1'},
        {text:'Buy cholate',key:'2'},
        {text:'buy nothing',key:'3'},
        {text:'bbuy something',key:'4'},
        {text:'bond',key:'5'},
        {text:'name',key:'6'},
  ]);

  const pressHandler =(key)=>{            //we recieve the key here
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key);
    });
  }

  const submitHandler = (text) => {

    if(text.length>3){

    
    setTodos((prevTodos)=>{
      return[
        {   text:text,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }else{
    Alert.alert('oops','Todos must be over three characters long',[
      {text:'Understood',onPress:()=>console.log('alert closed')}
    ])
  }
} 
  return(
   // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
    <View style ={styles.container}>
    {/***Header */}
    <Header/>
    <View style ={styles.content}>
    <AddTodo submitHandler={submitHandler} />
    {/*to form*/}
    <View style={styles.list}>
       <FlatList
       data ={todos}
       renderItem={({item})=>(
       
         <TodoItem item ={item} pressHandler={pressHandler}/> 
       )}
       />
    </View>
    
    </View>
    </View>
    </TouchableWithoutFeedback>
  )
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
    },
    content:{
     
      padding:40,
      flex:1,
   },
    list:{
      flex:1,
      marginTop:10,
      

    }
  })