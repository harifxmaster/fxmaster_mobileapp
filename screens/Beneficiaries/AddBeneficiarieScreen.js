// screens/AddBeneficiaryScreen.js

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/CommonHeader';
import PrimaryButton from '../../components/PrimaryButton';
import SelectCurrencyDropdown from '../../components/SelectCurrencyDropdown';
import { scale, verticalScale, moderateScale } from '../../utils/responsive'; 
import { useNavigation } from '@react-navigation/native';


const RECENT_CURRENCIES = [
  { id: '1', name: 'GBP', flag: require('../../assets/gb.png') },
  { id: '2', name: 'USD', flag: require('../../assets/us.png') },
  { id: '3', name: 'Euro', flag: require('../../assets/eu.png') },
  { id: '4', name: 'INR', flag: require('../../assets/inr.png') },
  { id: '5', name: 'CAD', flag: require('../../assets/cad.png') },
  { id: '6', name: 'GBP', flag: require('../../assets/gb.png') },
  { id: '7', name: 'USD', flag: require('../../assets/us.png') },
];

const AddBeneficiaryScreen = () => {
      const navigation = useNavigation();
    
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  return (
    <View style={styles.container}>
      <Header
        title="Add Beneficiary"
        rightIcon={require('../../assets/home.png')}
        onRightPress={() => navigation.navigate('HomeScreen')}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Select Currency Dropdown */}
        <SelectCurrencyDropdown
          selectedCurrency={selectedCurrency}
          onSelectCurrency={setSelectedCurrency}
        />

        {/* Primary Button */}
        <PrimaryButton
          label="Proceed"
          onPress={() => navigation.navigate('SelectBeneficiary')}
        />

        {/* Recently Used */}
        <Text style={styles.sectionTitle}>Recently used currencies</Text>

      
       {RECENT_CURRENCIES.map(item => (
            <TouchableOpacity key={item.id}  style={styles.currencyRow}>
              <View style={styles.currencyInfo}>
                <Image source={item.flag} style={styles.flag} />
                <Text style={styles.currencyName}>{item.name}</Text>
              </View>
              <Image
                source={require('../../assets/right.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
         ))}
      </ScrollView>
    </View>
  );
};

export default AddBeneficiaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(40),
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginVertical: verticalScale(20),
    color: '#081C42',
  },
  currencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(14),
    borderWidth: scale(1),
    borderColor: '#001E3C',
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(12),
    marginBottom: verticalScale(12),
  },
  currencyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: scale(32),
    height: verticalScale(24),
    marginRight: scale(12),
    resizeMode: "contain",
  },
  currencyName: {
    fontSize: moderateScale(16),
    color: '#081C42',
    fontWeight: '500',
  },
  arrow: {
    width: scale(20),
    height: scale(20),
    tintColor: '#081C42',
    resizeMode: 'contain',
  },
});
