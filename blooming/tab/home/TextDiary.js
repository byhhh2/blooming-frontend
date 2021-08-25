import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import axios from 'axios';

import {useNavigation} from '@react-navigation/native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextDiary = props => {
  const [Diary, setDiary] = useState([]);
  useEffect(() => {
    getDiaryContent();
  }, []);

  const getDiaryContent = () => {
    axios
      .get(`${axios.defaults.baseURL}/diary/${props.route.params.diaryId}`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        console.log(response.data);
        setDiary(response.data);
        let date = response.data.created_at;
        props.navigation.setOptions({
          title: `${date.slice(2, 4)}${date.slice(5, 7)}${date.slice(
            8,
            10,
          )} 일기`,
          headerTitleStyle: {
            fontFamily: 'GmarketSansTTFMedium',
            fontWeight: 'normal',
          },
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.calenderView}>
        <CalendarStrip
          scrollable
          style={{
            height: 170,
            paddingTop: 20,
            paddingBottom: 30,
          }}
          calendarColor={'white'}
          calendarHeaderStyle={{color: 'black'}}
          dateNumberStyle={{color: 'black'}}
          dateNameStyle={{color: '#AD86E3'}}
          iconContainer={{flex: 0.1}}
        />
      </View>
      <View style={styles.contentView}>
        <View style={styles.content}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{Diary.title}</Text>
          </View>
          <View style={styles.contentTextView}>
            <ScrollView style={styles.contentScrollView}>
              <Text style={styles.contentText}>{Diary.content}</Text>
            </ScrollView>
          </View>
        </View>
        <View style={styles.btn}>
          <View>
            <Ionicons
              name={'share-social-outline'}
              size={33}
              style={{color: 'gray'}}
            />
          </View>
          <View style={styles.rightBtn}>
            <EvilIcons name={'pencil'} size={47} style={{color: 'gray'}} />
            <EvilIcons
              name={'trash'}
              size={45}
              style={{color: 'gray', marginTop: 3}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  calenderView: {
    flex: 1,
  },
  contentView: {
    flex: 3,
    backgroundColor: '#E6E0FB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 30,
    borderWidth: 1,
    borderColor: '#E6E0FB',
  },
  titleView: {
    borderBottomWidth: 1,
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    width: '80%',
    alignSelf: 'center',
    paddingBottom: 10,
    borderColor: '#BAB3B7',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
  },
  contentTextView: {
    width: '80%',
    paddingLeft: 15,
    alignSelf: 'center',
    marginTop: 20,
  },
  content: {
    flex: 8,
  },
  contentText: {
    fontSize: 16,
    fontFamily: 'GmarketSansTTFMedium',
  },
  btn: {
    flex: 1.2,
    //backgroundColor: 'red',
    borderTopWidth: 1,
    borderColor: '#BAB3B7',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 5,
  },
  rightBtn: {
    flexDirection: 'row',
  },
  contentScrollView: {
    height: '80%',
  },
});

export default TextDiary;
