import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../../Screens/RegisterScreen';
import LoginScreen from '../../Screens/LoginScreen';
import DashboardScreen from '../../Screens/DashboardScreen';
import QRScanner from '../../Screens/QRScanner';


//we want to declare for stack it contains all loading screens
const Stack=createNativeStackNavigator();


export default function HomeScreen() {
  return (
    //  <LoginScreen/>
    //  <DashboardScreen/>
    // <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Dashboard' component={DashboardScreen}/>
        <Stack.Screen name='QRScanner' component={QRScanner}/>
      </Stack.Navigator>
    // </NavigationContainer> 
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
