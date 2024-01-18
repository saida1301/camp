// Header.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SearchHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
       
        {/* <Image source={require('CampGlobe/src/assets/images/logo.png')} style={{ width: 24, height: 24 }} /> */}
        <Text style={styles.logoText}>campglobe</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Icon name="filter" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff', 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 16,
  },
});

export default SearchHeader;
