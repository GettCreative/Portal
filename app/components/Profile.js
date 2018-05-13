import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal
} from 'react-native'

import ImageElement from './ImageElement.js';


export default class Profile extends React.Component {

  state = {
    modalVisible: false,
    modalImage: require('../images/dinosaurs.jpg'),

    images: [
      require('../images/dinosaurs.jpg'),
      require('../images/dinosaurs.jpg'),
      require('../images/dinosaurs.jpg'),
      require('../images/dinosaurs.jpg'),
      require('../images/dinosaurs.jpg'),
      require('../images/dinosaurs.jpg'),

    ]
  }

  setModalVisible(visible, imageKey){
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible })
  }

  getImage(){
    return this.state.modalImage;
  }

  render(){

    let images = this.state.images.map((val,key) => {
      return <TouchableWithoutFeedback key = {key}
      onPress = {() => {  this.setModalVisible(true, key) }}>
      <View style = {styles.imagewrap}>
      <ImageElement imgsource = {val}></ImageElement>
      </View>
      </TouchableWithoutFeedback>
    })

    return (

      <View style = {styles.container}>
      <Modal style = {styles.modal}
      animationType = {'fade'}
      transparent = {true}
      visible={this.state.modalVisible}
      onRequestClose = {() => {}}>

      <View style = {styles.modal}>
        <Text style = {styles.text}
        onPress={() => {this.setModalVisible(false)}}>Close
        </Text>
        <ImageElement imgsource = {this.state.modalImage}></ImageElement>
      </View>

      </Modal>
      {images}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20

  },

  imagewrap: {
    margin: 2,
    height: 200,
    width: 150,
    backgroundColor: 'black',
  },

  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  text : {
    color: '#fff'
  }



})
