import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

class Recording extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      recordSecs: 0,
      recordTime: 0,
      currentDurationSec: 0,
      currentPositionSec: 0,
      playTime: 0,
      duration: 0,
    };
  }
  onStartRecord = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    const path = Platform.select({
      android: 'file:////', // should give extra dir name in android. Won't grant permission to the first level of dir.
    });
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const meteringEnabled = false;

    let uri;

    try {
      uri = await audioRecorderPlayer.startRecorder(undefined, audioSet);
    } catch (e) {
      console.log('ERR audioRecorderPlayer.startRecorder: ', e);
    }
    audioRecorderPlayer.addRecordBackListener(e => {
      this.setState(state => ({
        ...state,
        recordSecs: e.current_position,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
      }));
      return;
    });
    console.log('uri: ', uri);
  };

  onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
    });
    console.log(result);
  };
  onStartPlay = async () => {
    console.log('onStartPlay');
    //? Custom path
    // const msg = await this.audioRecorderPlayer.startPlayer(this.path);

    //? Default path
    const msg = await audioRecorderPlayer.startPlayer();
    const volume = await audioRecorderPlayer.setVolume(1.0);
    console.log(`file: ${msg}`, `volume: ${volume}`);

    audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };
  onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };
  Recording() {
    if (!this.state.isRecording) {
      this.onStartRecord();
    } else {
      this.onStopRecord();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(`../../images/background.png`)}
          style={styles.background}>
          <ImageBackground
            source={require(`../../images/sound.png`)}
            style={styles.stopImage}>
            <TouchableOpacity
              style={styles.stopBtn}
              onPress={() => {
                this.setState({isRecording: !this.state.isRecording});
                this.Recording();
              }}>
              {!this.state.isRecording ? (
                <Image
                  source={require(`../../images/record.png`)}
                  style={{width: 40, height: 55}}
                />
              ) : (
                <Image
                  source={require(`../../images/stop.png`)}
                  style={{width: 50, height: 50}}
                />
              )}
            </TouchableOpacity>
          </ImageBackground>
          <View>
            <TouchableOpacity onPress={() => this.onStartPlay()}>
              <Text style={{color: 'white'}}>음성 바</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onStopPlay()}>
              <Text style={{color: 'white'}}>음성 바</Text>
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
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopImage: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopBtn: {
    width: 120,
    height: 120,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `rgba(0,0,0,0.1)`,
  },
});

export default Recording;
