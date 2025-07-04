import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import PaymentDetailsScreen from '../screens/Pay/PaymentDetailsScreen';
import CurrencyScreen from '../screens/currency/CurrencyScreen';
import AddCurrencyScreen from '../screens/currency/AddCurrencyScreen';
import SingleTransactionInfo from '../screens/Transactions/SingleTransactionInfo';
import AllTransaction from '../screens/Transactions/AllTransaction';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import NotificationScreen from '../screens/Notifications/NotificationScreen';
import EnterAmountScreen from '../screens/SendMoney/EnterAmountScreen';
import BeneficiariesScreen from '../screens/Beneficiaries/BeneficiariesScreen';
import AddBeneficiaryScreen from '../screens/Beneficiaries/AddBeneficiarieScreen';
import SelectBeneficiary from '../screens/Beneficiaries/SelectBeneficiary';
import BeneficiaryTypeScreen from '../screens/Beneficiaries/BeneficiaryTypeScreen';
import OtpVerificationScreen from '../screens/Beneficiaries/OtpVerificationScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = true; // replace with  auth logic

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen
            name="PaymentDetailsScreen"
            component={PaymentDetailsScreen}
          />
          <Stack.Screen name="CurrencyScreen" component={CurrencyScreen} />
          <Stack.Screen
            name="AddCurrencyScreen"
            component={AddCurrencyScreen}
          />
          <Stack.Screen name="AllTransaction" component={AllTransaction} />
          <Stack.Screen
            name="SingleTransactionInfo"
            component={SingleTransactionInfo}
          />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
          />
          <Stack.Screen
            name="EnterAmountScreen"
            component={EnterAmountScreen}
          />
          <Stack.Screen
            name="BeneficiariesScreen"
            component={BeneficiariesScreen}
          />
          <Stack.Screen
            name="AddBeneficiaryScreen"
            component={AddBeneficiaryScreen}
          />
           <Stack.Screen
            name="SelectBeneficiary"
            component={SelectBeneficiary}
          />
          <Stack.Screen
            name="BeneficiaryTypeScreen"
            component={BeneficiaryTypeScreen}
          />
          <Stack.Screen
            name="OtpVerificationScreen"
            component={OtpVerificationScreen}
          />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
