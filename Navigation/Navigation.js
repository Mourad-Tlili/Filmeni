import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Components/Search'
import 'react-native-gesture-handler'
import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProdDetail from '../Components/ProdDetail'

const Stack = createStackNavigator();

export default function App( ) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen 
name="Home"
component={Search}
/>

<Stack.Screen
name="ProdDetail"
component={ProdDetail}
/>

      </Stack.Navigator>
    </NavigationContainer>

    
  );
}