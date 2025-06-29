import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, verticalScale } from '../../../utils/responsive';
import { useNavigation } from '@react-navigation/native';


const HomeHeader = () => {
    const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
     
       <Image
        source={require('../../../assets/FXMaster-2x.png')}
        style={styles.logo}
        resizeMode="contain"
      />

    
      <View style={styles.rightIcons}>
        
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')} style={styles.iconButton}>
          <Ionicons name="notifications-circle" size={35} color="#081C42" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('ProfileScreen')}>
          <Image
            source={require('../../../assets/profile.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:scale(16) ,
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: scale(12),
  },
  avatar: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    backgroundColor: '#ccc',
  },
  logo: {
    width: scale(140),
    height: verticalScale(30),
  },
});
