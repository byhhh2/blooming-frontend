import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import axios from 'axios';

let cnt = 0;

const Content = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [like, setLike] = useState(false);

  const [cnt_state, set_cnt] = useState(0);

  const [diary_data, set_diary_data] = useState([
    {
      title: 'title',
      content: 'content',
      like: [],
    },
  ]);

  const getListofDiary = () => {
    axios
      .get(`${axios.defaults.baseURL}/diary/random/`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        //console.log(response.data);
        set_diary_data(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const likeDiary = id => {
    axios
      .patch(`${axios.defaults.baseURL}/diary/${id}/like`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        if (response === 'liked') {
          console.log('done');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getListofDiary();
  }, [props]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftBtn}
        onPress={() => {
          if (cnt > 0) {
            cnt--;
            set_cnt(cnt_state - 1);
            console.log(cnt);
          }
        }}>
        <AntDesign name={'left'} size={20} />
      </TouchableOpacity>
      <View style={styles.contentView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{diary_data[cnt_state].title}</Text>
        </View>
        <View style={styles.contentTextView}>
          <ScrollView style={styles.textScrollView}>
            <Text style={styles.contentText}>
              {diary_data[cnt_state].content}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.empathyView}>
        <Text style={styles.empathyText}>
          공감돼요 {diary_data[cnt_state].like.length}
        </Text>
        <TouchableOpacity
          onPress={() => {
            likeDiary(diary_data[cnt_state].id);
            //setLike(!like);
          }}>
          {diary_data[cnt_state].like ? (
            <Ionicons
              name={'heart'}
              size={20}
              style={{color: 'black', marginLeft: 5}}
            />
          ) : (
            <Ionicons
              name={'heart-outline'}
              size={20}
              style={{color: 'black', marginLeft: 5}}
            />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.rightBtn}
        onPress={() => {
          if (cnt < diary_data.length - 1) {
            cnt++;
            set_cnt(cnt_state + 1);
            console.log(cnt);
          }
        }}>
        <AntDesign name={'right'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  contentView: {
    backgroundColor: '#E6E0FB',
    width: '80%',
    height: '80%',
    borderRadius: 30,
    padding: 20,
  },
  titleView: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 20,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 17,
    fontFamily: 'GmarketSansTTFMedium',
  },
  contentTextView: {
    fontFamily: 'GmarketSansTTFMedium',
    marginTop: 10,
  },
  contentText: {
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 15,
  },
  empathyView: {
    alignSelf: 'flex-end',
    //width: '80%',
    marginRight: 60,
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  empathyText: {
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 15,
  },
  leftBtn: {
    color: 'black',
    left: 5,
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  rightBtn: {
    color: 'black',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 10,
  },
  textScrollView: {
    height: '80%',
    //margin: 10,
    marginTop: 20,
  },
});

export default Content;
