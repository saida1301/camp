import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import {
  FontFamily,
  FontSize,
  Border,
  Color,
  Padding,
} from "../GlobalStyles";
import LoginButton from "./LoginButton";

const Camp = ({  }: any) => {
    const backgroundImageSource = require("CampGlobe/src/assets/images/card.png");
    const heartIconSource = require("CampGlobe/src/assets/images/google.png");

  return (
    <View style={styles.container}>
      <View style={styles.campInfo}>
      <View style={styles.header}>
        {/* Background image */}
        <ImageBackground
          source={backgroundImageSource}
          style={styles.backgroundImage}
        >
          {/* Heart icon in the top left corner */}
          <View style={styles.heartIcon}>
            <Image source={heartIconSource} style={styles.heartImage} />
          </View>
        </ImageBackground>
      </View>
        <Text style={[styles.terkaliCamp, styles.campglobeLayout]}>
          Qaranohur Camp
        </Text>
    
          <LoginButton total={20} filled={5} />

        <View style={styles.details}>
          <View style={styles.price}>
            <Text style={styles.text2}>90</Text>
          </View>
          <Text style={styles.aznPerAdult}>Azn per-adult</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.text3}>15-16</Text>
          <Text style={styles.october}>October</Text>
        </View>
        <Text style={styles.vitaTour}>Vita tour</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorGreenG0,
    flex: 1,
  },
  header: {
    position: "relative",
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: 200, // Adjust the height as needed
    resizeMode: "cover",
  },
  heartIcon: {
    position: "absolute",
    top: Padding.p_4xs,
    right: Padding.p_4xs,
    backgroundColor: Color.colorGreenG0, // Background color for the heart icon
    borderRadius: Border.br_9xs,
    padding: Padding.p_12xs,
  },
  heartImage: {
    width: 24,
    height: 24,
  },
  campInfo: {
    marginTop: 12,
    padding: Padding.p_7xl,
    backgroundColor: Color.colorGreenG0,
    borderRadius: Border.br_81xl,
  },
  terkaliCamp: {
    fontSize: FontSize.title2Medium_size,
    fontFamily: FontFamily.title3Medium,
    fontWeight: "500",
    lineHeight: 25,
    color: Color.colorBlackB900,
  },
  progressBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Padding.p_4xs,
  },
  textTypo: {
    lineHeight: 17,
    fontSize: FontSize.body2Medium_size,
    textAlign: "left",
    fontFamily: FontFamily.title3Medium,
    fontWeight: "500",
  },
  campglobeLayout: {
    lineHeight: 25,
    fontSize: FontSize.title2Medium_size,
    color: Color.colorBlackB900,
  },
  campsize: {
    width: 91,
    height: 12,
    backgroundColor: Color.colorBlackB900,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorBlackB900,
  },
  campsizeChild: {
    flex: 1,
    backgroundColor: Color.colorBlackB900,
  },
  progressText: {
    flexDirection: "row",
    marginLeft: Padding.p_4xs,
  },
  text: {
    fontSize: FontSize.body2Medium_size,
    fontFamily: FontFamily.title3Medium,
    fontWeight: "500",
    color: Color.colorBlackB900,
  },
  filledPart: {
    height: "100%",
    backgroundColor: Color.colorBlackB900,
    overflow: "hidden",
    borderRadius: Border.br_9xs,
  },
  unfilledPart: {
    height: "100%",
    backgroundColor: Color.colorGreenG0,
    overflow: "hidden",
    borderRadius: Border.br_9xs,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Padding.p_4xs,
  },
  price: {
    marginRight: Padding.p_4xs,
  },
  text2: {
    fontSize: FontSize.title3Medium_size,
    fontFamily: FontFamily.title3Medium,
    fontWeight: "500",
    color: Color.colorBlackB900,
  },
  aznPerAdult: {
    flex: 1,
    fontSize: FontSize.title3Medium_size,
    fontFamily: FontFamily.title3Medium,
    fontWeight: "500",
    color: Color.colorBlackB900,
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Padding.p_4xs,
  },
  text3: {
    fontSize: FontSize.body1Regular_size,
    fontFamily: FontFamily.body1Regular,
    color: Color.colorBlackB900,
  },
  october: {
    marginLeft: Padding.p_12xs,
    fontSize: FontSize.body1Regular_size,
    fontFamily: FontFamily.body1Regular,
    color: Color.colorBlackB900,
  },
  vitaTour: {
    marginTop: Padding.p_12xs,
    fontSize: FontSize.body1Regular_size,
    fontFamily: FontFamily.body1Regular,
    color: Color.colorBlackB900,
  },
});

export default Camp;
