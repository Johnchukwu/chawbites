import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../constants/navigationTypes';

// Define the navigation prop type for Screen2
type Screen2NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Screen2'>;

const Screen2 = () => {
  const navigation = useNavigation<Screen2NavigationProp>();

  return (
    <View style={styles.container}>
      {/* Card Image */}
      <View style={styles.cardContainer}>
        <Image
          source={require('../assets/images/Eatingicon.png')} // Replace with your image path
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>
      {/* Text Content */}
      <Text style={styles.title}>Don’t Starve, 
        Just Order</Text>
      <Text style={styles.subtitle}>
        Just order your favorite food anytime, anywhere and receive your meal within a few minutes.
      </Text>
      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('Screen3')}
      >
        <Text style={styles.skipButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardContainer: {
    width: '100%',
    height: '50%', // Takes slightly less space to fit better
    backgroundColor: '#f99b8175', // Card background color
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center', // Centers the image vertically
    alignItems: 'center', // Centers the image horizontally
    marginBottom: 27, // Keeps spacing consistent
    marginTop: -319, // Pushes the card upwards
  },
  cardImage: {
    width: '50%', // Reduces the size of the image
    height: '70%',
    bottom:-68, // Maintains proportional scaling
  },
  title: {
    fontSize: 49,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 20, // Space between the image card and the title
    marginBottom: 10,
    fontFamily: 'Gilroy-Black', // Custom font
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20, // Adds padding to the sides for better readability
  },
  skipButton: {
    position: 'absolute', // Enable absolute positioning
    top: '79%', // Adjust position relative to the screen
    right: 20, // Positioned to the right side
    backgroundColor: '#ff5500', // Custom color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  skipButtonText: {
    color: '#000', // Black text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen2;
