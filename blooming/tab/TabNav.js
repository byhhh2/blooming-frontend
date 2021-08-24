import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import AddDiary from './add_diary/AddDiary';
import Home from './home/Home';
import Profile from './profile/Profile';
import SharedDiary from './shared_diary/SharedDiary';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Feather
                name={'home'}
                size={25}
                style={{color: 'gray', marginTop: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Ionicons
                name="person-outline"
                size={25}
                style={{color: 'gray', marginTop: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SharedDiary"
        component={SharedDiary}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Ionicons
                name="book-outline"
                size={25}
                style={{color: 'gray', marginTop: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="AddDiary"
        component={AddDiary}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Ionicons
                name="add-circle-outline"
                size={25}
                style={{color: 'gray', marginTop: 10}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default TabNav;
