import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { moderateScale } from '../utils/responsive';

const Loader = ({ isVisible = false }) => {
  return (
    <Modal transparent animationType="fade" visible={isVisible}>
      <View style={styles.overlay}>
        <ActivityIndicator size={moderateScale(50)} color="#081C42" />
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
