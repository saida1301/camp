import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import MainHeader from '../../components/MainHeader';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={{backgroundColor: "#FFFFFF33"}}>
     <MainHeader
              imageUrl="C:\Users\saida\OneDrive\Desktop\campGlobe\CampGlobe\src\assets\images\logo.png"
              leftText="Left Text"
              rightText="Right Text" />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default RegisterScreen;
