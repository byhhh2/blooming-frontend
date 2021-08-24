import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNav from './tab/TabNav';
import Login from './login/Login';

const Stack = createNativeStackNavigator();

const StackNavi = () => {
  return (
    <Stack.Navigator initialRouteName={Login}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavi;
