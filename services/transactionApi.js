export const fetchTransactions = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return fake transaction data
  return [
    {
      id: 1,
      name: 'Alexander',
      countryCode: '🇬🇧',
      type: 'credit',
      amount: '+£1104.00',
      isPositive: true,
      date: '01/08/25, 13.00 GMT',
      avatar: require('../assets/user1.png'),
    },
    {
      id: 2,
      name: 'Alexander',
      countryCode: '🇬🇧',
      type: 'debit',
      amount: '-£1104.00',
      isPositive: false,
      date: '01/08/25, 13.00 GMT',
      avatar: require('../assets/user2.png'),
    },
    {
      id: 3,
      name: 'Alexander',
      countryCode: '🇬🇧',
      type: 'credit',
      amount: '-£1104.00',
      isPositive: false,
      date: '01/08/25, 13.00 GMT',
      avatar: require('../assets/user1.png'),
    },
    {
      id: 4,
      name: 'Alexander',
      countryCode: '🇬🇧',
      type: 'credit',
      amount: '+£1104.00',
      isPositive: true,
      date: '01/08/25, 13.00 GMT',
      avatar: require('../assets/user2.png'),
    },
    {
      id: 5,
      name: 'Alexander',
      countryCode: '🇬🇧',
      type: 'credit',
      amount: '+£1104.00',
      isPositive: true,
      date: '01/08/25, 13.00 GMT',
      avatar: require('../assets/user1.png'),
    },
  ];
};
