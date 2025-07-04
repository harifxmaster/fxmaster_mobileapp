import React from 'react';
import CommonOtpVerification from '../../components/CommonOtpVerification';

const OTPVerificationScreen = ({ navigation }) => {
  const handleSubmit = (otp) => {
    console.log('Submitted OTP:', otp);
    navigation.navigate('HomeScreen');
  };

  const handleResend = () => {
    console.log('Resend OTP clicked!');
  };

  return (
    <CommonOtpVerification
      phoneNumber="+44 789 675 4321"
      onSubmit={handleSubmit}
      onResend={handleResend}
    />
  );
};

export default OTPVerificationScreen;
