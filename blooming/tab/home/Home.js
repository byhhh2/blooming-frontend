import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const Home = () => {
  const date = new Date();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`../../images/background.png`)}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.dateView}>
          <Text style={{fontSize: 16, color: 'white'}}>
            {`${date.getFullYear()}년 ${
              date.getMonth() + 1
            }월 ${date.getDate()}일`}
          </Text>
          <Text style={styles.emotionTitle}>{`${
            date.getMonth() + 1
          }월 평균 감정 지수`}</Text>
          <Temperature reputation={36.5} />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '1%',
            }}>
            <Text style={{color: 'white', fontSize: 12}}>우울</Text>
            <Text style={{color: 'white', fontSize: 12}}>행복</Text>
          </View>
        </View>
        <View style={styles.calendarBack}>
          <CalendarPicker
            nextTitle=">"
            previousTitle="<"
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
          width: `${reputation}%`,
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
  dateView: {
    //backgroundColor: 'orange',
    width: '100%',
    height: '35%',
    padding: '5%',
    justifyContent: 'center',
  },
  emotionTitle: {
    fontWeight: 'bold',
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
