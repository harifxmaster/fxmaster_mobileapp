import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HomeHeader from './components/HomeHeader';
import CarouselCard from '../../components/CarouselCard';
import TransactionSection from '../../components/TransactionSection';
import { getTransactions } from '../../store/slices/transactionSlice';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [carouselLoading, setCarouselLoading] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(true);

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

  useEffect(() => {
    // Dummy API call for CarouselCard
    setTimeout(() => {
      setCarouselLoading(false);
    }, 2000);

    // Dummy API call for TransactionSection
    setTimeout(() => {
      setTransactionLoading(false);
    }, 3000);
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: '#C9DDFF80' }}>

        <HomeHeader />

        <CarouselCard loading={carouselLoading} />

        <TransactionSection
          transactions={transactions}
          loading={loading}
          title="Recent Transactions"
          onPressSeeAll={() => navigation.navigate('AllTransaction')}
        />
        
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
