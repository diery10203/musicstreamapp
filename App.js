import { StatusBar } from 'expo-status-bar';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Laucnh_Screen from "./Launch_Screen"
// import Home_Audio from "./Home_Audio"
// import ChartDetail from "./ChartDetail"
// import ArtistDetail from "./ArtistDetail"
// import Seach from "./Seach"
// import FullPlay from "./FullPlayerScreen1"
// import Feed from "./Feed"
import Login from "./Login"
// import Lirary from "./Lirary"
// import Launch_Primium from "./Launch_Premium"
// import GoiPrimium from "./GoiPrimium"
// import Playlist from "./Playlist"
// import Abuml from "./Abuml"
// import Sign from "./Sign_In"
const Stack =createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Laucnh_Screen">
      <Stack.Screen name="Laucnh_Screen" component={Laucnh_Screen}></Stack.Screen>
      {/* <Stack.Screen name="Home_Audio" component={Home_Audio}></Stack.Screen>
      <Stack.Screen name="ChartDetail" component={ChartDetail}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="ArtistDetail" component={ArtistDetail}></Stack.Screen>
      <Stack.Screen name="Seach" component={Seach}></Stack.Screen>
      <Stack.Screen name="FullPlay" component={FullPlay}></Stack.Screen>
      <Stack.Screen name="Feed" component={Feed}></Stack.Screen>
      <Stack.Screen name="Lirary" component={Lirary}></Stack.Screen>
      <Stack.Screen name="Launch_Primium" component={Launch_Primium}></Stack.Screen>
      <Stack.Screen name="GoiPrimium" component={GoiPrimium}></Stack.Screen>
      <Stack.Screen name="Playlist" component={Playlist}></Stack.Screen>
      <Stack.Screen name="Abuml" component={Abuml}></Stack.Screen>
      <Stack.Screen name="Sign" component={Sign}></Stack.Screen> */}
    </Stack.Navigator>
    

   </NavigationContainer>
  );
}

;
