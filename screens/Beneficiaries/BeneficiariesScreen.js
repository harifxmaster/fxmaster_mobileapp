import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from '../../utils/responsive';

// Dummy beneficiary data
const beneficiaries = [
  {
    id: '1',
    name: 'Amit Kumar',
    country: '🇬🇧',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user1.png'),
  },
  {
    id: '2',
    name: 'Alexander',
    country: '🇮🇳',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user2.png'),
  },
  {
    id: '3',
    name: 'Benjamin',
    country: '🇬🇧',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user1.png'),
  },
  {
    id: '4',
    name: 'Balaji',
    country: '🇺🇸',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user2.png'),
  },
  {
    id: '5',
    name: 'Chetan',
    country: '🇩🇪',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user1.png'),
  },
  {
    id: '6',
    name: 'Alexander',
    country: '🇮🇳',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user2.png'),
  },
  {
    id: '7',
    name: 'Benjamin',
    country: '🇬🇧',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user1.png'),
  },
  {
    id: '8',
    name: 'Balaji',
    country: '🇺🇸',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user2.png'),
  },
  {
    id: '9',
    name: 'Chetan',
    country: '🇩🇪',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user1.png'),
  },
  {
    id: '10',
    name: 'Alexander',
    country: '🇮🇳',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user2.png'),
  },
  {
    id: '11',
    name: 'Benjamin',
    country: '🇬🇧',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user1.png'),
  },
  {
    id: '12',
    name: 'Balaji',
    country: '🇺🇸',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user2.png'),
  },
  {
    id: '13',
    name: 'Zain',
    country: '🇩🇪',
    account: '3025463201 (SBIN2001)',
    avatar: require('../../assets/user1.png'),
  },
];

// 📌 Helper to group by alphabet
const groupBeneficiariesByAlphabet = data => {
  const grouped = {};
  data.forEach(item => {
    const letter = item.name[0].toUpperCase();
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(item);
  });

  // Convert to SectionList format
  return Object.keys(grouped)
    .sort()
    .map(letter => ({
      title: letter,
      data: grouped[letter],
    }));
};

const BeneficiariesScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  // Filter by name
  const filteredData = beneficiaries.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const sections = groupBeneficiariesByAlphabet(filteredData);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/left.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Beneficiary List</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddBeneficiary')}>
          <Image
            source={require('../../assets/plus.png')}
            style={styles.iconCircle}
          />
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search beneficiaries"
          placeholderTextColor="#081C42"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
        <Image
          source={require('../../assets/search.png')}
          style={styles.searchIcon}
        />
      </View>

      {/* SECTION LIST */}
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(80),
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>
                {item.name} {item.country}
              </Text>
              <Text style={styles.account}>{item.account}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentDetailsScreen')}
              style={styles.payButton}
            >
              <Image
                source={require('../../assets/send.png')}
                style={styles.sendIcon}
                resizeMode="contain"
              />
              <Text style={styles.payText}>Pay</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default BeneficiariesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: scale(16),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(18),
    fontFamily: 'Poppins-SemiBold',
    color: '#081C42',
  },
  icon: {
    width: scale(40),
    height: scale(40),
    resizeMode: 'contain',
  },
  iconCircle: {
    width: scale(34),
    height: scale(34),
    borderRadius: scale(17),
    backgroundColor: '#081C42',
    padding: scale(6),
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#E6EEFF',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    marginBottom: verticalScale(12),
    marginTop: verticalScale(20),
  },
  searchInput: {
    flex: 1,
    height: verticalScale(40),
    fontSize: moderateScale(14),
  },
  searchIcon: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
  },
  sectionHeader: {
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-Bold',
    marginTop: verticalScale(12),
    marginBottom: verticalScale(4),
    color: '#081C42',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(30),
  },
  avatar: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    marginRight: scale(12),
  },
  info: {
    flex: 1,
  },
  name: {
    marginBottom: scale(9),
    fontFamily: 'Poppins-ExtraBold',
    fontSize: moderateScale(14),
    color: '#081C42',
  },
  account: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(12),
    color: '#666',
  },
  payButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: scale(6),
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(5),
  },
  payText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(12),
  },
  sendIcon: {
    width: scale(14),
    height: scale(14),
    marginRight: scale(4),
  },
});
