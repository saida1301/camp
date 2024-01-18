import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Extra from '../../components/Extra';
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';

const ExtraStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Extra" headerMode="none" screenOptions={{
        headerShown:false
      }
      }>
    <Stack.Screen name="Extra" component={Extra} />
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="signup" component={RegisterScreen} />
  </Stack.Navigator>
  )
}

export default ExtraStack

const styles = StyleSheet.create({})