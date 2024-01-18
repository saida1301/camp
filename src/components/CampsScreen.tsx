// CampsScreen.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import CampScreen from '../screens/CampScreen';
import YearOfPost from './YearOfPost';
import SearchHeader from './SearchHeader';

const CampsScreen = () => {
  console.log('Camps Screen Rendered');
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
   
  
      <View style={styles.componentContainer}>
          <CampScreen />
        </View>
        <View style={{ marginBottom: 20,}}>
        <YearOfPost
  campName="The Camp of year 'Kepez'"
  hikingDetails="3066 meter hiking"
  // backgroundImageSource={require("CampGlobe/src/assets/images/baku.jpeg")}
  // saveIconSource={require("CampGlobe/src/assets/images/card.png")}
  campNameStyle={{ fontSize: 24, color: "red" }}
  hikingDetailsStyle={{ color: "blue" }}
  saveIconStyle={{ transform: [{ scale: 1.5 }] }}
  bookNowButtonStyle={{
    borderRadius: 10,
    backgroundColor: "white", 

    position: "absolute",
    top: 200,

  }}
/>

        </View>
        <View style={styles.componentContainer}>
          <CampScreen />
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor:"white"
  },
  componentContainer: {
    marginBottom: 40, // Add your desired space between components
  },
});

export default CampsScreen;
