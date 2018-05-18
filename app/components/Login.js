import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


import Logo from '../components/Logo.js'
import Form from '../components/Form.js'
import {Actions} from 'react-native-router-flux';



export default class Login extends React.Component {


  signup(){
    Actions.signup()
  }
  render() {
    return (


      <View style = {styles.container}>
        <Logo />
        <Form type="Login"/>
        <View style = {styles.signupTextContent}>
          <Text style={styles.signupTextColor}> Dont Have an Account Yet ? </Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style = {styles.signupButton}>Sign Up</Text>
          </TouchableOpacity>
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

  }



});
