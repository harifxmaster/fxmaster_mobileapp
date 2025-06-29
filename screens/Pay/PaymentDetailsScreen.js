import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/responsive';
import { useNavigation } from '@react-navigation/native';

const PaymentDetailsScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState('bank');
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();

  const handleSelectMethod = method => {
    setSelectedMethod(method);
  };

  const renderCheckIcon = method => {
    const isSelected = selectedMethod === method;

    return (
      <Image
        source={
          isSelected
            ? require('../../assets/checkorange.png')
            : require('../../assets/checkdisabled.png')
        }
        style={styles.checkIcon}
        resizeMode="contain"
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/left.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>PAY</Text>

        {/* Empty spacer to balance the left back button */}
        <View style={{ width: scale(30) }} />
      </View>

      {/* Beneficiary */}
      <View style={styles.beneficiary}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Alexander Adams</Text>
          <Text style={styles.balance}>🇬🇧 GBP (Balance - 1000)</Text>
        </View>
      </View>

      {/* Amount Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputCurrency}>GBP</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Amount"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      {/* Payment Methods */}
      <Text style={styles.selectText}>Select payment Method</Text>

      {/* Pay with balance - NO check icon */}
      <TouchableOpacity style={styles.methodRow} onPress={() => {}}>
        <View style={styles.methodLeft}>
          <Image
            source={require('../../assets/wallet.png')}
            style={styles.icon}
          />
          <Text style={styles.methodText}>Pay with balance</Text>
        </View>
      </TouchableOpacity>

      {/* Bank Transfer */}
      <TouchableOpacity
        style={styles.methodRow}
        onPress={() => handleSelectMethod('bank')}
      >
        <View style={styles.methodLeft}>
          <Image
            source={require('../../assets/bank.png')}
            style={styles.icon}
          />
          <View>
            <Text style={styles.methodText}>Bank transfer</Text>
            <Text style={styles.subText}>Faster Payments from bank</Text>
          </View>
        </View>
        {renderCheckIcon('bank')}
      </TouchableOpacity>

      {/* Card */}
      <TouchableOpacity
        style={styles.methodRow}
        onPress={() => handleSelectMethod('card')}
      >
        <View style={styles.methodLeft}>
          <Image
            source={require('../../assets/card.png')}
            style={styles.icon}
          />
          <View>
            <Text style={styles.methodText}>Yes bank LTD</Text>
            <Text style={styles.subText}>visa...5661</Text>
          </View>
        </View>
        {renderCheckIcon('card')}
      </TouchableOpacity>

      {/* Add Card */}
      <View style={styles.addContainer}>
        <Text>Add Card</Text>
      </View>

      {/* Fee Summary */}
      <View style={styles.feeBlock}>
        <View style={styles.feeRow}>
          <Text style={styles.feeLabel}>Currency To pay in</Text>
          <Text style={[styles.feeValue, styles.link]}>British Pound</Text>
        </View>

        <View style={styles.feeRow}>
          <Text style={styles.feeLabel}>Our Fee</Text>
          <Text style={styles.feeValue}>0.00 GBP</Text>
        </View>

        {selectedMethod === 'card' && (
          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Card Fee</Text>
            <Text style={styles.feeValue}>0.00 GBP</Text>
          </View>
        )}

        {selectedMethod === 'card' && <View style={styles.dottedLine} />}

        <View style={styles.feeRow}>
          <Text style={styles.feeLabel}>Total you'll pay</Text>
          <Text style={styles.feeValue}>£500 GBP</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
    backgroundColor: '#fff',
  },
  beneficiary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  avatar: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    marginRight: scale(10),
  },
  name: { fontWeight: 'bold', fontSize: moderateScale(16) },
  balance: { color: '#666' },
  inputContainer: {
    backgroundColor: '#DCE5FC',
    borderRadius: scale(8),
    padding: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  addContainer: {
    backgroundColor: '#DCE5FC',
    borderRadius: scale(8),
    paddingVertical: verticalScale(18),
    paddingHorizontal: scale(18),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(12),
  },
  inputCurrency: {
    marginRight: scale(8),
    fontWeight: 'bold',
    color: '#081C42',
  },
  textInput: {
    flex: 1,
    color: '#081C42',
    fontSize: moderateScale(16),
  },
  selectText: {
    fontWeight: 'bold',
    marginTop: verticalScale(20),
  },
  methodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#03194C',
    borderRadius: scale(8),
    padding: scale(15),
    marginTop: verticalScale(12),
    height: verticalScale(60), // Consistent height
    alignItems: 'center',
  },
  methodLeft: { flexDirection: 'row', alignItems: 'center' },
  icon: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    marginRight: scale(10),
    backgroundColor: '#fff',
  },
  methodText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  subText: { color: '#fff', fontSize: moderateScale(12) },
  checkIcon: { width: scale(24), height: scale(24) },

  button: {
    backgroundColor: '#03194C',
    padding: scale(15),
    borderRadius: scale(8),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  feeBlock: {
    backgroundColor: '#fff',
    padding: scale(15),
    borderRadius: scale(8),
    marginVertical: verticalScale(20),
    borderWidth: 1,
    borderColor: '#ccc',
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // ✅ left & right align
    marginBottom: verticalScale(10),
  },
  feeLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  feeValue: {
    fontWeight: 'bold',
    color: '#333',
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dotted',
    marginBottom: verticalScale(10),
  },
  link: {
    textDecorationLine: 'underline',
    color: '#03194C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: scale(16),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#081C42',
  },
  backIcon: {
    width: scale(30),
    height: scale(30),
  },
});
