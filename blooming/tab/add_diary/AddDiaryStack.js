import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddDiary from './AddDiary';

const Stack = createNativeStackNavigator();

const AddDiaryStack = () => {
  return (
    <Stack.Navigator initialRouteName={AddDiary}>
      <Stack.Screen name="AddDiary" component={AddDiary} />
    </Stack.Navigator>
  );
};

export default AddDiaryStack;
