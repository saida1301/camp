// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './src/navigation/index'



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
  <Navigator/>

    </NavigationContainer>
  );
};

export default App;
