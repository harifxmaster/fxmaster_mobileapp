import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale } from '../utils/responsive';

const CommonHeader = ({ title, rightIcon, onRightPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.leftIcon}
      >
        <Image
          source={require('../assets/left.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.rightIcon}>
          <Image source={rightIcon} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      ) : (
        <View style={styles.rightPlaceholder} />
      )}
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(16),
    backgroundColor: '#fff',
  },
  leftIcon: {
    width: scale(30),
    height: scale(30),
  },
  rightIcon: {
    width: scale(25),
    height: scale(25),
  },
  rightPlaceholder: {
    width: scale(30),
    height: scale(30),
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: '#081C42',
    textAlign: 'center',
    flex: 1,
  },
});
