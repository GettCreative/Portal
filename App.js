import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

//Imports
import Routes from './app/Routes.js'
import Profile from './app/components/Profile.js'
import Gallery from './app/components/Gallery.js'




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Gallery />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 0,
    paddingRight: 0,


  }
});
