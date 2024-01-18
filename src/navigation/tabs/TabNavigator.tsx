import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesomeIcon} from ' ';
import {
  faArrowLeft,
  faBook,
  faBookOpen,
  faFile,
  faHeart,
  faHouse,
  faMessage,
  faPeopleArrows,
  faPeopleCarry,
  faPeopleGroup,
  faPeopleLine,
  faPeopleRoof,
} from '@fortawesome/free-solid-svg-icons';

import {useNavigation} from '@react-navigation/native';
import {colors} from '../../assets/themes';

import LinearGradient from 'react-native-linear-gradient';



import Icon from 'react-native-vector-icons/FontAwesome';
import TabIcon from '../../components/TabIcon';
import { useTranslation } from 'react-i18next';
import HomeSctack from '../stack/HomeStack';
import CampStack from '../stack/CampStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
const {t} = useTranslation()
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: 'absolute',
            height: 60,
            shadowColor: 'transparent',
          },
          tabBarBackground: () => (
            <LinearGradient
              colors={['#DEDEDE', '#FFFFFF']}
              start={{x: 0, y: 0}}
              useAngle
              angle={92}
              end={{x: 1, y: 1}}
              style={{
                height: 70,
              
              }}
            />
          ),
        }}>
        <Tab.Screen
          name="Home"
          component={HomeSctack}
          options={({route}) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                {/* <Image
                  source={
                    focused
                      ? logo
                      : logo
                  }
                  style={{ width: 24, height: 24 }}
                /> */}
                <Text style={{ color: focused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.70)', fontSize: 10, fontWeight: "500", marginTop: 6 }}>{t('home')}</Text>
              </View>
            ),
  
          })}
        />
<Tab.Screen
  name="Telim"
  component={CampStack}
  options={({ route }) => ({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.push('Tabs')}>
        {/* <Image
          source={logo}
          style={{ width: 30, height: 30 }}
        /> */}
      </TouchableOpacity>
    ),
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center' }}>
        {/* <Image
          source={
            focused
              ? logo
              : logo
          }
          style={{ width: 24, height: 24 }}
        /> */}
        <Text style={{ color: focused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.70)', fontSize: 10, fontWeight: "500", marginTop: 6 }}>{t('work')}</Text>
      </View>
    ),
    
  })}
/>


        <Tab.Screen
          name="CV"
          component={CampStack}
          options={({route}) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.push('Tabs')}>
                   {/* <Image
              source={logo}
              style={{width:24, height:24}}
            /> */}
              </TouchableOpacity>
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
         
                {/* <Image
                  source={
                    focused
                      ? logo
                      : logo
                  }
                  style={{ width: 24, height: 24 }}
                /> */}
                           <Text style={{ color: focused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.70)', fontSize: 10, fontWeight: "500", marginTop: 6 }}>{t('sirketler')}</Text>
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="Vacancies"
          component={CampStack}
          options={({route}) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.push('Tabs')}>
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  size={24}
                  color={colors.white}
                />
              </TouchableOpacity>
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
         
                {/* <Image
                  source={
                    focused
                      ? logo
                      : logo
                  }
                  style={{ width: 24, height: 24 }}
                /> */}
                          <Text style={{ color: focused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.70)', fontSize: 10, fontWeight: "500", marginTop: 6 }}>{t('job_seekers')}</Text>
              </View>
            ),
          })}
        />

     
   
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabIconActive: {
    color: colors.primary,
  },
  tabIconInactive: {
    color: colors.white,
  },
});

export default TabNavigator;
