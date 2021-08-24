import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Content from './Content';
import axios from 'axios';

const RandomDiary = () => {
  useEffect(() => {
    getListofDiary();
  }, []);

  const getListofDiary = () => {
    console.log(`JWT ${axios.defaults.headers.common['Authorization']}`);
    axios
      .get(`${axios.defaults.baseURL}/diary/`, {
        headers: {
          Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
        },
      })
      .then(response => {
        //   let rows = response.data.results;
        //   for (let i = 0; i < rows.length; i++) {
        //     rows[i].price = Number(rows[i].price);
        //   }
        //   setRow_data(rows);
        //   setRow_count(response.data.count);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
