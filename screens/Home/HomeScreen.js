import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HomeHeader from './components/HomeHeader';
import CarouselCard from '../../components/CarouselCard';
import TransactionSection from '../../components/TransactionSection';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor:"#C9DDFF80"}}>
      <HomeHeader />
      <CarouselCard />
     
      <TransactionSection/>
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
  sectionPlaceholder: {
    height: 150,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#f1f1f1',
  },
});
