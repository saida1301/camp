import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Camp from "../components/Camp";
import DetailsScreen from "../components/DetailsScreen";


const Stack = createStackNavigator();

const CampScreen = () => {
  const navigation = useNavigation();

  const data = [
    { key: '1', total: 20, filled: 15, name:"saida" },
    { key: '2', total: 20, filled: 10 },
    { key: '3', total: 20, filled: 18 },
  ];

  const renderItem = ({ item }: any) => (
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('campInner', { campData: item });
      }}
    >
      <View style={styles.campContainer}>
        <Camp data={item} />
      </View>
    </TouchableOpacity>
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
    paddingLeft: 30,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  campContainer: {
    marginRight: 40,
  },
});

export default CampScreen;
