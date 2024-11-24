import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from '../components/navigation/AppNavigator';

const AppLayout = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppLayout;
