import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import Profile from './Profile';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={Profile}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          title: '사용자',
          headerTitleStyle: {
            fontFamily: 'GmarketSansTTFMedium',
            // fontSize: 15,
            // fontWeight: null,
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
