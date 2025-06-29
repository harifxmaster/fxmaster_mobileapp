import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text,Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale,moderateScale } from '../utils/responsive';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6;

const cardData = [
  {
    title: 'GBP',
    currencySymbol: '£',
    amount: '11025483.00',
    flag: require('../assets/gb.png'), // 🇬🇧 update path if needed
  },
  {
    title: 'USD',
    currencySymbol: '$',
    amount: '11025483.00',
    flag: require('../assets/us.png'), // 🇺🇸 update path if needed
  },
  {
    title: 'EUR',
    currencySymbol: '€',
    amount: '752003.00',
    flag: require('../assets/eu.png'), // 🇪🇺 optional
  },
  {
    isAddCard: true,
  },
];

const CarouselCard = () => {
    const navigation = useNavigation();
  const renderItem = ({ item }) => {
    if (item.isAddCard) {
      return (
        <TouchableOpacity
          style={[styles.card, styles.addCard]}
          onPress={() => navigation.navigate('AddCurrencyScreen')}
        >
          <Image
            source={require('../assets/add.png')}
            style={styles.addIcon}
            resizeMode="contain"
          />
          <Text style={styles.addText}>Add Currency</Text>
        </TouchableOpacity>
      );
    }

    const { title, amount, currencySymbol, flag } = item;
    return(
     <TouchableOpacity
        onPress={() => navigation.navigate('CurrencyScreen', { currency: title })}
        activeOpacity={0.9}
      >
     <LinearGradient
      colors={['#3F67AC', '#151E37', '#131831','#EB6509' ]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.card}
    >
       <View style={styles.headerRow}>
        <Image source={flag} style={styles.flag} resizeMode="contain" />
        <Text style={styles.currency}>{title}</Text>
      </View>

      <View style={styles.balanceBlock}>
        <Text style={styles.label}>Total Balance</Text>
        <Text style={styles.amount}>{currencySymbol}{amount}</Text>
      </View>

      <View style={styles.balanceBlock}>
        <Text style={styles.label}>Available Balance</Text>
        <Text style={styles.amount}>{currencySymbol}{amount}</Text>
      </View>
    </LinearGradient>
    </TouchableOpacity>
  )}

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={cardData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={CARD_WIDTH + 16}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: scale(16) }}
      />
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(16),
  },
card: {
    width: CARD_WIDTH,
    borderRadius:moderateScale(20),
    padding: 16,
    marginRight: scale(16),
  },
  title: {
    fontSize: moderateScale(16),
    color: '#333',
  },
  flag: {
    width: scale(32),
    height: verticalScale(32),
    marginRight:scale(8),
    borderRadius: moderateScale(16),
  },
  currency: {
    color: '#fff',
    fontSize:moderateScale(18),
    fontWeight: 'bold',
  },
  balanceBlock: {
    marginBottom: verticalScale(12),
  },
  label: {
    color: '#fff',
    fontSize: moderateScale(14),
  },
  amount: {
    color: '#fff',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
  },
   headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(16),
  },
  addCard: {
    backgroundColor: '#081C42',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: moderateScale(40),
    color: '#F2630B',
    fontWeight: 'bold',
  },
  addText: {
    fontSize: moderateScale(20),
    color: '#C9DDFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: verticalScale(4),
  },
});

// import React from 'react';
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Dimensions,
//   Text,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { scale, verticalScale, moderateScale } from '../utils/responsive';
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.6;

// const cardData = [
//   {
//     title: 'GBP',
//     currencySymbol: '£',
//     amount: '11025483.00',
//     flag: require('../assets/gb.png'),
//   },
//   {
//     title: 'USD',
//     currencySymbol: '$',
//     amount: '11025483.00',
//     flag: require('../assets/us.png'),
//   },
//   {
//     title: 'EUR',
//     currencySymbol: '€',
//     amount: '752003.00',
//     flag: require('../assets/eu.png'),
//   },
//   {
//     isAddCard: true,
//   },
// ];

// const CarouselCard = () => {
//   const navigation = useNavigation();

//   const renderItem = ({ item }) => {
//     if (item.isAddCard) {
//       return (
//         <TouchableOpacity
//           style={[styles.card, styles.addCard]}
//           onPress={() => navigation.navigate('AddCurrencyScreen')}
//         >
//           <Image
//             source={require('../assets/add.png')}
//             style={styles.addIcon}
//             resizeMode="contain"
//           />
//           <Text style={styles.addText}>Add Currency</Text>
//         </TouchableOpacity>
//       );
//     }

//     const { title, amount, currencySymbol, flag } = item;
//     return (
//       <TouchableOpacity
//         onPress={() => navigation.navigate('CurrencyScreen', { currency: title })}
//         activeOpacity={0.9}
//       >
//         <LinearGradient
//           colors={['#3F67AC', '#151E37', '#131831', '#EB6509']}
//           start={{ x: 1, y: 0 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.card}
//         >
//           <View style={styles.headerRow}>
//             <Image source={flag} style={styles.flag} resizeMode="contain" />
//             <Text style={styles.currency}>{title}</Text>
//           </View>

//           <View style={styles.balanceBlock}>
//             <Text style={styles.label}>Total Balance</Text>
//             <Text style={styles.amount}>{currencySymbol}{amount}</Text>
//           </View>

//           <View style={styles.balanceBlock}>
//             <Text style={styles.label}>Available Balance</Text>
//             <Text style={styles.amount}>{currencySymbol}{amount}</Text>
//           </View>
//         </LinearGradient>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.wrapper}>
//       <FlatList
//         data={cardData}
//         keyExtractor={(_, index) => index.toString()}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         snapToAlignment="start"
//         snapToInterval={CARD_WIDTH + 16}
//         decelerationRate="fast"
//         contentContainerStyle={{ paddingHorizontal: scale(16) }}
//       />
//     </View>
//   );
// };

// export default CarouselCard;

// const styles = StyleSheet.create({
//   wrapper: {
//     marginTop: verticalScale(20),
//     marginBottom: verticalScale(16),
//   },
//   card: {
//     width: CARD_WIDTH,
//     borderRadius: moderateScale(20),
//     padding: 16,
//     marginRight: scale(16),
//   },
//   title: {
//     fontSize: moderateScale(16),
//     color: '#333',
//   },
//   flag: {
//     width: scale(32),
//     height: verticalScale(32),
//     marginRight: scale(8),
//     borderRadius: moderateScale(16),
//   },
//   currency: {
//     color: '#fff',
//     fontSize: moderateScale(18),
//     fontWeight: 'bold',
//   },
//   balanceBlock: {
//     marginBottom: verticalScale(12),
//   },
//   label: {
//     color: '#fff',
//     fontSize: moderateScale(14),
//   },
//   amount: {
//     color: '#fff',
//     fontSize: moderateScale(22),
//     fontWeight: 'bold',
//   },
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: verticalScale(16),
//   },
//   addCard: {
//     backgroundColor: '#081C42',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addIcon: {
//     width: scale(36),
//     height: verticalScale(36),
//     marginBottom: verticalScale(6),
//   },
//   addText: {
//     fontSize: moderateScale(16),
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

