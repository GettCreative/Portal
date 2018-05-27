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
  } from 'react-native-elements';

  import {
   createStackNavigator,
  } from 'react-navigation';

  import {Actions} from 'react-native-router-flux';

  class HomeScreen extends React.Component {
   
    render() {
      return (
        <ScrollView style={styles.Container}>
          <Header
            centerComponent={{ text: 'Welcome To Portal', style: { color: '#fff' } }}
         />

          <Card
            title='Planets'
            image={require('../images/SolarSys.png')}>
            <Text style={{marginBottom: 10}}>
              A collection of eight planets and their moons in orbit round the sun, together with smaller bodies in the form of asteroids, meteoroids, and comets.
            </Text>
            <Button onPress={() => this.props.navigation.navigate('Details')}
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Learn In Augmented Reality' />

              <Text></Text>

              <Button onPress={() => this.props.navigation.navigate('Details')}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#ffb300'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Learn In Virtual Reality' />
            </Card>


            <Card
              title='The Human Heart'
              image={require('../images/Heart.jpg')}>
              <Text style={{marginBottom: 10}}>
                Your heart is roughly the size of a fist and sits in the middle of your chest, slightly to the left.
                It’s the muscle at the centre of your circulation system, pumping blood around your body as your heart beats.
                This blood sends oxygen and nutrients to all parts of your body,
                and carries away unwanted carbon dioxide and waste products.
              </Text>
              <Button onPress={() => this.props.navigation.navigate('Details')}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Learn In Augmented Reality' />

                <Text></Text>

                <Button onPress={() => this.props.navigation.navigate('Details')}
                  icon={<Icon name='code' color='#ffffff' />}
                  backgroundColor='#ffb300'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Learn In Virtual Reality' />
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
                <Button onPress={() => this.props.navigation.navigate('Details')}
                  icon={<Icon name='code' color='#ffffff' />}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Learn In Augmented Reality' />

                  <Text></Text>

                  <Button onPress={() => this.props.navigation.navigate('Details')}
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#ffb300'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Learn In Virtual Reality' />
                </Card>



                <Card
                  title='T-Rex'
                  image={require('../images/Trex.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Tyrannosaurus rex was one of the largest meat-eating dinosaurs that ever lived.
                    Scientists believe this powerful predator could eat up to 500 pounds (230 kilograms) of meat in one bite.
                  </Text>
                  <Button onPress={() => this.props.navigation.navigate('Details')}
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
                  </Card>


                  <Card
                    title='Human Skeleton'
                    image={require('../images/Skel2.jpg')}>
                    <Text style={{marginBottom: 10}}>
                      The human skeleton is the internal framework of the body.
                      It is composed of around 270 bones at birth – this total decreases to around 206 bones
                      by adulthood after some bones get fused together.
                    </Text>
                    <Button  onPress={() => this.props.navigation.navigate('Details')}
                      icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW' />
                    </Card>


                    

                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <Text h3>More Coming Soon!</Text>

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


            class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
         
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          
        </View>
      );
    }
  }

  const RootStack = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Details: {
        screen: DetailsScreen,
      },
    },
    {
      initialRouteName: 'Home',
    }
  );

  export default class Gallery extends React.Component {
    render() {
      return <RootStack />;
    }
  }


