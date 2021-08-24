import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SharedDiary from './SharedDiary';

const Stack = createNativeStackNavigator();

const SharedDiaryStack = () => {
  return (
    <Stack.Navigator initialRouteName={SharedDiary}>
      <Stack.Screen name="SharedDiary" component={SharedDiary} />
    </Stack.Navigator>
  );
};

export default SharedDiaryStack;
