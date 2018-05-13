import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './components/Login.js'
import Signup from './components/Signup.js'


export default class Routes extends React.Component {
  render(){
    return(
    <Router>
    <Stack key = "root" hideNavBar = {true}>
    <Scene key = "login" component = {Login} title="Login" />
    <Scene key = "signup" component = {Signup} title="Signup" initial = {true}/>

    </Stack>
    </Router>
    )
  }
}
