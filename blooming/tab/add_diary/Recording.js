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
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

class Recording extends Component {
  constructor(props) {
    super(props);
    this.state = {isRecording: false, recordSecs: 0, recordTime: 0};
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
  };

  onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
    });
    console.log(result);
  };

  Recording() {
    if (this.state.isRecording === true) {
      this.onStartRecord();
    }
    /*else {
      this.onStopRecord();
    }*/
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
            <Text style={{color: 'white'}}>음성 바</Text>
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
