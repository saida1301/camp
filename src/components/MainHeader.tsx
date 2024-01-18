import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MainHeader = ({ imageUrl, leftText, rightText }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
        <Text style={styles.leftText}>{leftText}</Text>
      </View>
      <Text style={styles.rightText}>{rightText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: width * 0.07, 
   
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: width * 0.15, 
    height: width * 0.15, 
    borderRadius: width * 0.075, 
    marginRight: width * 0.03, 

  },
  leftText: {
    fontSize: width * 0.04, 
  },
  rightText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export default MainHeader;
