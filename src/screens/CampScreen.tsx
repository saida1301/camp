import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Camp from "../components/Camp";

const CampScreen = () => {
  const data = [{ key: '1' }, { key: '2' }, { key: '3' }]; // Add your data here

  const renderItem = ({ item }) => (
    <View style={styles.campContainer}>
      <Camp />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",

  },
  campContainer: {
    marginRight: 40, // Adjust margin as needed
  },
});

export default CampScreen;
