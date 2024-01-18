import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';
import HomeScreen from '../../screens/HomeScreen';
import Extra from '../../components/Extra';
import CampsScreen from '../../components/CampsScreen';
import CampScreen from '../../screens/CampScreen';
import DetailsScreen from '../../components/DetailsScreen';

const Stack = createNativeStackNavigator();

const SplashStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      initialRouteName="splash"
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="Extra" component={Extra} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={RegisterScreen} />
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="camps" component={CampsScreen} />
      <Stack.Screen name= "Camp" component = {CampScreen}/>
      <Stack.Screen name="campInner" component = {DetailsScreen}/> */}
    </Stack.Navigator>
  );
};

export default SplashStack;
