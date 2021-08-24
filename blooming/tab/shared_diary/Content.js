import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import axios from 'axios';

const Content = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [like, setLike] = useState([]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftBtn}>
        <AntDesign name={'left'} size={20} />
      </TouchableOpacity>
      <View style={styles.contentView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>제목</Text>
        </View>
        <View style={styles.contentTextView}>
          <Text style={styles.contentText}>내용</Text>
        </View>
      </View>
      <View style={styles.empathyView}>
        <Text style={styles.empathyText}>공감돼요 {52}</Text>
        <TouchableOpacity>
          <Ionicons
            name={'heart-outline'}
            size={20}
            style={{color: 'black', marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.rightBtn}>
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
});

export default Content;
