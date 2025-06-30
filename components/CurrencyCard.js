// components/CurrencyCard.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CurrencyCard = ({ currency, balance, flag, actions = [] }) => {
  return (
    <View style={styles.card}>
      {/* Top section: flag, currency, balance */}
      <View style={styles.row}>
        <View style={styles.currencyRow}>
          <Image source={flag} style={styles.flag} />
          <Text style={styles.currency}>{currency}</Text>
        </View>
        <Text style={styles.balance}>{balance}</Text>
      </View>

      {/* Action section with gradient */}
      <LinearGradient
        colors={['#3F67AC', '#151E37', '#131831', '#EB6509']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.actionRow}
      >
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={styles.actionButton}
            onPress={action.onPress}
          >
            <View style={styles.iconCircle}>
              <Image
                source={action.icon}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </LinearGradient>
    </View>
  );
};

export default CurrencyCard;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  currencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  currency: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#081C42',
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#081C42',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  actionLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
});
