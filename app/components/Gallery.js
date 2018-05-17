import React from 'react';
import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {Actions} from 'react-native-router-flux';

  export default class App extends Component {
    render() {
        return (
          <ScrollView style={styles.Container}>
          <Text>Gallery</Text>
          
          <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
            <Image
             style={{
                flex: 1,
                alignSelf: 'stretch',
                width: '100%',
                height: 200
                         }}
             source={require("../images/bio.png")} resizeMode="stretch"
             />
             <Text style={{color: 'white'}}>Biology</Text>
          
            </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
           <Image
             style={{
                flex: 1,
                alignSelf: 'stretch',
                width: '100%',
                height: 100
                         }}
             source={require("../images/dinosaurs.jpg")} resizeMode="stretch"
             />
             <Text style={{color: 'white'}}>Dinosaurs</Text>
          
            </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
            <Image
             style={{
                flex: 1,
                alignSelf: 'stretch',
                width: '100%',
                height: 100
                         }}
             source={require("../images/bio.png")} resizeMode="stretch"
             />
             <Text style={{color: 'white'}}>Biology</Text>
          
            </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
           <Image
             style={{
                flex: 1,
                alignSelf: 'stretch',
                width: '100%',
                height: 100
                         }}
             source={require("../images/dinosaurs.jpg")} resizeMode="stretch"
             />
             <Text style={{color: 'white'}}>Dinosaurs</Text>
          
            </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
           <Image
             style={{
                flex: 1,
                alignSelf: 'stretch',
                width: '100%',
                height: 100
                         }}
             source={require("../images/bio.png")} resizeMode="stretch"
             />
             <Text style={{color: 'white'}}>Biology</Text>
          
            </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
           <Image
             style={{
                flex: 1,
                alignSelf: 'stretch',
                width: '100%',
                height: 100
                         }}
             source={require("../images/dinosaurs.jpg")} resizeMode="stretch"
             />
             <Text style={{color: 'white'}}>Dinosaurs</Text>
          
            </TouchableOpacity>
          </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#859a9b',
      padding: 10
    },
  });


  