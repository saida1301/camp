import {StyleSheet} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';


import TabNavigator from './tabs/TabNavigator';
import LoginStack from './stack/LoginStack';
import CampStack from './stack/CampStack';
import HomeScreen from '../screens/HomeScreen';
import SplashStack from './stack/SplashStack';
import OnboardingStack from './stack/OnBoardingStack';
import ExtraStack from './stack/ExtraStack';
import HomeSctack from './stack/HomeStack';



const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
                    <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SplashStack"
        component={SplashStack}
      />
      <Stack.Screen 
        options={{
          headerShown: false,
        }}
        name="Tabs"
        component={TabNavigator}
      />
     <Stack.Screen 
        options={{
          headerShown: false,
        }}
        name="OnboardingStack"
        component={OnboardingStack}
      />
     <Stack.Screen 
        options={{
          headerShown: false,
        }}
        name="ExtraStack"
        component={ExtraStack}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CompanyStack"
        component={CampStack}
      />
   {/* <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeStack"
        component={HomeSctack}
      /> */}




      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}




 
    </Stack.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({});