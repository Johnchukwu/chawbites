import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp
import { RouteProp } from '@react-navigation/native'; // Import RouteProp

const { width } = Dimensions.get('window');

// Define your stack parameters
type RootStackParamList = {
  Login: undefined; // Define the Login route
  // Add other routes here if needed
};

const CreateAccount = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList> }) => {
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateAccount = () => {
    // Show the success popup
    setModalVisible(true);
  };

  const handleProceed = () => {
    setModalVisible(false);
    navigation.navigate('Login' as keyof RootStackParamList); // Ensure correct typing
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to ChawBites</Text>
        <Text style={styles.createAccountText}>Create an Account</Text>
        <Text style={styles.subText}>
          Please fill in your accurate information
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/images/Users.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/images/Users.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/images/Phone.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/images/Email.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/images/Password-Icon.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Choose Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>
      </View>

      {/* Custom Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[
            styles.checkbox,
            {
              backgroundColor: isSelected ? '#dcd9d8' : '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={() => setSelection(!isSelected)}
        >
          {isSelected && <Text style={styles.tick}>✅</Text>}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          Yes, I want to receive offers and discounts.
        </Text>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={handleCreateAccount}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <Text style={styles.termsText}>
        By creating an account you agree to the privacy policy and to the terms
        of use.
      </Text>

      {/* Success Popup */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Account Created Successfully!</Text>
            <Text style={styles.modalText}>
              Your account has been created. You can now log in.
            </Text>
            <TouchableOpacity
              style={styles.proceedButton}
              onPress={handleProceed}
            >
              <Text style={styles.proceedButtonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: '900',
    color: '#ff5500',
    marginBottom: 30,
    paddingTop: 100,
  },
  createAccountText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#333',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#ff5500',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 10,
  },
  tick: {
    fontSize: 16,
    color: '#fff',
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  createAccountButton: {
    backgroundColor: '#ff5500',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  proceedButton: {
    backgroundColor: '#ff5500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateAccount;
