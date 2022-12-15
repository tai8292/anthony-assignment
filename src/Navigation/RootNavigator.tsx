import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@Screens/Home';
import AddCypto from '@Screens/AddCypto';

const Stack = createStackNavigator();

const RootStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={'MainTab'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Home} name={'Home'} />
      <Stack.Screen options={{ headerShown: true }} component={AddCypto} name={'AddCypto'} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
