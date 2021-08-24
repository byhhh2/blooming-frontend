import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const AddDiary = props => {
  return (
    <View>
      <ImageBackground
        source={require(`../../images/background.png`)}
        style={styles.imageBack}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate('Writing')}>
          <Feather
            name={'edit'}
            size={35}
            style={{color: 'white', marginBottom: '4%'}}
          />
          <Text style={{color: 'white', fontSize: 12}}>글</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Feather
            name={'mic'}
            size={35}
            style={{color: 'white', marginBottom: '4%'}}
          />
          <Text style={{color: 'white', fontSize: 12}}>녹음</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBack: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  btn: {
    width: '35%',
    height: '17%',
    //backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: '#F9F9FC',
    borderWidth: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

export default AddDiary;
