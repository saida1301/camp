import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, Image, Alert, Dimensions, useColorScheme, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
const { width } = Dimensions.get('window');


const Register = () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState('+994');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact_info, setContact_info] = useState('');
  const [modalVisible, setModalVisible] = useState(false);



  const countryCodes = [
    { label: 'Select Country Code', value: '' },
    { label: '+994', value: '+994' },
    // Add more country codes here
  ];

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCountryCodeSelect = (value: React.SetStateAction<string>) => {
    setSelectedCountryCode(value);
    setModalVisible(false);
  };

  const handleChangePassword = (text: string) => {
    setPassword(text);
  };
  const handleChangeUsername = (text: string) => {
    setEmail(text);
  };

  const inputWidth = width * 0.95;
  const isDarkMode = useColorScheme() === 'dark';
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('CampGlobe/src/assets/images/baku.jpeg')}
      style={styles.backgroundImage}
    >
<LinearGradient
  colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.7)']}
  style={styles.linearGradient}
>
        {/* <View style={styles.container}> */}
          {/* Logo and App Name */}
     
          <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image
              source={require('CampGlobe/src/assets/images/logo.png')}
              style={styles.image}
            />
            <Text style={styles.leftText}>CampGlobe</Text>
          </View>
          <Text style={styles.rightText}>Camping</Text>
        </View>

          {/* Google Login */}


          {/* Email and Password Inputs */}
          <View style={{ justifyContent: 'center', alignSelf: 'center', bottom:40 }}>
        <TextInput
          onChangeText={handleChangeUsername}
          placeholder={'Email'}
          style={[
            styles.input,
            { width: inputWidth },
 
          ]}
          placeholderTextColor="white"
          keyboardType="email-address"
        />

        <TextInput
          onChangeText={handleChangePassword}
          placeholder={'Password'}
          style={[
            styles.input,
            { width: inputWidth },
   
          ]}
          placeholderTextColor="white"
        />
                <TextInput
          onChangeText={handleChangeUsername}
          placeholder={'Email'}
          style={[
            styles.input,
            { width: inputWidth },
 
          ]}
          placeholderTextColor="white"
          keyboardType="email-address"
        />
                <TextInput
          onChangeText={handleChangeUsername}
          placeholder={'Email'}
          style={[
            styles.input,
            { width: inputWidth },
 
          ]}
          placeholderTextColor="white"
          keyboardType="email-address"
        />
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={handlePress} style={{ }}>
        <View
          style={[
            styles.input,
            {
              borderColor: 'rgba(255, 255, 255, 1)',
              borderWidth: 1,
              marginRight: 10,
              flex: 1,
              alignSelf:"center",
              justifyContent:"center"
     // Center the content vertically
            },
          ]}
        >
          <Text style={{ textAlign: 'center', color: 'white' }}>{selectedCountryCode || 'Select Country Code'}</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          {countryCodes.map((code) => (
            <TouchableOpacity
              key={code.value}
              style={styles.modalItem}
              onPress={() => handleCountryCodeSelect(code.value)}
            >
              <Text style={{ textAlign: 'center' }}>{code.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.cancelButton} onPress={handleModalClose}>
            <Text style={{ color: 'red', textAlign: 'center' }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TextInput
        placeholder="tel"
        value={contact_info.replace(selectedCountryCode, '')}
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9]/g, '');
          if (numericValue.length <= 10) {
            setContact_info(`${selectedCountryCode}${numericValue}`);
          }
        }}
        style={[
          styles.input,
          {
            width: inputWidth,
            flex: 1,
          },
        ]}
        placeholderTextColor="#FDFDFD"
        keyboardType="phone-pad"
      />
    </View>
  </View>

          {/* Login Button */}
<View style={{top:"20%"}}>

<Button
  title="Log in"
  titleStyle={{
    color: '#FFF', // Replace with your desired color value
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 25.2,
  }}
  buttonStyle={{ ...styles.loginButton, backgroundColor: '#33A457' }}
  onPress={() => Alert.alert('Login pressed')}
/>

</View>
        {/* </View> */}
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    marginTop: 60,
    backgroundColor: 'white',
    padding: 20,
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', // Make the item full width
  },
  cancelButton: {
    marginTop: 10,
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
    
    borderColor: 'rgba(255, 255, 255, 1)', // Replace with your desired color value
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
    color: '#000', // Replace with your color value
    fontFamily: 'Lato',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25.2, // Adjust as needed
  },
  
  rightText: {
    color: '#000', // Replace with your color value
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 22.4, // Adjust as needed
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
    
  // Change to your desired color
  },
});

export default Register;