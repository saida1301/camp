import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CampScreen from '../../screens/CampScreen';
import DetailsScreen from '../../components/DetailsScreen';
import CampsScreen from '../../components/CampsScreen';


const CampStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{

        }
        }>
      <Stack.Screen name="camps" component={CampsScreen} />
      <Stack.Screen name= "Camp" component = {CampScreen}/>
      <Stack.Screen name="campInner" component = {DetailsScreen}/>
      </Stack.Navigator>
    );
}

export default CampStack

const styles = StyleSheet.create({})