import AppNavigator from '@Navigation';
import React, { useEffect, FC } from 'react';
import SplashScreen from 'react-native-splash-screen';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppNavigator />;
};

export default App;
