import React, {useEffect, useState, useRef} from 'react';
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
let flag = false;

const Counter = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (flag === true && count < sound.getDuration()) {
      setCount(count + 1);
    }
  }, 1000);

  return count;
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const VoiceDiary = ({TabNavigation}) => {
  const [soundOn, setSoundOn] = useState(false);
  const [duration, setDuration] = useState(sound.getDuration());
  const [current, setCurrent] = useState(0);
  let tf = false;

  const playSound = () => {
    sound.play();

    console.log(sound.getDuration());
    flag = true;
  };

  const stopSound = () => {
    flag = false;
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
          <View>
            <Player reputation={Counter()} current={current} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Player = ({reputation, current}) => {
  const [_time, setTime] = useState(0);

  return (
    <View>
      <View style={styles.playerBar}>
        <View
          style={{
            backgroundColor: '#F9F9FC',
            width: `${(Counter() / sound.getDuration()) * 100}%`,
            height: 7,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
      </View>
      <View style={styles.allTimeView}>
        <View style={styles.currentTimeView}>
          <Text style={styles.timeText}>
            {Math.floor(Counter() / 60)} : {Math.floor(Counter() % 60)}
          </Text>
        </View>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>
            {Math.floor(sound.getDuration() / 60)} :{' '}
            {Math.floor(sound.getDuration() % 60)}
          </Text>
        </View>
      </View>
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
    marginTop: 50,
    paddingTop: 20,
  },
  playBarView: {
    flex: 1,
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
  timeView: {
    marginTop: 10,
    marginRight: 20,
  },
  currentTimeView: {
    marginTop: 10,
    marginLeft: 20,
  },
  timeText: {
    color: 'white',
    fontFamily: 'GmarketSansTTFMedium',
  },
  allTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
1;

export default VoiceDiary;
