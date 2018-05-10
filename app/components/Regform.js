import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView

} from 'react-native';


export default class Regform extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
      style = {styles.regform}
      behavioud = 'padding'
      >


        <Text style={styles.header}>Registration</Text>

        <TextInput style = {styles.textinput} placeholder = 'Name'
        underlineColorAndroid = {'transparent'} />

        <TextInput style = {styles.textinput} placeholder = 'Email Address'
        underlineColorAndroid = {'transparent'} />

        <TextInput style = {styles.textinput} placeholder = 'Password'
        secureTextEntry = {true}
        underlineColorAndroid = {'transparent'} />

        <TextInput style = {styles.textinput} placeholder = 'Confirm Password'
        secureTextEntry = {true}
        underlineColorAndroid = {'transparent'} />

        <TouchableOpacity style = {styles.button} >
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>

    );
  }

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
  },
  header: {
    alignSelf: 'center',
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },

  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },

  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },

  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  }

});
