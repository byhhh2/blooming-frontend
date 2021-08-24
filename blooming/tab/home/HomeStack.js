import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from './Home';
import VoiceDiary from './VoiceDiary';

const Stack = createNativeStackNavigator();

const HomeStack = ({TabNavigation}) => {
  //   TabNavigation.setOptions({
  //     headerTransparent: true,
  //   });
  //   const parent = TabNavigation.dangerouslyGetParent();
  //   parent.setOptions({
  //     tabBarVisible: false,
  //   });
  //   TabNavigation.setOptions({tabBarVisible: false});

  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VoiceDiary"
        // component={VoiceDiary}
        options={({navigation}) => ({
          title: '200824의 일기',
          //   headerStyle: {
          //     //backgroundColor: 'transparent',
          //   },
          headerTitleStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
          headerTintColor: 'white',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name={'chevron-left'}
                size={20}
                style={{color: 'white'}}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <AntDesign
                name={'folderopen'}
                size={20}
                style={{color: 'white'}}
              />
            </TouchableOpacity>
          ),
        })}>
        {() => <VoiceDiary TabNavigation={TabNavigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
