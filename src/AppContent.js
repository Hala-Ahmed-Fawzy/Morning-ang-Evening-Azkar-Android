import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const flashcardsSet1 = [
  require('./icons/1.png'),
  require('./icons/2.png'),
  // Continue for other images...
];

const flashcardsSet2 = [
  require('./icons/b1.png'),
  require('./icons/b2.png'),
  // Continue for other images...
];

const AppContent = () => {
  const [currentSet, setCurrentSet] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCard = () => {
    if (currentSet) {
      return (
        <Image source={currentSet[currentIndex]} style={styles.image} />
      );
    } else {
      return (
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./icons/1st.png')} style={styles.image} />
          <TouchableOpacity onPress={() => { setCurrentSet(flashcardsSet1); setCurrentIndex(0); }}>
            <Text style={styles.buttonText}>أذكار الصباح</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setCurrentSet(flashcardsSet2); setCurrentIndex(0); }}>
            <Text style={styles.buttonText}>أذكار المساء</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {updateCard()}
      {currentSet && (
        <View style={styles.buttonContainer}>
          <Button title="السابق" onPress={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentSet.length - 1)} />
          <Button title="التالي" onPress={() => setCurrentIndex(currentIndex < currentSet.length - 1 ? currentIndex + 1 : 0)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a8e063',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 'auto',
    minHeight: 400,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    backgroundColor: '#027906',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 12,
    margin: 4,
    fontSize: 16,
  }
});

export default AppContent;
