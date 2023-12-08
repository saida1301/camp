import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import CampScreen from "./src/screens/CampScreen";
// Import another screen or component

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Home Screen</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <ScrollableTabView
        tabBarBackgroundColor="#f8f8f8"
        tabBarActiveTextColor="#0077be"
        tabBarInactiveTextColor="#555"
        tabBarUnderlineStyle={styles.tabIndicator}
      >
        <HomeScreen tabLabel="Home" />
        <CampScreen tabLabel="Camp" />
  
      </ScrollableTabView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIndicator: {
    backgroundColor: "#0077be",
  },
});

export default App;
