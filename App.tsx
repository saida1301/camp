import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginButton from './src/components/LoginButton';
import MainNavigator from './src/MainNavigator ';
import Card from './src/components/Card';
 // Adjust the path accordingly

const App = () => {
  return (
    <View style={styles.container}>

          {/* Other components or content you want to display */}
 
          {/* Render the MainNavigator component */}
          <Card  total={20} filled={5} />
          {/* <LoginButton total={20} filled={17} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
