import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

//Imports
import Regform from './app/components/Regform.js'
import Login from './app/components/Login'
import Logo from './app/components/Logo.js'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Logo style = {styles.logo}/>

        <StatusBar
        backgroundColor = '#36485f'
        barStyle = 'light-content'/>
        <Regform />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingLeft: 60,
    paddingRight: 60,


  },

  logo:{
    justifyContent: 'center',
    paddingBottom: 100,
    alignItems: 'center',
  }
});
