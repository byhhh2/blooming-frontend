import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
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
  const navigation = useNavigation();
  const [Diary, setDiary] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPrivate, setPrivate] = useState(false);
  useEffect(() => {
    getDiaryContent(props.route.params.diaryId);
    //console.log(props.route.params.data);
  }, []);

  const getDiaryContent = id => {
    axios
      .get(`${axios.defaults.baseURL}/diary/${id}`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        //console.log(response.data);
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
  const deleteDiary = () => {
    axios
      .get(`${axios.defaults.baseURL}/diary/${props.route.params.diaryId}`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        console.log(response);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const editDiary = () => {
    axios
      .patch(
        `${axios.defaults.baseURL}/diary/${props.route.params.diaryId}`,
        {
          content: content,
          is_private: isPrivate,
          title: title,
        },
        {
          headers: {
            Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
          },
        },
      )
      .then(response => {
        console.log(response);
        setDiary(response.data);
        setEdit(false);
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
          onDateSelected={date => {
            let date_string =
              '' +
              date.year() +
              '-' +
              `${date.month() + 1 < 10 ? '0' : ''}` +
              (date.month() + 1) +
              '-' +
              date.date();

            let i = 0;

            for (i = 0; i < props.route.params.data.length; i++) {
              if (props.route.params.data[i].created_at === date_string) {
                getDiaryContent(props.route.params.data[i].id);
                console.log(props.route.params.data[i].id);
              }
            }
          }}
          minDate={'2020-12-30T12:00:00.000Z'}
          maxDate={'2021-08-30T12:00:00.000Z'}
        />
      </View>
      <View style={styles.contentView}>
        <View style={styles.content}>
          <View style={styles.titleView}>
            {isEdit ? (
              <>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontFamily: 'GmarketSansTTFBold', fontSize: 15}}>
                    {isPrivate ? '비공개' : '전체공개'}
                  </Text>
                  <TouchableOpacity
                    style={{marginLeft: '2%'}}
                    onPress={() => setPrivate(!isPrivate)}>
                    <Ionicons
                      name={
                        isPrivate ? 'lock-closed-outline' : 'lock-open-outline'
                      }
                      size={23}
                    />
                  </TouchableOpacity>
                </View>
                <TextInput
                  placeholder={'제목을 입력하세요'}
                  style={styles.title}
                  value={title}
                  onChangeText={text => setTitle(text)}
                />
              </>
            ) : (
              <Text style={styles.titleText}>{Diary.title}</Text>
            )}
          </View>
          <View style={styles.contentTextView}>
            <ScrollView style={styles.contentScrollView}>
              {isEdit ? (
                <TextInput
                  placeholder={'내용을 입력하세요'}
                  style={{fontFamily: 'GmarketSansTTFMedium'}}
                  multiline={true}
                  value={content}
                  onChangeText={text => setContent(text)}
                />
              ) : (
                <Text style={styles.contentText}>{Diary.content}</Text>
              )}
            </ScrollView>
          </View>
        </View>

        {isEdit ? (
          <View style={[styles.btn, {justifyContent: 'center'}]}>
            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => editDiary()}>
              <Text
                style={{color: 'white', fontFamily: 'GmarketSansTTFMedium'}}>
                저장
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.btn}>
            <View>
              <TouchableOpacity>
                <Ionicons
                  name={'share-social-outline'}
                  size={33}
                  style={{color: 'gray'}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rightBtn}>
              <TouchableOpacity onPress={() => setEdit(true)}>
                <EvilIcons name={'pencil'} size={47} style={{color: 'gray'}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteDiary()}>
                <EvilIcons
                  name={'trash'}
                  size={45}
                  style={{color: 'gray', marginTop: 3}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  title: {
    width: '100%',
    height: 50,
    fontSize: 20,
    paddingLeft: '2%',
    paddingRight: '2%',
    fontFamily: 'GmarketSansTTFBold',
  },
  saveBtn: {
    width: '70%',
    height: 40,
    marginTop: '2%',
    borderRadius: 15,
    backgroundColor: '#9298DF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TextDiary;
