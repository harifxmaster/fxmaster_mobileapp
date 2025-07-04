// components/SelectCurrencyDropdown.js

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { scale, verticalScale, moderateScale } from '../utils/responsive'; 


const DROPDOWN_DATA = [
  { id: '1', name: 'British Pound (GBP)', flag: require('../assets/gb.png') },
  { id: '2', name: 'India (INR)', flag: require('../assets/inr.png') },
  { id: '3', name: 'USA (USD)', flag: require('../assets/us.png') },
];

const SelectCurrencyDropdown = ({ selectedCurrency, onSelectCurrency }) => {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState('');

  const filteredData = DROPDOWN_DATA.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.wrapper}>
     <TouchableOpacity
  style={styles.dropdown}
  onPress={() => setExpanded(!expanded)}
>
  <View style={styles.selectedContainer}>
    {selectedCurrency?.flag && (
      <Image source={selectedCurrency.flag} style={styles.flag} />
    )}
    <Text style={styles.dropdownText}>
      {selectedCurrency?.name || 'Select Currency'}
    </Text>
  </View>
  <Image
    source={
      expanded
        ? require('../assets/up.png')
        : require('../assets/down.png')
    }
    style={styles.arrowIcon}
  />
</TouchableOpacity>

      {expanded && (
        <View style={styles.dropdownList}>
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />

        
            {filteredData.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.dropdownItem}
                onPress={() => {
                  onSelectCurrency(item);
                  setExpanded(false);
                }}
              >
                <Image source={item.flag} style={styles.flag} />
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
         
             ))}
        </View>
      )}
    </View>
  );
};

export default SelectCurrencyDropdown;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: verticalScale(20),
    position: 'relative',
    zIndex: 10,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EAF1FF',
    borderRadius: moderateScale(8),
    padding: scale(16),
  },
dropdownText: {
  fontSize: moderateScale(16),
  color: '#081C42',
  marginLeft: scale(8), // new
},
  arrowIcon: {
    width: scale(18),
    height: scale(18),
    tintColor: '#081C42',
  },
  dropdownList: {
    position: 'absolute',
    top: verticalScale(60), 
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: '#d1d1d1',
    zIndex: 1000,
    elevation: 5,
  },
  searchInput: {
    padding: scale(12),
    borderBottomWidth: scale(1),
    borderColor: '#ccc',
    fontSize: moderateScale(14),
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(12),
  },
  flag: {
    width: scale(32),
    height: verticalScale(24),
    marginRight: scale(12),
    resizeMode: "contain",
  },
  itemText: {
    fontSize: moderateScale(14),
    color: '#444',
  },
  selectedContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
},
});
