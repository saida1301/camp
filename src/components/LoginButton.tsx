import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const LoginButton = ({ total, filled }: any) => {
  const renderFilledPart = () => {
    const filledWidth = (filled / total) * 100 + '%';

    return (
      <View style={[styles.filledPart, { width: filledWidth }]}>
        <Text style={styles.tourNumberText}>{filled}</Text>
      </View>
    );
  };

  const renderUnfilledPart = () => {
    const unfilledWidth = ((total - filled) / total) * 100 + '%';

    return <View style={[styles.unfilledPart, { width: unfilledWidth }]} />;
  };

  return (
    <View style={styles.container}>
      {renderFilledPart()}
      {renderUnfilledPart()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    width:"50%",
    borderColor: 'black',
    overflow: 'hidden',
  },
  filledPart: {
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unfilledPart: {
    height: '100%',
    backgroundColor: 'white',
  },
  tourNumberText: {
    color: 'black',
  },
});

export default LoginButton;
