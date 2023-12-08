import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../screens/Auth/LoginScreen';
import Register from '../../screens/Auth/RegisterScreen';




const LoginStack = () => {
    const Stack = createNativeStackNavigator();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // This effect could be replaced with a call to an authentication service to check if the user is already logged in
    useEffect(() => {
        // Simulating a delay to check if user is already logged in
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
                <Stack.Screen name="login" component={LoginScreen} />
            </Stack.Navigator>
        );
    } else {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="signup" component={Register} />
             
            </Stack.Navigator>
        );
    }
}

export default LoginStack

const styles = StyleSheet.create({})