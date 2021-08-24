import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graphView}>
        <Text>그래프</Text>
      </View>
      <View style={styles.stateDiagnosisView}>
        <Text>감정진단</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  graphView: {
    flex: 1.5,
  },
  stateDiagnosisView: {
    flex: 1,
    //borderTopLeftRadius: 20,
    //border: 1,
  },
});

export default Profile;
