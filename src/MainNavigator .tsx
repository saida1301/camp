import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginButton from './components/LoginButton';
import Loading from './components/Loading';
 // Import your App component

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogoAnimation1" component={Loading} />
        {/* <Stack.Screen name="Loading" component={Loading} /> */}
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
