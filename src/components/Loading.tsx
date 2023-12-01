import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loading = () => {
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const delay = 500; // 500ms delay
    const animationDuration = 1000; // Adjust the duration as needed

    const startAnimation = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: false, // Make sure to set useNativeDriver to false for certain animations
      }).start(() => {
        navigation.navigate('LogoAnimation1'); // Navigate to the next screen after the animation
      });
    };

    const delayTimer = setTimeout(() => {
      startAnimation();
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [animatedValue, navigation]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.logo, { transform: [{ translateY }], opacity }]}
      >
        Your Logo
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Loading;
