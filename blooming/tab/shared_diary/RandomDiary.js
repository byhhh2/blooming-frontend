import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Content from './RandomContent';
import axios from 'axios';

const RandomDiary = () => {
  const [diary_data, set_diary_data] = useState([]);

  useEffect(() => {
    //getListofDiary();
  }, []);

  // const getListofDiary = () => {
  //   // console.log(`JWT ${axios.defaults.headers.common['Authorization']}`);
  //   axios
  //     .get(`${axios.defaults.baseURL}/diary/random/`, {
  //       headers: {
  //         Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
  //       },
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //       set_diary_data(response.data.results);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default RandomDiary;
