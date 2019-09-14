/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { robotoWeights } from 'react-native-typography'


export default class LoginForm extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View style={styles.container}>
      
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <TextInput
      
      
      placeholder = "Masukan NIS Siswa"
      placeholderTextColor = '#2c3e50'
      style={styles.input}
      
      />    
        <TextInput style={styles.input}
      underlineColorAndroid = 'rgba(0, 0, 0, 0)'
      placeholder = "Password"
      placeholderTextColor = '#2c3e50'
      secureTextEntry
     
      />    
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Guru')}
        >
          <Text style={[ robotoWeights.thin, styles.buttonText]}>Ayo Masuk </Text>
        </TouchableOpacity>
         </KeyboardAvoidingView>
     </View>
    );
  }
} 


const styles = StyleSheet.create({
  
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15,
    width:400

  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  logo:{
    
   
   
    fontSize:40,
    color:'#fff',
    fontWeight:'300',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  
input:{
  borderRadius:10,
  height:50,
  width:370,
  backgroundColor: '#ecf0f1',
  marginBottom:20,
  color: '#2c3e50',
  textAlign: 'center',
  paddingHorizontal:50,
  shadowColor: 'rgba(0, 0, 0, 0.1)',
shadowOpacity: 0.7,
elevation: 10,
shadowRadius: 15 ,
shadowOffset : { width: 10, height: 13},
},
  container: {
    backgroundColor:'#e35c5c',
      justifyContent:"center",
      alignItems:"center",
     
      flex:1,
  },
  
  button: {
    borderRadius:10,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
shadowOpacity: 0.7,
elevation: 10,
shadowRadius: 15 ,
shadowOffset : { width: 10, height: 13},
    padding: 14,
    margin:10,
    width:370
  },
  
  buttonText:{
   
    fontSize:20,
    color:'#e35c5c',
  fontWeight: '500'
  }
  
  
 
});
