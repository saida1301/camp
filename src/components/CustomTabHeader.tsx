// CustomTabHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabHeader = ({ navigation, position, routes }) => {
  return (
    <View style={styles.tabContainer}>
      {routes?.map((route, idx) => {
        const isFocused = idx === navigation.state.index;
        const onPress = () => {
          navigation.navigate(route.key);
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
          >
            <Text style={isFocused ? styles.tabTextFocused : styles.tabText}>
              {route.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'red', 
    elevation: 2, 
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  tabText: {
    color: '#555', 
  },
  tabTextFocused: {
    color: '#007BFF', 
    fontWeight: 'bold', 
  },
});

export default CustomTabHeader;
