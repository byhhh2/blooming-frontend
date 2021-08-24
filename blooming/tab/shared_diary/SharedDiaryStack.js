import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SharedDiary from './SharedDiary';

const Stack = createNativeStackNavigator();

const SharedDiaryStack = () => {
  return (
    <Stack.Navigator initialRouteName={SharedDiary}>
      <Stack.Screen
        name="SharedDiary"
        component={SharedDiary}
        options={({navigation}) => ({
          title: 'blooming',
          headerTitleStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },

          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

export default SharedDiaryStack;
