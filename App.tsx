import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = ({ gradientColors }) => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random');
      setRandomImage(response.url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <View style={styles.container}>
      {randomImage && (
        <>
      <ImageBackground
      source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw2YCcjZid3xCcA6H-X5qNDt&ust=1700570663470000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPip48PN0oIDFQAAAAAdAAAAABAE' }}
      style={styles.imageBackground}
    >
      <LinearGradient
        colors={['#B0B0B0', '#BFBFBF']}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
    </ImageBackground>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden', 
    // Clip the image to the container bounds
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    height:"100%" // You can adjust this based on your needs
  },
  gradient: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10, // Adjust the percentage by changing the borderRadius value
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
