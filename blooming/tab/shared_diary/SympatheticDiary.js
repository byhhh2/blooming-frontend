import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Content from './SympatheticContent';

const SympatheticDiary = () => {
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

export default SympatheticDiary;
