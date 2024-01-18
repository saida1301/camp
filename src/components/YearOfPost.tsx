import React from "react";
import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";

const YearOfPost = ({
  campName,
  hikingDetails,
  backgroundImageSource,
  saveIconSource,
  campNameStyle,
  hikingDetailsStyle,
  saveIconStyle,
  bookNowButtonStyle,
}: any) => {
  return (
    <ImageBackground style={[styles.container, styles.backgroundImage]} resizeMode="cover" source={backgroundImageSource}>
      <Text style={[styles.campName, campNameStyle]}>{campName}</Text>
      <Text style={[styles.hikingDetails, styles.bookNowTypo, hikingDetailsStyle]}>{hikingDetails}</Text>
      <View style={[styles.saveIconWrapper, saveIconStyle]}>
        <Image style={[styles.saveIcon, saveIconStyle]} resizeMode="contain" source={saveIconSource} />
      </View>
      <View style={[styles.bookNowButton, bookNowButtonStyle]}>
        <Text style={[styles.bookNow, styles.bookNowTypo]}>Book now</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 258,
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    overflow: "hidden",
  },
  campName: {
    top: 80,
    fontSize: 22,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: "Lato-Bold",
    textAlign: "left",
    color: "#000",
    left: 20,
    position: "absolute",
  },
  hikingDetails: {
    top: 111,
    color: "#fff",
    left: 20,
  },
  saveIconWrapper: {
    top: 32,
    right: 24,
    borderRadius: 80,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  saveIcon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  bookNowButton: {
    bottom: 19, // Adjust the bottom value to position the button
    borderRadius: 117,
    backgroundColor: "#fff",
    width: 103,
    height: 30,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  bookNow: {
    top: 4,
    left: 16,
    color: "#000",
    lineHeight: 22,
    fontSize: 16,
  },
  bookNowTypo: {
    fontFamily: "Lato-Regular",
    lineHeight: 22,
    fontSize: 16,
    textAlign: "left",
    position: "absolute",
  },
});

export default YearOfPost;
