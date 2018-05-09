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
      <View>
<Image
style={{width: 40, height: 80}}
source = {require('../images/Logo.gif')} />
      </View>
    )
  }
}
