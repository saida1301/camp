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
  const [city, setCity] = useState('');




  const countryCodes = [
    { label: 'Select Country Code', value: '' },
    { label: '+994', value: '+994' },

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
  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',

  ];
  
  const [filteredCities, setFilteredCities] = useState<string[]>([]);


  
  const handleCityChange = (text: string) => {
    setCity(text);
  

    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCities(filtered);
  };
  
  return (

<LinearGradient
  locations={[0, 1]}
        colors={["#75b6dc", "rgba(117, 182, 220, 0)"]}
        useAngle={true}
        angle={180}
  style={styles.linearGradient}
>

     
          <View style={styles.container}>
          <View style={styles.leftContainer}>
          
            <Text style={styles.leftText}>CampGlobe</Text>
          </View>
          <Text style={styles.rightText}>Camping</Text>
        </View>




          <View style={{ justifyContent: 'center', alignSelf: 'center', top:"10%" }}>
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
    <TextInput
            onChangeText={handleCityChange}
            placeholder={'City'}
            style={[styles.input, { width: inputWidth }]}
            placeholderTextColor="white"
          />
          {filteredCities.length > 0 && (
            <View style={styles.filteredCitiesContainer}>
              {filteredCities.map((city) => (
                <TouchableOpacity
                  key={city}
                  style={styles.filteredCityItem}
                  onPress={() => {
                    setCity(city);
                    setFilteredCities([]);
                  }}
                >
                  <Text style={{ color: 'white' }}>{city}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

  </View>

          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
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
    onPress={() => Alert.alert('Login pressed')}
  />
</View>



      </LinearGradient>
  
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
  filteredCitiesContainer: {
    position: 'absolute',
    bottom: -110, 
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    marginHorizontal: 0,
    maxHeight: 120,
    overflow: 'hidden',
  },
  filteredCityItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 60,
    backgroundColor: 'white',
    padding: 20,
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', 
  },
  cancelButton: {
    marginTop: 10,
  },
  buttonContainer: {
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    width: "100%", 
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
  top:20
   

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

export default Register;