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
      <View style={styles.progressBarContainer}>
        {renderFilledPart()}
        {renderUnfilledPart()}
      </View>
      <Text style={styles.progressText}>{`${filled}/${total}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarContainer: {
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    width: 100, // Adjusted the width to accommodate the text
    height: 14,
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
  progressText: {
    marginLeft: 8, // Adjust the margin as needed
    color: 'black',
  },
});

export default LoginButton;
