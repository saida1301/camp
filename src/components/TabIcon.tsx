import React from 'react';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../assets/themes';

const TabIcon = ({ focused, iconName, title }:any) => {

  const activeColor = colors.white;
 const inactiveColor = 'rgba(224, 204, 236, 0.70)';

  
  const iconStyle = focused ? { color: activeColor } : { color: inactiveColor };
  const textStyle = focused
    ? { color: activeColor, fontSize: 10, fontWeight: '500' }
    : { color: inactiveColor, fontSize: 10, fontWeight: '500' };

  return (
    <>
      <Icon name={iconName} size={30} style={iconStyle} />

    </>
  );
};

export default TabIcon;