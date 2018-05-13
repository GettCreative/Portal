import React from 'react'


import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

export default class ImageElement extends React.Component {

  render(){
    return (
      <Image
      source = {this.props.imgsource}
      style={styles.image}>
      </Image>
    )
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: (Dimensions.get('window').width/2) - 4,
    alignSelf: 'stretch'
  }
})
