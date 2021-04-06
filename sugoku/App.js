import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home'
import Game from './src/screen/Game'
import Finish from './src/screen/Finish'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './store'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Game" component={Game}></Stack.Screen>
          <Stack.Screen name="Finish" component={Finish}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 100
  },
  title:{
    marginTop: 50,
    fontSize: 50

  },  
  sudokuCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 400

  },
  oneRow:{
    width: 400,
    height : 40,
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row'
  },
  // miniBox: {
  //   flex: 1,
  // }
});
