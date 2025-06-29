import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import BeneficiariesScreen from '../screens/Beneficiaries/BeneficiariesScreen';
import CustomTabBarBackground from '../components/CustomTabBarBackground';
import CustomSendButton from '../components/CustomSendButton';
import homeActive from '../assets/homeactive.png';
import homeInactive from '../assets/homeinactive.png';
import benActive from '../assets/benactive.png';
import benInactive from '../assets/beninactive.png';

const Tab = createBottomTabNavigator();

const renderTabBarBackground = () => <CustomTabBarBackground />;
const getTabBarIcon =
  routeName =>
  ({ focused }) => {
    let iconSource;

    switch (routeName) {
      case 'Home':
        iconSource = focused ? homeActive : homeInactive;
        break;
      case 'Beneficiaries':
        iconSource = focused ? benActive : benInactive;
        break;
      default:
        return null;
    }

    return (
      <Image
        source={iconSource}
        style={{ width: 24, height: 24, resizeMode: 'contain' }}
      />
    );
  };
const renderCustomSendButton = props => <CustomSendButton {...props} />;
const DummyScreen = () => {
  null;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#F2630B',
        tabBarInactiveTintColor: '#081C42',
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          elevation: 0,
          borderTopWidth: 0,
          height: 70,
        },
        tabBarBackground: renderTabBarBackground,
        tabBarIcon: getTabBarIcon(route.name),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Pay"
        component={DummyScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => null,
          tabBarButton: renderCustomSendButton,
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('EnterAmountScreen');
          },
        })}
      />
      <Tab.Screen name="Beneficiaries" component={BeneficiariesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
