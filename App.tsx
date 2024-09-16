import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  console.log('App component rendered');
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
