import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import VoiceDiary from './VoiceDiary';

import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>home</Text>
      {/* <VoiceDiary /> */}
      <TouchableOpacity
        style={styles.VoiceDiaryTest}
        onPress={() => {
          navigation.navigate('VoiceDiary');
        }}>
        <Text>VoiceDiary</Text>
      </TouchableOpacity>
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
});

export default Home;
