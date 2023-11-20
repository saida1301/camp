import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions, useColorScheme, ImageBackground } from 'react-native';
import MainHeader from '../../components/MainHeader';
import { borderRadius, colors, fontSizes, spacing } from '../../assets/themes';
import LoginButton from '../../components/LoginButton';
const { width } = Dimensions.get('window');
const LoginScreen = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChangePassword = (text: string) => {
        setPassword(text);
      };
      const handleChangeUsername = (text: string) => {
        setEmail(text);
      };
      const inputWidth = width * 0.95;
      const isDarkMode = useColorScheme() === 'dark'
  return (

    <View style={{backgroundColor:"rgba(176, 176, 176, 1.0)", height:"100%"}}>
      <View>
          <MainHeader
              imageUrl="C:\Users\saida\OneDrive\Desktop\campGlobe\CampGlobe\src\assets\images\logo.png"
              leftText="Left Text"
              rightText="Right Text" />
          <View style={{ justifyContent: "center", alignSelf: "center", margin: 0, paddingTop: "25%" }}>
              <Text style={styles.containerr}>Login</Text>

          </View>
          <TouchableOpacity style={styles.buttonContainer}>
              <Image source={{ uri: "./src/assets/images/google.png" }} style={styles.image} />
              <Text style={styles.buttonText}>Google Login</Text>
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.dividerLine} />
          </View>
          <View style={{ justifyContent: "center", alignSelf: "center" }}>
              <TextInput
                  onChangeText={handleChangeUsername}
                  placeholder={"Email"}
                  style={[
                      styles.input,
                      { width: inputWidth, },
                      { color: isDarkMode ? "white" : "black" } // Add this line
                  ]}
                  placeholderTextColor={isDarkMode ? "white" : "black"}
                  keyboardType="email-address" />

              <TextInput

                  onChangeText={handleChangePassword}
                  placeholder={"Password"}
                  style={[
                      styles.input,
                      { width: inputWidth },
                      { color: isDarkMode ? "white" : "black" } // Add this line
                  ]}
                  placeholderTextColor={isDarkMode ? "white" : "black"} />
          </View>

      </View>
      <LoginButton />
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D4D6DD',
  },
  input: {
    borderRadius: borderRadius.small,
    fontSize: fontSizes.medium,
    borderColor: "#B0B0B0" + '60',
    borderWidth: 1,

    paddingHorizontal: spacing.medium,
    marginTop: 20,
    marginBottom: -10,
  },
  orText: {
    marginHorizontal: 10,
    color: '#D4D6DD',
    fontWeight: 'bold',
  },
  containerr:{
    color: '#000',
    fontFamily: 'Lato',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 36.4,
    marginBottom:20
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
    fontSize: 16,
  },
  rightText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    borderRadius: 8,
    backgroundColor: 'red',
 
    width: 336,
    height: 45,
alignItems:"center",
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    gap:30,
    flexShrink: 0,
  },
  buttonContainers: {
    borderRadius: 8,
    backgroundColor: 'red',
 marginTop:0,
    width: 336,
    height: 45,
alignItems:"center",
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    gap:30,
    flexShrink: 0,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Lato',
    fontSize: 16, // You can adjust the font size based on your design
    fontStyle: 'normal',
    fontWeight: '500',
  },
});

export default LoginScreen;
