import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import Toast,{ToastConfig} from 'react-native-toast-message';
import { toastConfig } from './utils/toastConfig';

const App = () => {
  return (
   <Provider store={store}>
    <NavigationContainer>
      <AppNavigator />
       <Toast config={toastConfig as ToastConfig} position="bottom" />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
