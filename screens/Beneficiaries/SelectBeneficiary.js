// screens/SelectBeneficiaryScreen.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Header from '../../components/CommonHeader';
import { scale, verticalScale, moderateScale } from '../../utils/responsive';
import { useNavigation } from '@react-navigation/native';

const BENEFICIARY_DATA = [
  {
    id: '1',
    icon: require('../../assets/self.png'),
    label: 'Self Transaction',
  },
  {
    id: '2',
    icon: require('../../assets/personplus.png'),
    label: 'Another person',
  },
  {
    id: '3',
    icon: require('../../assets/business.png'),
    label: 'Business/Welfare',
  },
];

const BeneficiaryCard = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.leftIconWrapper}>
      <Image source={icon} style={styles.leftIcon} resizeMode="contain" />
    </View>
    <Text style={styles.label}>{label}</Text>
    <Image
      source={require('../../assets/right.png')}
      style={styles.rightIcon}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const SelectBeneficiary = () => {
      const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <Header
        title="Select Beneficiary"
        rightIcon={require('../../assets/home.png')}
        onRightPress={() => navigation.navigate('HomeScreen')}
      />

      <View style={styles.cardsWrapper}>
        {BENEFICIARY_DATA.map(item => (
          <BeneficiaryCard
            key={item.id}
            icon={item.icon}
            label={item.label}
            onPress={() => {
              navigation.navigate('BeneficiaryTypeScreen')
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default SelectBeneficiary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(20),
  },
  cardsWrapper: {
    marginTop: verticalScale(35),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#001E3C',
    borderRadius: moderateScale(12),
    paddingVertical: verticalScale(25),
    paddingHorizontal: scale(16),
    marginBottom: verticalScale(20),
  },
  leftIconWrapper: {
    backgroundColor: '#EB6509',
    borderRadius: moderateScale(50),
    width: scale(48),
    height: scale(48),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(16),
  },
  leftIcon: {
    width: scale(30),
    height: scale(30),
    // tintColor: '#fff',
  },
  label: {
    flex: 1,
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  rightIcon: {
    width: scale(18),
    height: scale(18),
    tintColor: '#fff',
  },
});
