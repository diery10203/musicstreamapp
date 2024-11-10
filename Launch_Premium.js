import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('./assets/Launch_Screen_Primieum/BackRoungh_Home.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/Launch_Screen_Primieum/banner.png')} />
        </View>
        <View style={{ flex: 2, justifyContent:'flex-end',alignItems:'center' }}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.title}>Premium</Text>
          <Text style={styles.subtitle}>...</Text>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('GoiPrimium')}>
            <Text style={styles.buttonText}>Start listening</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flex: 1.5,
    justifyContent:'center',
    alignContent:'center'
  },
  logoText: {
    fontSize: 40,
    color: 'white',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;