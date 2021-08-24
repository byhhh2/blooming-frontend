import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddDiary from './AddDiary';
import Writing from './Writing';
import Recording from './Recording';

const Stack = createNativeStackNavigator();

const AddDiaryStack = () => {
  return (
    <Stack.Navigator initialRouteName={AddDiary}>
      <Stack.Screen name="AddDiary" component={AddDiary} />
      <Stack.Screen name="Writing" component={Writing} />
      <Stack.Screen name="Recording" component={Recording} />
    </Stack.Navigator>
  );
};

export default AddDiaryStack;
