import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home'; 
import FAQ from '../Screen/FAQ'; 
import Loading from '../Screen/Loading';
import LogIn from '../Screen/LogIn';
import MyAccount from '../Screen/MyAccount';
import Observation from '../Screen/Observation';
import Welcome from '../Screen/Welcome';
import MenuBar from '../AppMenu/MenuBar';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="Observation" component={Observation} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="MenuBar" component={MenuBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;