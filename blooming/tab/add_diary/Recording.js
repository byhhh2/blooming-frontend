import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

class Recording extends Component {
  constructor(props) {
    super(props);
    this.state = {isRecording: false};
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
              onPress={() =>
                this.setState({isRecording: !this.state.isRecording})
              }>
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
