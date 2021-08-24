import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

let sound = new Sound('testmp3.mp3');
let time = 0;

const VoiceDiary = ({TabNavigation}) => {
  //   let sound = new Sound('testmp3.mp3');
  const [soundOn, setSoundOn] = useState(false);
  const [duration, setDuration] = useState(sound.getDuration());
  const [current, setCurrent] = useState(0);
  let tf = false;

  useEffect(() => {
    //TabNavigation.setOptions({tabBarVisible: false});
  }, []);

  const playSound = () => {
    sound.play();
    sound.getCurrentTime(seconds => console.log('at ' + seconds));
    sound.getCurrentTime(seconds => setCurrent(seconds));
    // console.log('duration in seconds: ' + sound.getDuration());

    // setInterval(() => {
    //   sound.getCurrentTime(seconds => (time = seconds));
    //   console.log(time);
    // }, 5000);
  };

  const stopSound = () => {
    sound.pause();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/background.png')}
        style={{width: '100%', height: '100%'}}>
        {/* <Text>VoiceDiary</Text> */}
        <View style={styles.playBtnView}>
          <Image
            source={require('../../images/VoiceDiary/73.png')}
            style={{width: 300, height: 300}}
          />
          {!soundOn ? (
            <>
              <TouchableOpacity
                style={styles.playBtn}
                onPress={() => {
                  playSound();
                  setSoundOn(!soundOn);
                }}>
                <Entypo
                  name={'controller-play'}
                  size={80}
                  style={{color: 'white'}}
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.pauseBtn}
                onPress={() => {
                  setSoundOn(!soundOn);
                  stopSound();
                }}>
                <AntDesign name={'pause'} size={80} style={{color: 'white'}} />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.playBarView}>
          {/* <Text>play bar</Text> */}
          <View>
            <Player reputation={50} current={current} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Player = ({reputation, current}) => {
  //   const [current, setCurrent] = useState(0);
  const [_time, setTime] = useState(0);
  let t = 0;

  useEffect(() => {
    // setCurrentT(current);
    // console.log(currentT);
    // setInterval(function () {
    //   console.log('하이');
    // }, 5000);
    // setInterval(() => t + 3, 3000);
    // console.log(setInterval(() => t + 3, 3000));
  }, [t]);

  return (
    <View style={styles.playerBar}>
      <View
        style={{
          backgroundColor: '#F9F9FC',
          width: `${current / sound.getDuration()}%`,
          height: 7,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  playBtnView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginTop: 50,
    paddingTop: 20,
  },
  playBarView: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
  },
  playBtn: {
    color: 'white',
    zIndex: 10,
    position: 'absolute',
    paddingTop: 15,
    paddingLeft: 10,
  },
  pauseBtn: {
    color: 'white',
    zIndex: 10,
    position: 'absolute',
    paddingTop: 15,
  },
  playerBar: {
    backgroundColor: '#C6C6C6',
    width: '90%',
    height: 7,
    borderRadius: 10,
    marginTop: 25,
    opacity: 0.7,
    alignSelf: 'center',
  },
  playerCurrentBar: {},
});

export default VoiceDiary;
