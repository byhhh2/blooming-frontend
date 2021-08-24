import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddDiary from './AddDiary';
import Writing from './Writing';
import Recording from './Recording';

const Stack = createNativeStackNavigator();

const AddDiaryStack = props => {
  return (
    <Stack.Navigator initialRouteName={AddDiary}>
      <Stack.Screen
        name="AddDiary"
        component={AddDiary}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Writing"
        component={Writing}
        options={{
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'GmarketSansTTFMedium',
            fontWeight: 'normal',
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AddDiary')}>
              <Ionicons
                name={'chevron-back'}
                size={25}
                style={{color: 'white'}}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name={'share-outline'}
                size={25}
                style={{color: 'white'}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Recording"
        component={Recording}
        options={{
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'GmarketSansTTFMedium',
            fontWeight: 'normal',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AddDiary')}>
              <Ionicons
                name={'chevron-back'}
                size={25}
                style={{color: 'white'}}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name={'share-outline'}
                size={25}
                style={{color: 'white'}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AddDiaryStack;
