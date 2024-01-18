import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, Image, Alert, Dimensions, useColorScheme, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
// import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
const { width } = Dimensions.get('window');

const LoginScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

// useEffect(() => {
//   GoogleSignin.configure({
//     webClientId: "471956612530-5jlph0osgiifqb2alt6aqr38eon9gfh7.apps.googleusercontent.com",
//     offlineAccess: true, // This is needed to get refresh tokens for authentication
//   });

// }, []);
  const handleChangePassword = (text: string) => {
    setPassword(text);
  };
  const shouldShowLoginText = email.length === 0 && password.length === 0;
  const handleChangeUsername = (text: string) => {
    setEmail(text);
    setEmailError(isValidEmail(text) ? '' : 'Invalid email address');
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const inputWidth = width * 0.95;
  const isDarkMode = useColorScheme() === 'dark';
  const [showLoginText, setShowLoginText] = useState(true);

  const handleFocus = () => {
    setShowLoginText(false);
  };

  const handleBlur = () => {
    setShowLoginText(email.length === 0 && password.length === 0);
  };
  // const googleLogin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log("userinfo", userInfo);
  //   } catch (error: any) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log(error);
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log(error);
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log(error);
  //     } else {
  //       // Handle other error cases
  //       console.error("Unexpected error:", error);
  //     }
  //   }
  // };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
       
          <LinearGradient
             locations={[0, 1]}
             colors={["#75b6dc", "rgba(117, 182, 220, 0)"]}
             useAngle={true}
             angle={180}
       style={styles.linearGradient}>
            <View style={styles.container}>
              <View style={styles.leftContainer}>
           
                <Text style={styles.leftText}>CampGlobe</Text>
              </View>
              <Text style={styles.rightText}>Camping</Text>
            </View>
            <View style={styles.centerContainer}>
            {showLoginText  && <Text style={styles.headerText}>Log in</Text>}
      </View>
            <TouchableOpacity style={styles.buttonContainer} >
            
              <Text style={styles.buttonText}>Google Login</Text>
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.centerContainer}>

      </View>
      <View style={{ justifyContent: 'center', alignSelf: 'center', bottom: 40 }}>
        <TextInput
          onChangeText={handleChangeUsername}
          placeholder={'Email'}
          style={[styles.input, { width: inputWidth }]}
          placeholderTextColor="white"
          keyboardType="email-address"
          onFocus={() => { setIsEmailFocused(true); handleFocus(); }}
          onBlur={() => { setIsEmailFocused(false); handleBlur(); }}
        />
        {emailError !== '' && !isEmailFocused && <Text style={styles.errorText}>{emailError}</Text>}

        <TextInput
          onChangeText={handleChangePassword}
          placeholder={'Password'}
          style={[styles.input, { width: inputWidth }]}
          placeholderTextColor="white"
          onFocus={() => { setIsPasswordFocused(true); handleFocus(); }}
          onBlur={() => { setIsPasswordFocused(false); handleBlur(); }}
        />
      </View>

            <View style={{ top: "20%" }}>
              <Button
                title="Log in"
                titleStyle={{
                  color: '#FFF',
                  fontFamily: 'Lato',
                  fontSize: 18,
                  fontWeight: '400',
                  lineHeight: 25.2,
                }}
                buttonStyle={{ ...styles.loginButton, backgroundColor: '#33A457' }}
                onPress={() => navigation.navigate('Tabs')}
              />
            </View>
          </LinearGradient>
    
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    width: "100%", // Adjust width as needed
    height: 45,
bottom:70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    flexShrink: 0,
    gap: 18,
  },
  
  
  centerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    // paddingTop: '5%',
    bottom:"12%"
  },
  headerText: {
    color: '#000',
    fontFamily: 'Lato',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 36.4,
    // marginBottom: 20,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"70%",
    alignSelf:"center",
    bottom:40,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D4D6DD',
  },
  orText: {
    marginHorizontal: 10,
    color: '#D4D6DD',
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    
    borderColor: 'rgba(255, 255, 255, 1)', 
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    bottom:"55%",
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
  
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
  },
  appName: {
    color: 'white',
  },
  campingWord: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: 'white',
  },
  googleLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleLoginText: {
    color: 'white',
    marginLeft: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4285f4',
    

  },
});

export default LoginScreen;