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
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '', pwd: '', name: ''};
    this.signup = this.signup.bind(this);
  }
  signup(id, name, pwd) {
    axios
      .post(`${axios.defaults.baseURL}/signup/`, {
        username: id,
        name: name,
        password: pwd,
      })
      .then(response => {
        const token = response.data.access;
        axios.defaults.headers.common['Authorization'] = token;
        console.log(response);
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.showWithGravityAndOffset(
          '아이디가 이미 존재합니다. 다시 입력해주세요.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          850,
        );
        Keyboard.dismiss();
        this.setState({id: '', pwd: '', name: ''});
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(`../images/background.png`)}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              height: '40%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
              회원가입
            </Text>
          </View>
          <View style={{height: '57%', alignItems: 'center'}}>
            <TextInput
              style={styles.textInput}
              placeholder={'이름을 입력하세요.'}
              placeholderTextColor="white"
              value={this.state.name}
              onChangeText={text => this.setState({name: text})}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'아이디를 입력하세요.'}
              placeholderTextColor="white"
              value={this.state.id}
              onChangeText={text => this.setState({id: text})}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'비밀번호를 입력하세요. (8글자 이상)'}
              placeholderTextColor="white"
              value={this.state.pwd}
              onChangeText={text => this.setState({pwd: text})}
            />
            <TouchableOpacity
              disabled={
                this.state.id && this.state.pwd && this.state.name
                  ? false
                  : true
              }
              style={styles.loginBtn}
              onPress={() =>
                this.signup(this.state.id, this.state.name, this.state.pwd)
              }>
              <Text>SignUp</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FC',
  },
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

export default SignUp;
