import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import AppContent from './src/AppContent'; // Adjust the path as needed

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppContent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
