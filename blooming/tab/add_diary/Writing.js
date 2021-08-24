import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';

const Writing = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '30%'}}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require(`../../images/background-short.png`)}
        />
      </View>
      <View style={styles.writingView}>
        <TextInput style={styles.title} placeholder={'제목을 입력하세요.'} />
        <ScrollView>
          <View
            style={{
              paddingLeft: '2%',
              paddingRight: '2%',
              width: '100%',
            }}>
            <TextInput placeholder={'내용을 입력하세요.'} multiline={true} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FC',
  },
  writingView: {
    height: '80%',
    width: '100%',
    backgroundColor: '#E6E0FB',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: '8%',
    marginTop: -20,
  },
  title: {
    width: '100%',
    height: 50,
    borderBottomColor: '#646AB5',
    borderBottomWidth: 1,
    fontSize: 20,
    paddingLeft: '2%',
    paddingRight: '2%',
    marginBottom: '4%',
    fontWeight: 'bold',
  },
});

export default Writing;
