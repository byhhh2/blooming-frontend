import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import axios from 'axios';

class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', content: '', isPrivate: false};
    this.createDiary = this.createDiary.bind(this);
  }
  componentDidMount() {
    this.props.navigation.setOptions({
      title: `일기`,
      headerTitleStyle: {
        fontFamily: 'GmarketSansTTFMedium',
        fontWeight: 'normal',
        color: 'white',
      },
    });
  }
  createDiary(title, content, isPrivate) {
    axios
      .post(
        `${axios.defaults.baseURL}/diary/`,
        {
          content: content,
          is_private: isPrivate,
          title: title,
        },
        {
          headers: {
            Authorization: `JWT ${axios.defaults.headers.common['Authorization']}`,
          },
        },
      )
      .then(response => {
        console.log(response);
        this.props.navigation.navigate('AddDiary');
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '100%', height: '30%'}}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require(`../../images/background-short.png`)}
          />
        </View>
        <View style={styles.writingView}>
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontFamily: 'GmarketSansTTFBold', fontSize: 15}}>
              {this.state.isPrivate ? '비공개' : '전체공개'}
            </Text>
            <TouchableOpacity
              style={{marginLeft: '2%'}}
              onPress={() => this.setState({isPrivate: !this.state.isPrivate})}>
              <Ionicons
                name={
                  this.state.isPrivate
                    ? 'lock-closed-outline'
                    : 'lock-open-outline'
                }
                size={23}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.title}
            placeholder={'제목을 입력하세요.'}
            value={this.state.title}
            onChangeText={text => this.setState({title: text})}
          />

          <View
            style={{
              paddingLeft: '2%',
              paddingRight: '2%',
              width: '100%',
              height: 270,
            }}>
            <ScrollView>
              <TextInput
                placeholder={'내용을 입력하세요.'}
                multiline={true}
                value={this.state.content}
                onChangeText={text => this.setState({content: text})}
                style={{fontFamily: 'GmarketSansTTFMedium', lineHeight: 30}}
              />
            </ScrollView>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.createDiary(
                  this.state.title,
                  this.state.content,
                  this.state.isPrivate,
                );
              }}>
              <Text
                style={{color: 'white', fontFamily: 'GmarketSansTTFMedium'}}>
                저장
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

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
    fontFamily: 'GmarketSansTTFBold',
  },
  btn: {
    width: '70%',
    height: 40,
    marginTop: '2%',
    borderRadius: 15,
    backgroundColor: '#9298DF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Writing;
