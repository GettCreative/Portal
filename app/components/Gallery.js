
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

import {
  Card,
  ListItem,
  Button,
  Icon,
  Font,
  Header
} from 'react-native-elements'

import {Actions} from 'react-native-router-flux';

export default class Gallery extends Component {
  render() {
    return (
      <ScrollView style={styles.Container}>


      <Header centerComponent={{ text: 'Welcome To Portal', style: { color: '#fff' } }} />



      <Card
  title='The Human Heart'
  image={require('../images/Heart.jpg')}>
  <Text style={{marginBottom: 10}}>
Your heart is roughly the size of a fist and sits in the middle of your chest, slightly to the left.
It’s the muscle at the centre of your circulation system, pumping blood around your body as your heart beats.
This blood sends oxygen and nutrients to all parts of your body,
and carries away unwanted carbon dioxide and waste products.
</Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
  </Card>


      <Card
  title='Sharks'
  image={require('../images/Shark.jpg')}>
  <Text style={{marginBottom: 10}}>
    Sharks are fast-swimming fishes that have a skeleton made of cartilage instead of bone.
    (Cartilage is an elastic tissue that is created before bone begins to form.)
    They are related to rays. Sharks are among the oldest animals on Earth.
    The first sharks lived more than 300 million years ago.
    Today there are more than 300 species, or types, of shark.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>

<Card
title='Home Cinema'
image={require('../images/Cinema.jpg')}>
<Text style={{marginBottom: 10}}>
Feeling bored ? 
</Text>
<Button
icon={<Icon name='code' color='#ffffff' />}
backgroundColor='#03A9F4'
buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
title='VIEW NOW' />
</Card>

<Card
title='HELLO WORLD'
image={require('../images/bio.png')}>
<Text style={{marginBottom: 10}}>
The idea with React Native Elements is more about component structure than actual design.
</Text>
<Button
icon={<Icon name='code' color='#ffffff' />}
backgroundColor='#03A9F4'
buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
title='VIEW NOW' />
</Card>

<Card
title='HELLO WORLD'
image={require('../images/bio.png')}>
<Text style={{marginBottom: 10}}>
The idea with React Native Elements is more about component structure than actual design.
</Text>
<Button
icon={<Icon name='code' color='#ffffff' />}
backgroundColor='#03A9F4'
buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
title='VIEW NOW' />
</Card>



      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    padding: 10
  },
});
