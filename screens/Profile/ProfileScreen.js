import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale, verticalScale, moderateScale } from '../../utils/responsive';
import { privacy } from '../../assets/';

const menuItems = [
  {
    label: 'Edit Profile',
    icon: require('../../assets/edit.png'),
    route: 'EditProfile',
  },
  {
    label: 'Reset Login Pin',
    icon: require('../../assets/reset.png'),
    route: 'ResetPin',
  },
  {
    label: 'Privacy Policy',
    icon: require('../../assets/privacy.png'),
    route: 'PrivacyPolicy',
  },
  {
    label: 'Terms & Conditions',
    icon: require('../../assets/terms.png'),
    route: 'TermsConditions',
  },
  {
    label: 'Cookies',
    icon: require('../../assets/cookies.png'),
    route: 'Cookies',
  },
  {
    label: 'Logout',
    icon: require('../../assets/logout.png'),
    route: 'Logout',
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-sharp" size={24} color="#081C42" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/profile.png')}
          style={styles.avatar}
        />
        <View style={styles.nameSection}>
          <Text style={styles.name}>Arianna Craigg</Text>
          <Text style={styles.memberId}>Membership ID : 190079084</Text>
        </View>
      </View>

      {/* Menu List */}
      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.route)}
          >
            <View style={styles.menuLeft}>
                <Image source={item.icon} style={styles.menuIcon} resizeMode="contain" />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            <Icon name="chevron-forward-sharp" size={20} color="#081C42" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: scale(16),
    paddingBottom: verticalScale(30),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(20),
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#121722',
  },
  profileSection: {
    marginVertical: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(36),
    marginBottom: verticalScale(8),
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(16),
    color: '#000000',
  },
  memberId: {
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(12),
    color: '#000000',
    marginTop: verticalScale(2),
  },
  menuList: {
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    marginLeft: scale(12),
    fontSize: moderateScale(14),
    color: '#121722',
  },
  nameSection: {
    marginLeft: scale(10),
  },
  arrowIcon: {
    width: scale(14),
    height: scale(14),
  },
});
