import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import VoiceDiary from './VoiceDiary';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
      {/* <VoiceDiary /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
