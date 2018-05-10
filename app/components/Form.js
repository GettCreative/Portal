import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Form extends React.Component {




  render (){
    return(
      <View style = {styles.container} >
        <TextInput
        style = {styles.inputBox}
        underlineColorAndroid = 'rgba(0,0,0,0)'
        placeholder = 'Email'
        placeholderTextColor = '#ffffff'
        selectionColor = '#fff'
        keyboardType = "email-address" // to show @ in keyboard for easier UX
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

        <Text style = {styles.buttonText}>{this.props.type}</Text>

        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
})
