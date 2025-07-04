import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/CommonHeader';
import TransactionSection from '../../components/TransactionSection';
import { getTransactions } from '../../store/slices/transactionSlice';
import Toast from 'react-native-toast-message';
import { useNavigation,useRoute } from '@react-navigation/native';
import CurrencyCard from '../../components/CurrencyCard';
import eyeIcon from '../../assets/eye.png';
import addBlueIcon from '../../assets/addblue.png';
import convertIcon from '../../assets/convert.png';
import sendIcon from '../../assets/sendicon.png';


const CurrencyScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const route = useRoute();

  const { currency } = route.params || {}; // Pass from carousel
 const flag = currency === 'GBP'
    ? require('../../assets/gb.png')
    : currency === 'INR'
      ? require('../../assets/inr.png')
      : require('../../assets/us.png');

const commonActions = [
    {
      icon: sendIcon,
      label: 'Send',
      onPress: () => {},
    },
    {
      icon: convertIcon,
      label: 'Convert',
      onPress: () => {},
    },
  ];

  const gbpActions = [
    {
      icon: addBlueIcon,
      label: 'Add Money',
      onPress: () => {},
    },
    ...commonActions,
    {
      icon: eyeIcon,
      label: 'A/C Details',
      onPress: () => {},
    },
  ];

  const dispatch = useDispatch();
  const {
    list: transactions,
    loading,
    error,
  } = useSelector(state => state.transactions);

  useEffect(() => {
    dispatch(getTransactions())
      .unwrap()
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err || 'Something went wrong!',
        });
      });
  }, [dispatch]);

  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header title="Currency" />

       <CurrencyCard
        currency={currency || 'GBP'}
        balance="£ 50,076.00"
        flag={flag}
        actions={currency === 'GBP' ? gbpActions : commonActions}
      />

      <TransactionSection
         title={`Recent ${currency} Transactions`}
        transactions={transactions}
        showSeeAll={true}
        loading={loading}
        seeAllText="View All"
        onPressSeeAll={() => navigation.navigate('AllTransaction')}
      />
    </View>
  );
};

export default CurrencyScreen;
