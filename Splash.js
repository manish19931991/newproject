import { View, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import {  useEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

const Splash = () => {
   
    const navigation = useNavigation()

  
  useEffect(()=> {
   
setTimeout(()=>{
 
    const unsubscribe = auth().onAuthStateChanged((user) => {
    const routeName = user !== null ? "Home" : "Login";

    //   setisUserLogin(true);
        // navigation.navigate(routename);
        unsubscribe(); 
        navigation.dispatch(StackActions.replace(routeName)); 
    });
   
  
},2000);
    return()=>{

    }
    },[]);
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, color:"red"}}>Manish</Text>
    </View>
  )
}

export default Splash