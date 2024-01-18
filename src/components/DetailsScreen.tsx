import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import LoginButton from "./LoginButton";

const DetailsScreen = ({ route }) => {
  
  const { campData } = route.params;
  const { width, height } = Dimensions.get("window");

  return (
    <View>
     

      <LoginButton total={campData?.total} filled={campData?.filled} />
     
      <View style={styles.infoContainer}>
        <Text style={[styles.campName, styles.text]}>
          Camp Name: {campData.name}
        </Text>
        <Text style={styles.text}>Price: {campData.price} AZN</Text>
        <Text style={styles.text}>Date: {campData.date}</Text>
        <Text style={styles.text}>Tour: {campData.tour}</Text>
        
      </View>
 
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    padding: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000", // Default text color
  },
  campName: {
    color: "blue", // Blue color for the camp name
    fontWeight: "bold",
  },
});
export default DetailsScreen;
