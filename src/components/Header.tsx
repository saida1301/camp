import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchIconPress = () => {
    setSearchVisible(!searchVisible);
  };

  const handleFilterIconPress = () => {
  
    console.log('Filter icon pressed');
  };

  return (
    <View style={styles.headerContainer}>
      
      <View style={styles.leftContainer}>
        {/* <Image
          source={require('CampGlobe/src/assets/images/logo.png')} // Replace with your company logo path
          style={styles.logo}
        /> */}
        <Text style={styles.companyName}>CampGlobe</Text>
      </View>

     
      <View style={styles.rightContainer}>
       
        <TouchableOpacity onPress={handleSearchIconPress}>
          {/* <Image
            source={require('CampGlobe/src/assets/images/search.png')} 
            style={styles.icon}
          /> */}
        </TouchableOpacity>

        {/* Filter icon */}
        <TouchableOpacity onPress={handleFilterIconPress}>
          {/* <Image
            source={require('CampGlobe/src/assets/images/filter.png')}
            style={styles.icon}
          /> */}
        </TouchableOpacity>

 
        {searchVisible && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  companyName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    tintColor: 'black',
  },
  searchInput: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginLeft: 10,
    color: 'white',
  },
});

export default Header;
