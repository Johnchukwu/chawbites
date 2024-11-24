import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../constants/navigationTypes';

const { width } = Dimensions.get('window');

// Define the navigation prop type for Authorization Screen
type AuthorizationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Authorization'
>;

const Authorization = () => {
  const navigation = useNavigation<AuthorizationNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Image
          source={require('../assets/images/appstore.png')} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>ChawBites</Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={styles.goalText}>Our Goal is Your Satisfaction</Text>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('CreateAccount')} // Navigate to Create Account screen
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')} // Navigate to Login screen
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Social Icons */}
        <Text style={styles.connectWithText}>Connect with</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/Apple.png')} // Replace with your Apple icon path
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/Google.png')} // Replace with your Google icon path
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5500', // Orange background
  },
  logoSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5500', // Orange matches background
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Gilroy-Black',
  },
  contentSection: {
    flex: 3,
    backgroundColor:'#fff', // white color
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  createAccountButton: {
    width: width * 0.8,
    backgroundColor: '#ff5500',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButton: {
    width: width * 0.8,
    backgroundColor: '#555',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  connectWithText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  socialIcons: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 70,
  },
  icon: {
    width: 38,
    height: 50,
  },
});

export default Authorization;
