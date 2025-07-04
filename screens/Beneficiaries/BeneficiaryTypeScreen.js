import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/CommonHeader';
import SelectCurrencyDropdown from '../../components/SelectCurrencyDropdown';
import CommonInput from '../../components/CommonInput';
import PrimaryButton from '../../components/PrimaryButton';
import { scale, verticalScale } from '../../utils/responsive';
import ToggleTabs from '../../components/ToggleTabs';

const BeneficiaryTypeScreen = ({ navigation }) => {
  const [beneficiaryType, setBeneficiaryType] = useState('Regular');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    accountName: '',
    accountNumber: '',
    sortCode: '',
    city: '',
    address: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleTabChange = type => {
    setBeneficiaryType(type);
    setFormData({
      companyName: '',
      firstName: '',
      lastName: '',
      accountName: '',
      accountNumber: '',
      sortCode: '',
      city: '',
      address: '',
    });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Add Beneficiary"
        rightIcon={require('../../assets/home.png')}
        onRightPress={() => navigation.navigate('HomeScreen')}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Toggle */}
        <ToggleTabs activeTab={beneficiaryType} onTabChange={handleTabChange} />

        {/* Select Country */}
        <View style={{ marginBottom: verticalScale(15) }}>
          <SelectCurrencyDropdown
            selectedCurrency={selectedCountry}
            onSelectCurrency={setSelectedCountry}
          />
        </View>
        {/* Input Fields */}
        {beneficiaryType === 'Regular' ? (
          <>
            <CommonInput
              placeholder="Company Name"
              value={formData.companyName}
              onChangeText={val => handleChange('companyName', val)}
            />
          </>
        ) : (
          <>
            <CommonInput
              placeholder="First Name"
              value={formData.firstName}
              onChangeText={val => handleChange('firstName', val)}
            />
            <CommonInput
              placeholder="Last Name"
              value={formData.lastName}
              onChangeText={val => handleChange('lastName', val)}
            />
          </>
        )}

        <CommonInput
          placeholder="Account Name"
          value={formData.accountName}
          onChangeText={val => handleChange('accountName', val)}
        />
        <CommonInput
          placeholder="Account Number"
          value={formData.accountNumber}
          onChangeText={val => handleChange('accountNumber', val)}
          keyboardType="numeric"
        />
        <CommonInput
          placeholder="Sort Code"
          value={formData.sortCode}
          onChangeText={val => handleChange('sortCode', val)}
        />
        <CommonInput
          placeholder="City"
          value={formData.city}
          onChangeText={val => handleChange('city', val)}
        />
        <CommonInput
          placeholder="Address"
          value={formData.address}
          onChangeText={val => handleChange('address', val)}
        />

        {/* Submit */}
        <PrimaryButton
          label="Add"
          onPress={() => {
            navigation.navigate("OtpVerificationScreen")
          }}
        />
      </ScrollView>
    </View>
  );
};

export default BeneficiaryTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(40),
  },
});
