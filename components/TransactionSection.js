import React from 'react';
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

const transactions = [
  {
    id: 1,
    name: 'Alexander',
    flag: require('../assets/gb.png'),
    avatar: require('../assets/user1.png'),
    date: '01/08/25, 13.00 GMT',
    amount: '+£1104.00',
    isPositive: true,
  },
  {
    id: 2,
    name: 'Alexander',
    flag: require('../assets/gb.png'),
    avatar: require('../assets/user2.png'),
    date: '01/08/25, 13.00 GMT',
    amount: '-£1104.00',
    isPositive: false,
  },
  {
    id: 3,
    name: 'Alexander',
    flag: require('../assets/gb.png'),
    avatar: require('../assets/user1.png'),
    date: '01/08/25, 13.00 GMT',
    amount: '+£1104.00',
    isPositive: true,
  },
  {
    id: 4,
    name: 'Alexander',
    flag: require('../assets/gb.png'),
    avatar: require('../assets/user2.png'),
    date: '01/08/25, 13.00 GMT',
    amount: '+£1104.00',
    isPositive: true,
  },
];

const TransactionSection = () => {
  const navigation = useNavigation();
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

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Transactions</Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('AllTransaction')}
            style={styles.viewAll}
          >
            See All
          </Text>
        </TouchableOpacity>
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
});
