import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import MainHeader from "./MainHeader";

const Extra = ({ navigation }) => {
  return (
 
      <><LinearGradient
      style={styles.gradient}
      locations={[0, 1]}
      colors={["#75b6dc", "rgba(117, 182, 220, 0)"]}
      useAngle={true}
      angle={180}
    >


    </LinearGradient><View style={styles.containers}>
        <View style={styles.leftContainer}>
          {/* <Image source={require('CampGlobe/src/assets/images/logo.png')} style={styles.image} /> */}
          <Text style={styles.leftText}>CampGlobe</Text>
        </View>
        <Text style={styles.rightText}>Camping</Text>
      </View><Text style={styles.findYourDream}>Find your dream</Text><Text style={styles.bookCampsTours}>Book camps, tours, hikings,</Text><Text style={styles.andMore}>and more.</Text><View style={styles.container}>
      

        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.linkButton,
              pressed && { opacity: 0.5 },
            ]}
            onPress={() => navigation.navigate('signup')}
          >
            <Text style={[styles.buttonText, styles.linkRegisterText]}>Register</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.linkButton,
              pressed && { opacity: 0.5 },
            ]}
            onPress={() => navigation.navigate('login')}
          >
            <Text style={[styles.buttonText, styles.linkSignInText]}>Log in</Text>
          </Pressable>
        </View>

      </View></>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  containers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  top:20
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',

  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  leftText: {
    color: '#000', 
    fontFamily: 'Lato',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25.2,
  },
  
  rightText: {
    color: '#000',
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 22.4, 
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  
  linkButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  
  linkRegisterText: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  
  linkSignInText: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  gradient: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  vectorIcon: {
    right: "47.81%",
    left: "50%",
    bottom: "47.17%",
    top: "50.47%",
    width: "2.19%",
    height: "2.36%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    right: "50.02%",
    left: "47.8%",
    bottom: "47.17%",
    top: "50.47%",
    width: "2.19%",
    height: "2.36%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    height: "4.25%",
    width: "1.5%",
    top: "47.17%",
    right: "49.29%",
    bottom: "48.58%",
    left: "49.21%",
    position: "absolute",
    overflow: "hidden",
  },
  campglobe: {
    top: "53.01%",
    left: "45.26%",
    fontSize: FontSize.h6Medium_size,
    lineHeight: 34,
  
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlackB900,
    position: "absolute",
  },
  logoContainer: {
    height: 44,
    position: "absolute",
    // Adjust other logo container styles as needed
  },
  campglobe1: {
    top: 9,
   
    left: 57,
    textAlign: "left",
    color: Color.colorBlackB900,
    position: "absolute",
  },
  mainLogoIcon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_19xl,
    width: 44,
    position: "absolute",
  },
  camping: {
    top: 51,
    left: 284,
    fontSize: FontSize.title3Light_size,
    lineHeight: 22,
    fontWeight: "300",

    position: "absolute",
  },
  findYourDream: {
    top: 311,
    fontSize: FontSize.h5Bold_size,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.h5Bold,
    left: 24,
    position: "absolute",
  },
  bookCampsTours: {
    top: 363,
    fontSize: FontSize.h6Medium_size,
    lineHeight: 31,
    left: 24,
    textAlign: "left",
    color: Color.colorBlackB900,
  
    fontWeight: "500",
    position: "absolute",
  },
  andMore: {
    top: 389,
    fontSize: FontSize.h6Medium_size,
    lineHeight: 31,
    left: 24,
    textAlign: "left",
    color: Color.colorBlackB900,
  
    fontWeight: "500",
    position: "absolute",
  },
  // linkRegister: {
  //   height: 25,
  //   top: 743,
  //   position: "absolute",
  //   left: 253,
  //   width: 65,
  // },
  // linkSignIn: {
  //   height: 25,
  //   top: 773,
  //   position: "absolute",
  //   left: 57,
  //   width: 53,
  // },
  register: {
    color: Color.colorBlackB0,
    textAlign: "left",
    position: "absolute",
    textDecoration: "underline",
    lineHeight: 25,
    fontSize: FontSize.title2Regular_size,
   
    fontWeight: "500",
    top: 0,
    left: 0,
  },
});

export default Extra;
