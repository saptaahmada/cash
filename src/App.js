// import React from 'react';
import React,{Component} from 'react';
import {
  Image,
  StatusBar,
  View
} from 'react-native';
import { Icon, NativeBaseProvider } from "native-base";

import 'react-native-gesture-handler';

// REACT NAVIGATIONS
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Main from './screens/Main';
import CashEdit from './screens/CashEdit';
import CashDetail from './screens/CashDetail';


const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function App() {
  return (
    <NativeBaseProvider>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        
        <NavigationContainer theme={MyTheme} >
          <Stack.Navigator>
              <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
              <Stack.Screen name="CashEdit" component={CashEdit} options={{headerShown: false}} />
              <Stack.Screen name="CashDetail" component={CashDetail} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
