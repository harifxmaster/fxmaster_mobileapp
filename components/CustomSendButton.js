import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { scale } from '../utils/responsive';

const CustomSendButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadowContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Image
            source={require('../assets/send.png')}
            style={styles.checkIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Send</Text>
    </View>
  );
};

export default CustomSendButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    width: 80,
    zIndex: 10,
  },

  shadowContainer: {
    shadowColor: '#4c8bf5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 40,
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  button: {
    width: 64,
    height: 64,
    backgroundColor: '#001f4d',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    position: 'absolute',
    bottom: 6,
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    color: '#081C42',
    fontWeight: '500',
  },
  checkIcon: {
    width: scale(24),
    height: scale(24),
  },
});
