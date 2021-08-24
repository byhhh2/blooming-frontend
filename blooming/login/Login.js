import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Login = props => {
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
          />
          <TextInput
            style={styles.textInput}
            placeholder={'비밀번호를 입력하세요.'}
            placeholderTextColor="white"
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => props.navigation.navigate('TabNav')}>
            <Text>로그인</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

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
