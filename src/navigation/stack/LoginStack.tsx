import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import RegisterScreen from '../../screens/Auth/RegisterScreen';
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';
import CampsScreen from '../../components/CampsScreen';

const LoginStack = () => {
    const Stack = createNativeStackNavigator();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
     
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 2000);
    }, []);

    if (isLoggedIn) {
        return (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="camps" component={CampsScreen} /> 
          </Stack.Navigator>
        );
      } else {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="signup" component={RegisterScreen} />
                <Stack.Screen name="camps" component={CampsScreen} />
            </Stack.Navigator>
        );
    }
}

export default LoginStack;




const styles = StyleSheet.create({})