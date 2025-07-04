import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { scale,verticalScale,moderateScale } from '../utils/responsive';
const ToggleTabs = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tabButton,
          activeTab === 'Regular' && styles.activeTabButton,
        ]}
        onPress={() => onTabChange('Regular')}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Regular' && styles.activeTabText,
          ]}
        >
          Regular
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tabButton,
          activeTab === 'Priority' && styles.activeTabButton,
        ]}
        onPress={() => onTabChange('Priority')}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'Priority' && styles.activeTabText,
          ]}
        >
          Priority
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 14,
    marginVertical: verticalScale(20),
  },
  tabButton: {
    paddingVertical: verticalScale(7),
    paddingHorizontal: scale(32),
    borderRadius: moderateScale(30),
    borderWidth: 2,
    borderColor: '#001E3C',
    backgroundColor: '#fff',
  },
  activeTabButton: {
    backgroundColor: '#001E3C',
  },
  tabText: {
    color: '#001E3C',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
});
