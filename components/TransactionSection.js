import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { scale, verticalScale, moderateScale } from '../utils/responsive';
import { useNavigation } from '@react-navigation/native';

import Loader from './Loader';

const TransactionSection = ({
  transactions = [],
  loading = false,
  title = 'Transactions',
  showSeeAll = true,
  seeAllText = 'See All',
  onPressSeeAll,
}) => {
  const navigation = useNavigation();

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader isVisible={true} />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemRow}
      onPress={() =>
        navigation.navigate('SingleTransactionInfo', { transactionId: item.id })
      }
    >
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.detailsColumn}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Image source={item.flag} style={styles.flag} />
        </View>
        <Text style={styles.date}>Sent on {item.date}</Text>
      </View>
      <Text
        style={[styles.amount, { color: item.isPositive ? 'green' : 'red' }]}
      >
        {item.amount}
      </Text>
    </TouchableOpacity>
  );

  // if (error) {
  //   return <Text style={{ color: 'red' }}>{error}</Text>;
  // }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        {showSeeAll && (
          <TouchableOpacity>
            <Text onPress={onPressSeeAll} style={styles.viewAll}>
              {seeAllText}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={transactions}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </View>
  );
};

export default TransactionSection;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(20),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(16),
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#081C42',
  },
  viewAll: {
    fontSize: moderateScale(14),
    color: '#081C42',
    textDecorationLine: 'underline',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(16),
  },
  avatar: {
    width: scale(46),
    height: scale(46),
    borderRadius: scale(23),
    marginRight: scale(12),
  },
  detailsColumn: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(5),
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(14),
    color: '#000',
    marginRight: scale(6),
  },
  flag: {
    width: scale(18),
    height: scale(12),
    resizeMode: 'stretch',
  },
  date: {
    fontFamily: 'Poppins-Light',
    fontSize: moderateScale(12),
    color: '#444',
    marginTop: verticalScale(2),
  },
  amount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(16),
  },
  loaderContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
