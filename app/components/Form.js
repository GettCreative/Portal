import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class SignUp extends React.Component {
  constructor(){
    super()
    this.state = {
      email:'',
      password:''
    }
  }
  login(){
    var that = this
    if(this.state.email.length && this.state.password.length !==0){
    fetch('http://192.168.1.115:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password:that.state.password,
        email:that.state.email
      }),
    }).then((responsedata) => {
        if(responsedata.status === 200){

          alert('Signedin Successfully')
          Actions.gal()
        }else{
          alert("something error")
        }
    })
  }
  else{alert("plz fill all info")}
}


  render (){
    return(
      <View style = {styles.container} >
        <TextInput
          onChangeText={(email) => this.setState({email})}
          style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          placeholder = 'Email'
          placeholderTextColor = '#ffffff'
          selectionColor = '#fff'
          keyboardType = "email-address" // to show @ in keyboard for easier UX
          onSubmitEditing={()=> this.password.focus()}
        />

        <TextInput
          onChangeText={(password) => this.setState({password})}
          style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          placeholder = 'Password'
          secureTextEntry = {true}
          placeholderTextColor = '#ffffff'
          ref = {(input) => this.password = input}
        />

        <TouchableOpacity onPress={this.login.bind(this)} style={styles.button}>

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
