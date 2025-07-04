// components/CommonOTPVerification.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import PrimaryButton from './PrimaryButton';
import { scale, verticalScale, moderateScale } from '../utils/responsive';

const CommonOtpVerification = ({
  phoneNumber = '+44 789 675 4321',
  onSubmit,
  onResend,
  logo = require('../assets/FXMaster-2x.png'),
  otpImage = require('../assets/otpimage.png'),
}) => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      {/* Image */}
      <Image source={otpImage} style={styles.otpImage} resizeMode="contain" />

      {/* Title */}
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subTitle}>
        Enter the OTP sent to{' '}
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </Text>

      {/* OTP Input */}
      <OtpInput
        length={6}
        onTextChange={(text) => setOtp(text)}
        value={otp}
        autoFocus
        focusColor="#001E3C"
      />

      {/* Resend */}
      <TouchableOpacity onPress={onResend} style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn’t you receive the OTP?{' '}
          <Text style={styles.resendLink}>Resend OTP</Text>
        </Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <PrimaryButton
        label="Submit"
        onPress={() => onSubmit(otp)}
        buttonStyle={{ marginTop: verticalScale(50), width:"100%" }}
      />
    </View>
  );
};

export default CommonOtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: scale(16),
    backgroundColor: '#fff',
  },
  logo: {
    width: scale(160),
    height: verticalScale(50),
    marginTop: verticalScale(40),
  },
  otpImage: {
    width: scale(260),
    height: verticalScale(260),
    marginVertical: verticalScale(30),
    borderRadius: scale(100),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: '#001E3C',
    marginBottom: verticalScale(8),
  },
  subTitle: {
    fontSize: moderateScale(14),
    color: '#666',
    textAlign: 'center',
    marginBottom: verticalScale(20),
  },
  phoneNumber: {
    color: '#001E3C',
    fontWeight: '600',
  },
  resendContainer: {
    marginTop: verticalScale(12),
  },
  resendText: {
    fontSize: moderateScale(12),
    color: '#666',
  },
  resendLink: {
    color: '#001E3C',
    fontWeight: '600',
  },
});
