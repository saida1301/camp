// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Extra from '../../components/Extra';
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';



const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Extra" headerMode="none">
        <Stack.Screen name="Extra" component={Extra} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnboardingStack;
