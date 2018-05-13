import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput

} from 'react-native';


import Logo from '../components/Logo.js'
// import Form from '../components/Form.js'
import {Actions} from 'react-native-router-flux';



export default class Signup extends React.Component {


  goBack(){
    Actions.login() //pop to go back to the previous page
  }

  home(){
    Actions.profile()
  }

  render() {
    return (


      <View style = {styles.container}>
      <Logo />

      <TextInput
      style = {styles.inputBox}
      underlineColorAndroid = 'rgba(0,0,0,0)'
      placeholder = 'Name'
      placeholderTextColor = '#ffffff'
      selectionColor = '#fff'
      onSubmitEditing={()=> this.password.focus()}
      />

      <TextInput
      style = {styles.inputBox}
      underlineColorAndroid = 'rgba(0,0,0,0)'
      placeholder = 'Email'
      placeholderTextColor = '#ffffff'
      selectionColor = '#fff'
      onSubmitEditing={()=> this.password.focus()}
      />

      <TextInput
      style = {styles.inputBox}
      underlineColorAndroid = 'rgba(0,0,0,0)'
      placeholder = 'Choose a User Name'
      placeholderTextColor = '#ffffff'
      selectionColor = '#fff'
      onSubmitEditing={()=> this.password.focus()}
      />

      <TextInput
      style = {styles.inputBox}
      underlineColorAndroid = 'rgba(0,0,0,0)'
      placeholder = 'Password'
      secureTextEntry = {true}
      placeholderTextColor = '#ffffff'
      ref = {(input) => this.password = input}
      />

      <TouchableOpacity style={styles.button}>

      <TouchableOpacity onPress={this.profile}><Text style = {styles.buttonText}>Sign Up</Text></TouchableOpacity>

      </TouchableOpacity>
      <View style = {styles.signupTextContent}>
        <Text style={styles.signupTextColor}> Already have an account ? </Text>
        <TouchableOpacity onPress={this.goBack}><Text style = {styles.signupButton}>Sign In</Text></TouchableOpacity>
      </View>

      </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },

  signupTextContent: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupTextColor : {
    color: 'white',
    fontSize: 15
  },
  signupButton: {
    color: 'red',
    fontSize: 16,
    fontWeight: '500'

  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 35,
    color: '#ffffff',
    marginVertical: 15
  },

  button: {
    width: 300,
    backgroundColor: '#1E88E5',
    marginVertical: 15,
    paddingVertical: 12

  },

  buttonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  }



});
