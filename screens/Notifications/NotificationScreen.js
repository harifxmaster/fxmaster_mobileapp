import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import NotificationItem from '../../components/NotificationItem';
import { verticalScale, scale, moderateScale } from '../../utils/responsive';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  {
    id: '1',
    avatar: require('../../assets/user1.png'),
    message: 'Your payment of',
    actionText: 'Upload Documents',
    time: '9:01am',
  },
  {
    id: '2',
    avatar: require('../../assets/user2.png'),
    message: 'Your payment of',
    actionText: 'PAY',
    time: '9:01am',
  },
  {
    id: '3',
    avatar: require('../../assets/user1.png'),
    message: 'Your payment of',
    actionText: 'Upload Documents',
    time: '9:01am',
  },
  {
    id: '4',
    avatar: require('../../assets/user2.png'),
    message: 'Your payment of',
    actionText: 'PAY',
    time: '9:01am',
  },
];

const NotificationScreen = () => {
  const navigation = useNavigation();
  const handleAction = type => {
    console.log(`Clicked on: ${type}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require('../../assets/left.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            avatar={item.avatar}
            message={item.message}
            actionText={item.actionText}
            time={item.time}
            onActionPress={() => handleAction(item.actionText)}
          />
        )}
        contentContainerStyle={{ paddingBottom: verticalScale(20) }}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        windowSize={10}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: verticalScale(20),
  },
  headerRow: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(48),
    marginBottom: verticalScale(12),
  },
  backButton: {
    position: 'absolute',
    left: scale(5),
    padding: scale(4),
  },

  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(18),
    color: '#081C42',
  },
  backIcon: {
    width: scale(40),
    height: verticalScale(40),
  },
});
