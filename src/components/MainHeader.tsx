import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MainHeader = ({ imageUrl, leftText, rightText }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
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
    padding: width * 0.07, // Use a percentage of the screen width for padding
    backgroundColor: "rgba(176, 176, 176, 1.0)",
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: width * 0.15, // Use a percentage of the screen width for image width
    height: width * 0.15, // Use a percentage of the screen width for image height
    borderRadius: width * 0.075, // Use a percentage of the screen width for border radius
    marginRight: width * 0.03, // Use a percentage of the screen width for margin
    backgroundColor: 'red',
  },
  leftText: {
    fontSize: width * 0.04, // Use a percentage of the screen width for font size
  },
  rightText: {
    fontSize: width * 0.04, // Use a percentage of the screen width for font size
    fontWeight: 'bold',
  },
});

export default MainHeader;
