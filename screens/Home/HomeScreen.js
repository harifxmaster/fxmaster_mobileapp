import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HomeHeader from './components/HomeHeader';
import CarouselCard from '../../components/CarouselCard';
import TransactionSection from '../../components/TransactionSection';

const HomeScreen = () => {
  const [carouselLoading, setCarouselLoading] = useState(true);
  const [transactionLoading, setTransactionLoading] = useState(true);

  useEffect(() => {
    // Dummy API call for CarouselCard
    setTimeout(() => {
      setCarouselLoading(false);
    }, 2000); // 2 sec delay to simulate API

    // Dummy API call for TransactionSection
    setTimeout(() => {
      setTransactionLoading(false);
    }, 3000); // 3 sec delay to simulate API
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "#C9DDFF80" }}>
        <HomeHeader />

        {/* Pass loading prop */}
        <CarouselCard loading={carouselLoading} />

        <TransactionSection loading={transactionLoading} />
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
