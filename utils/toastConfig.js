import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from './responsive';

const CustomToast = ({ text1, text2, backgroundColor, borderColor, icon }) => (
  <View style={[styles.toastContainer, { backgroundColor, borderLeftColor: borderColor }]}>
    <View style={styles.iconCircle}>
      {icon}
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text1}>{text1}</Text>
      {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
    </View>
  </View>
);

export const toastConfig = {
  success: ({ text1, text2 }) => (
    <CustomToast
      text1={text1}
      text2={text2}
      backgroundColor="#18222D"
      borderColor="#4BB543"
      icon={<Text style={styles.icon}>✅</Text>}
    />
  ),
  error: ({ text1, text2 }) => (
    <CustomToast
      text1={text1}
      text2={text2}
      backgroundColor="#18222D"
      borderColor="#FF3333"
      icon={<Text style={styles.icon}>❌</Text>}
    />
  ),
  info: ({ text1, text2 }) => (
    <CustomToast
      text1={text1}
      text2={text2}
      backgroundColor="#18222D"
      borderColor="#081C42"
      icon={<Text style={styles.icon}>ℹ️</Text>}
    />
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    borderLeftWidth: scale(5),
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(15),
    borderRadius: moderateScale(12),
    marginHorizontal: scale(16),
    marginVertical: verticalScale(8),
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    alignItems: 'center',
  },
  iconCircle: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    backgroundColor: '#ffffff22',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  icon: {
    fontSize: moderateScale(16),
  },
  textContainer: {
    flex: 1,
  },
  text1: {
    fontSize: moderateScale(15),
    fontWeight: '600',
    color: '#fff',
    marginBottom: verticalScale(2),
  },
  text2: {
    fontSize: moderateScale(13),
    color: '#d1d1d1',
  },
});
