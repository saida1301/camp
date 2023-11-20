import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const LoginButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={{ uri: "./src/assets/images/google.png" }} style={styles.image} />
        <Text style={styles.buttonText}>Google Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  buttonContainer: {
    borderRadius: 8,
    backgroundColor: 'yellow',
    width: 336,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 30,
    flexShrink: 0,
  },
  image: {
    width: 20, // Adjust the image width as needed
    height: 20, // Adjust the image height as needed
  },
  buttonText: {
    color: 'white', // Adjust the text color
  },
});

export default LoginButton;
