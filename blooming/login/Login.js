import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Keyboard,
} from 'react-native';

import axios from 'axios';
axios.defaults.baseURL = 'http://34.64.176.99:8000';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '', pwd: ''};
    this.signin = this.signin.bind(this);
  }
  signin(id, pwd) {
    axios
      .post(`${axios.defaults.baseURL}/signin/`, {
        username: id,
        password: pwd,
      })
      .then(response => {
        const token = response.data.access;
        axios.defaults.headers.common['Authorization'] = token;
        // console.log(response);
        this.props.navigation.navigate('TabNav');
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.showWithGravityAndOffset(
          '아이디와 비밀번호를 다시 입력하세요',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          850,
        );
        Keyboard.dismiss();
        this.setState({id: '', pwd: ''});
      });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require(`../images/background.png`)}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              height: '43%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
              Blooming
            </Text>
          </View>
          <View style={{height: '57%', alignItems: 'center'}}>
            <TextInput
              style={styles.textInput}
              placeholder={'아이디를 입력하세요.'}
              placeholderTextColor="white"
              value={this.state.id}
              onChangeText={text => this.setState({id: text})}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'비밀번호를 입력하세요.'}
              placeholderTextColor="white"
              value={this.state.pwd}
              onChangeText={text => this.setState({pwd: text})}
            />
            <TouchableOpacity
              disabled={this.state.id && this.state.pwd ? false : true}
              style={styles.loginBtn}
              onPress={() => this.signin(this.state.id, this.state.pwd)}>
              <Text>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={[styles.loginBtn, {backgroundColor: '#9298DF'}]}>
              <Text style={{color: 'white'}}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    height: 50,
    //backgroundColor: 'orange',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingLeft: '2%',
    paddingRight: '2%',
    marginBottom: '5%',
    color: 'white',
  },
  loginBtn: {
    width: '70%',
    height: 40,
    marginTop: '5%',
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
