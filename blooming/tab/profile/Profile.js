import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileChart from './ProfileChart';

const _Tab = createMaterialTopTabNavigator();

const Profile = () => {
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
        scrollEnabled: true,
      }}>
      <_Tab.Screen
        name="1월"
        component={ProfileChart}
        options={{
          title: '1월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="2월"
        component={ProfileChart}
        options={{
          title: '2월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="3월"
        component={ProfileChart}
        options={{
          title: '3월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="4월"
        component={ProfileChart}
        options={{
          title: '4월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="5월"
        component={ProfileChart}
        options={{
          title: '5월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="6월"
        component={ProfileChart}
        options={{
          title: '6월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="7월"
        component={ProfileChart}
        options={{
          title: '7월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="8월"
        component={ProfileChart}
        options={{
          title: '8월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="9월"
        component={ProfileChart}
        options={{
          title: '9월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="10월"
        component={ProfileChart}
        options={{
          title: '10월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="11월"
        component={ProfileChart}
        options={{
          title: '11월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
      <_Tab.Screen
        name="12월"
        component={ProfileChart}
        options={{
          title: '12월',
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFMedium',
          },
        }}
      />
    </_Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  graphView: {
    flex: 1.5,
  },
  stateDiagnosisView: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    elevation: 4,
    borderColor: 'white',
    paddingLeft: 20,
  },
  stateDiagnosisHeader: {
    borderBottomWidth: 1,
    width: '90%',
    alignItems: 'center',
    borderColor: 'gray',
    padding: 10,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'GmarketSansTTFMedium',
  },
  contentView: {
    marginTop: 30,
  },
  contentText: {
    fontSize: 17,
    fontFamily: 'GmarketSansTTFMedium',
  },
});

export default Profile;
