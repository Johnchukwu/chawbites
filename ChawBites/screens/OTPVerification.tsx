import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreateNewPassword from '../screens/CreateNewPassword';
import { StackNavigationProp } from '@react-navigation/stack';

type OTPVerificationNavigationProp = StackNavigationProp<{
  CreateNewPassword: undefined;
}>;

const OTPVerification = () => {
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const inputRefs = useRef<TextInput[]>([]);
  const navigation = useNavigation<OTPVerificationNavigationProp>();

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleResendOTP = () => {
    setTimer(60);
    setIsResendDisabled(true);
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    // Assuming OTP is verified successfully
    setIsModalVisible(true);
  };

  const handleProceed = () => {
    setIsModalVisible(false);
    navigation.navigate('CreateNewPassword'); // Navigate to the CreateNewPassword page
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Enter your OTP</Text>
        <Text style={styles.subText}>Please enter the OTP sent to you</Text>
      </View>

      {/* OTP Input */}
      <View style={styles.form}>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref!)}
              style={styles.input}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={index === 0}
            />
          ))}
        </View>
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend OTP */}
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn't receive the code?{' '}
          <TouchableOpacity
            onPress={handleResendOTP}
            disabled={isResendDisabled}
          >
            <Text
              style={[
                styles.resendLink,
                isResendDisabled && styles.resendDisabled,
              ]}
            >
              Resend ({timer}s)
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Success Modal */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Image for Success */}
            <Image
              source={require('../assets/images/3dicons.png')} // Replace with your image path
              style={styles.successImage}
            />
            <Text style={styles.successText}>Your verification is successful!</Text>
            <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
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
    backgroundColor: '#FFF',
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
  },
  subText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  form: {
    marginBottom: 30,
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: '#ff5500',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: '#ff5500',
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
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  resendText: {
    fontSize: 14,
    color: '#777',
  },
  resendLink: {
    color: '#ff5500',
    fontWeight: 'bold',
  },
  resendDisabled: {
    color: '#ddd',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  proceedButton: {
    backgroundColor: '#ff5500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPVerification;
