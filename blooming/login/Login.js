import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Login = props => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require(`../images/background.png`)}
        style={{width: '100%', height: '100%'}}>
        <Text>home</Text>
        <TouchableOpacity
          style={{width: '100%', backgroundColor: 'white'}}
          onPress={() => props.navigation.navigate('TabNav')}>
          <Text>넘어가는 버튼이여요~</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Login;
