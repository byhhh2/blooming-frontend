import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const Writing = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`../../images/background.png`)}
        style={{width: '100%', height: '100%'}}>
        <Text>VoiceDiary</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Writing;
