import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../constants/navigationTypes';

// Define the navigation prop type for Screen4
type Screen4NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Screen4'>;

const Screen4 = () => {
  const navigation = useNavigation<Screen4NavigationProp>();

  return (
    <View style={styles.container}>
      {/* Card Image */}
      <View style={styles.cardContainer}>
        <Image
          source={require('../assets/images/Chef.png')} // Replace with your image path
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>
      {/* Text Content */}
      <Text style={styles.title}>Best Food App For You</Text>
      <Text style={styles.subtitle}>
        Your No.1 favorite food app. We’ve got you covered with the most delicious food on the planet.
        You’re one click away from experiencing greatness. We’ve got all the magic of your favorite
        tastes right here, right now.
      </Text>
      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('Authorization')}
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
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
    marginBottom:37, // Keeps spacing consistent
    marginTop: -268, // Pushes the card upwards
  },
  cardImage: {
    width: '50%', // Reduces the size of the image
    height: '100%',
    bottom: -68, // Maintains proportional scaling
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
  getStartedButton: {
    position: 'absolute', // Enable absolute positioning
    top: '79%', // Adjust position relative to the screen
    right: 20, // Positioned to the right side
    backgroundColor: '#ff5500', // Custom color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  getStartedButtonText: {
    color: '#000', // Black text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen4;
