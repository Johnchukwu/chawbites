import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../constants/navigationTypes';

// Define the navigation prop type for Screen1
type Screen1NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Screen1'>;

const Screen1 = () => {
  const navigation = useNavigation<Screen1NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Screen2');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChawBites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5500',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Screen1;
