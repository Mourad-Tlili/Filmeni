/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import Search from './Components/Search'
import Navigation from './Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import  {Fragment} from 'react';

export default class App extends React.Component { 
  render() {
   
    const Stack = createStackNavigator();
  return(
    <Navigation/>

  )
  }
}
