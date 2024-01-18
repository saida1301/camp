import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import CampsScreen from '../../components/CampsScreen';
import CampScreen from '../../screens/CampScreen';
import DetailsScreen from '../../components/DetailsScreen';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="camps" component={CampsScreen} />
      <Stack.Screen name="Camp" component={CampScreen} />
      <Stack.Screen
        name="campInner"
        component={DetailsScreen}
        options={{ headerShown: true }} 
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
