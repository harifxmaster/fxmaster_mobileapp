import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../utils/responsive';

const NotificationItem = ({
  avatar,
  message,
  actionText,
  time,
  onActionPress,
}) => {
  return (
    <View style={styles.row}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.messageBlock}>
        <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
          {message}
          <Text style={styles.highlight}> $780.1 </Text>
          is pending please{' '}
          <Text style={styles.link} onPress={onActionPress}>
            {actionText}
          </Text>
        </Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    height: verticalScale(100),
    width: '95%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    marginRight: scale(12),
    marginTop: verticalScale(4),
  },
  messageBlock: {
    flex: 1,
  },
  text: {
    fontSize: moderateScale(13),
    color: '#081C42',
    lineHeight: moderateScale(18),
    fontFamily: 'Poppins-Regular',
    width: '100%',
  },
  highlight: {
    color: '#0866C6',
    fontFamily: 'Poppins-SemiBold',
  },
  link: {
    color: '#081C42',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  time: {
    fontSize: moderateScale(11),
    color: '#666',
    marginTop: verticalScale(4),
    fontFamily: 'Poppins-Light',
  },
});
