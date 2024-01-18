import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Animated, useColorScheme, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../assets/themes';

const SplashScreen = ({ navigation }: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const isDarkMode = useColorScheme() === 'dark'; 

  useEffect(() => {
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Extra');
      });      
  }, [fadeAnim, navigation]);

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        navigation.navigate('Extra');
      }
    };
    checkLoggedInStatus();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? colors.black : colors.white }]}>
      {/* <Animated.Image
        source={require('CampGlobe/src/assets/images/logo.png')}
        style={[styles.image, { opacity: fadeAnim }]}
      /> */}
      <Text>Salam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
