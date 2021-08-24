import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import MyDiary from './MyDiary';
import RandomDiary from './RandomDiary';
import SympatheticDiary from './SympatheticDiary';

const _Tab = createMaterialTopTabNavigator();

const SharedDiary = () => {
  return (
    <_Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
      tabBarOptions={{
        pressColor: 'white',
        style: {
          backgroundColor: 'white',
        },
        indicatorStyle: {
          backgroundColor: 'black',
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
      }}>
      <_Tab.Screen
        name="MyDiary"
        component={MyDiary}
        options={{
          title: '공유한 일기',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="RandomDiary"
        component={RandomDiary}
        options={{
          title: '랜덤일기',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="SympatheticDiary"
        component={SympatheticDiary}
        options={{
          title: '공감한 일기',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
    </_Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default SharedDiary;
