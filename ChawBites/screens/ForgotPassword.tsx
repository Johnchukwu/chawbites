import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your navigation parameters
type RootStackParamList = {
  OTPVerification: undefined; // Define the parameters for OTPVerification if any
};

const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleResetPassword = () => {
    // Navigate to the OtpScreen when the button is pressed
    navigation.navigate('OTPVerification' as keyof RootStackParamList);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Forgotten Password</Text>
      </View>

      {/* Input Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email/Phone Number"
          placeholderTextColor="#999"
          keyboardType="default"
        />
        <Text style={styles.subText}>
          An OTP Code will be sent to you to complete this action
        </Text>
      </View>

      {/* Reset Password Button */}
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#040303',
    marginTop: -10,
  },
  form: {
    marginBottom: -300,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#ff5500',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 2,
    marginTop: 370,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
