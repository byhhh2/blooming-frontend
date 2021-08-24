import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddDiary from './AddDiary';
import Writing from './Writing';

const Stack = createNativeStackNavigator();

const AddDiaryStack = () => {
  return (
    <Stack.Navigator initialRouteName={AddDiary}>
      <Stack.Screen name="AddDiary" component={AddDiary} />
      <Stack.Screen name="Writing" component={Writing} />
    </Stack.Navigator>
  );
};

export default AddDiaryStack;
