import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/CommonHeader';
import { scale, verticalScale, moderateScale } from '../../utils/responsive';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const EnterAmountScreen = () => {
  const [usdAmount, setUsdAmount] = useState('');
  const [inrAmount, setInrAmount] = useState('');
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);

  const [fromCurrency, setFromCurrency] = useState({
    flag: require('../../assets/gb.png'),
    code: 'GBP',
  });

  const [toCurrency, setToCurrency] = useState({
    flag: require('../../assets/eu.png'),
    code: 'INR',
  });

  const currencyOptions = [
    { flag: require('../../assets/gb.png'), code: 'GBP' },
    { flag: require('../../assets/us.png'), code: 'USD' },
    { flag: require('../../assets/eu.png'), code: 'EUR' },
  ];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Reusable Header */}
      <Header
        title="Enter Amount"
        rightIcon={require('../../assets/home.png')}
        onRightPress={() => console.log('Right icon pressed')}
      />

      {/* Converter Rate */}
      <View style={styles.rateContainer}>
        <Text style={styles.rateText}>1.00 USD = 86.02 INR</Text>
        <View style={styles.pointer} />
      </View>

      {/* Currency Converter */}
      <View style={styles.converterContainer}>
        {/* From Currency */}
        <View style={[styles.card, styles.cardLight]}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
            >
              <Image source={fromCurrency.flag} style={styles.flag} />
              <Text style={styles.currencyText}>{fromCurrency.code}</Text>
              <Image
                source={require('../../assets/down.png')}
                style={styles.arrowDown}
              />
            </TouchableOpacity>
            {isFromDropdownOpen && (
              <View style={styles.dropdown}>
                {currencyOptions.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setFromCurrency(item);
                      setIsFromDropdownOpen(false);
                    }}
                  >
                    <Image source={item.flag} style={styles.flag} />
                    <Text style={styles.currencyText}>{item.code}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <Text style={styles.amountText}>$0.00</Text>
          </View>
        </View>

        {/* To Currency */}
        <View style={[styles.card, styles.cardDark]}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setIsToDropdownOpen(!isToDropdownOpen)}
            >
              <Image source={toCurrency.flag} style={styles.flag} />
              <Text style={[styles.currencyText, { color: '#fff' }]}>
                {toCurrency.code}
              </Text>
              <Image
                source={require('../../assets/down.png')}
                style={styles.arrowDown}
              />
            </TouchableOpacity>
            {isToDropdownOpen && (
              <View style={[styles.dropdown, { backgroundColor: '#fff' }]}>
                {currencyOptions.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setToCurrency(item);
                      setIsToDropdownOpen(false);
                    }}
                  >
                    <Image source={item.flag} style={styles.flag} />
                    <Text style={styles.currencyText}>{item.code}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <Text style={[styles.amountText, { color: '#fff' }]}>₹0.00</Text>
          </View>
        </View>

        {/* Switch Icon */}
        <TouchableOpacity style={styles.switchButton}>
          <Image
            source={require('../../assets/switch.png')}
            style={styles.switchIcon}
          />
        </TouchableOpacity>
      </View>

      <PrimaryButton
        label="Continue"
        onPress={() => navigation.navigate('BeneficiariesScreen')}
      />
    </View>
  );
};

export default EnterAmountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: moderateScale(20),
  },
  rateContainer: {
    backgroundColor: '#DCE5FC',
    borderRadius: moderateScale(8),
    padding: moderateScale(15),
    marginVertical: verticalScale(20),
    alignItems: 'center',
    position: 'relative',
  },
  rateText: {
    fontWeight: 'bold',
    color: '#081C42',
    fontSize: moderateScale(14),
  },
  pointer: {
    position: 'absolute',
    bottom: verticalScale(-6),
    width: scale(12),
    height: verticalScale(12),
    backgroundColor: '#DCE5FC',
    transform: [{ rotate: '45deg' }],
  },
  converterContainer: {
    marginTop: verticalScale(30),
    position: 'relative',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderRadius: moderateScale(10),
    padding: moderateScale(35),
    marginVertical: verticalScale(5),
  },
  cardLight: {
    backgroundColor: '#DCE5FC',
  },
  cardDark: {
    backgroundColor: '#03194C',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flag: {
    width: scale(25),
    height: verticalScale(25),
    marginRight: scale(10),
  },
  currencyText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  amountText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  arrowDown: {
    width: scale(12),
    height: verticalScale(12),
    marginLeft: scale(5),
    resizeMode: 'contain',
  },
  switchButton: {
    position: 'absolute',
    top: '40%',
    backgroundColor: '#fff',
    padding: moderateScale(10),
    borderRadius: scale(25),
    zIndex: 10,
  },
  switchIcon: {
    width: scale(20),
    height: verticalScale(20),
  },
  continueButton: {
    marginTop: verticalScale(40),
    backgroundColor: '#03194C',
    borderRadius: moderateScale(8),
    padding: moderateScale(15),
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  dropdown: {
    position: 'absolute',
    top: verticalScale(70),
    left: scale(20),
    right: scale(20),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: moderateScale(8),
    zIndex: 100,
    paddingVertical: verticalScale(10),
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
  },
});
