import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends React.Component {
  render (){
    return(
      <View style = {styles.container} >
        <Image
          style={{width: 40, height: 80}}
          source = {require('../images/Origin_Portal.gif')} />

          <Text style = {styles.logoText}>PORTAL</Text>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container:{
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    logoText:{
      marginVertical: 15,
      fontSize: 32,
      color: 'white',
    }
  })
