import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../utils/responsive';

const CommonInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#6E7C87"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#EAF1FF',
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(16),
  },
  input: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(15),
    fontSize: moderateScale(14),
    color: '#081C42',
  },
});
