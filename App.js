import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ExpoDeviceInfoView from "./component/ExpoDeviceInfoView";
import NativeDeviceInfoView from "./component/NativeDeviceInfoView";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: '发斯蒂芬Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>1. 调用expo的api</Text>
        <ExpoDeviceInfoView/>
        <Text>2. 调用第三方native库</Text>
        <NativeDeviceInfoView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
