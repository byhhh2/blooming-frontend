import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graphView}>
        <Text>그래프</Text>
      </View>
      <View style={styles.stateDiagnosisView}>
        <View style={styles.stateDiagnosisHeader}>
          <Text style={styles.headerText}>7월 24일 감정 상태 진단</Text>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>감정 진단 내용</Text>
        </View>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    elevation: 4,
    borderColor: 'white',
    paddingLeft: 20,
  },
  stateDiagnosisHeader: {
    borderBottomWidth: 1,
    width: '90%',
    alignItems: 'center',
    borderColor: 'gray',
    padding: 10,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'GmarketSansTTFMedium',
  },
  contentView: {
    marginTop: 30,
  },
  contentText: {
    fontSize: 17,
    fontFamily: 'GmarketSansTTFMedium',
  },
});

export default Profile;
