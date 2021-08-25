import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import CalendarPicker from 'react-native-calendar-picker';

import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const date = new Date();
  const [DATA, setDATA] = useState([]);
  const [DIARY, setDIARY] = useState([]);
  const [score, setScore] = useState('');
  const navigation = useNavigation();
  const getScore = () => {
    let config = {
      headers: {
        Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
      },
      params: {
        month: '2021-08',
      },
    };
    axios
      .get(`${axios.defaults.baseURL}/diary/score/`, config)
      .then(response => {
        //console.log(response.data.mean);
        setScore(response.data.mean);
        //console.log(score);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const getDiaryList = () => {
    let tmp = new Date();
    tmp = date;
    tmp = tmp.toISOString().slice(0, 10);
    let config = {
      headers: {
        Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
      },
      params: {
        created_at__gte: '2020-12-30',
        created_at__lte: tmp,
      },
    };
    axios
      .get(`${axios.defaults.baseURL}/diary/`, config)
      .then(response => {
        //console.log(response.data.results);
        setDATA(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onDateChange = (date, type) => {
    let tmp = new Date();
    let tmp_diary = [];
    tmp = date;
    tmp = tmp.toISOString().slice(0, 10);
    setDIARY(
      DATA.filter(x => {
        return x.created_at === tmp;
      }),
    );
    console.log(DIARY[0]);
    if (DIARY[0] !== undefined) {
      tmp_diary = DIARY[0];
      if (DIARY[0].voice_file !== null) {
        navigation.navigate('VoiceDiary', {
          diaryId: tmp_diary.id,
          voice_file: DIARY[0].voice_file,
        });
      } else {
        navigation.navigate('TextDiary', {
          diaryId: tmp_diary.id,
          data: DATA,
        });
      }

      setDIARY([]);
    }
  };
  useEffect(() => {
    getDiaryList();
    getScore();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`../../images/background.png`)}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.dateView}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: 'GmarketSansTTFMedium',
            }}>
            {`${date.getFullYear()}년 ${
              date.getMonth() + 1
            }월 ${date.getDate()}일`}
          </Text>
          <Text style={styles.emotionTitle}>{`${
            date.getMonth() + 1
          }월 평균 감정 지수`}</Text>
          <Temperature reputation={Number(score)} />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '1%',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: 'GmarketSansTTFMedium',
              }}>
              우울
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: 'GmarketSansTTFMedium',
              }}>
              행복
            </Text>
          </View>
        </View>
        <View style={styles.calendarBack}>
          <CalendarPicker
            nextTitle=">"
            previousTitle="<"
            onDateChange={onDateChange}
            nextTitleStyle={{fontSize: 30}}
            previousTitleStyle={{fontSize: 30}}
            todayBackgroundColor={'#AD86E3'}
            todayTextStyle={{color: 'white'}}
            selectedDayStyle={{
              backgroundColor: '#E6E0FB',
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const Temperature = ({reputation}) => {
  return (
    <View
      style={{
        backgroundColor: '#F9F9FC',
        width: '100%',
        height: 15,
        borderRadius: 20,
        marginTop: '2%',
        opacity: 0.7,
      }}>
      <View
        style={{
          backgroundColor: '#0F143A',
          width: `${reputation * 100}%`,
          height: 15,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  VoiceDiaryTest: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateView: {
    //backgroundColor: 'orange',
    width: '100%',
    height: '35%',
    padding: '5%',
    justifyContent: 'center',
  },
  emotionTitle: {
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 22,
    marginTop: '1%',
    color: 'white',
  },
  calendarBack: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F9F9FC',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: '8%',
  },
});

export default Home;
