import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import ExpoDeviceInfoView from "./component/ExpoDeviceInfoView";
import NativeDeviceInfoView from "./component/NativeDeviceInfoView";
import ExpoVideoPlayer from "./component/ExpoVideoPlayer";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: '发斯蒂芬Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class App extends Component {
    // 导航参数
    static navigationOptions = {
        title: '主页',
    };

    /**
     * 跳转到指定页面
     */
    navigate(pageName){
        this.props.navigation.navigate(pageName);
    }

  render() {
    return (
      <View style={styles.container}>
          <Button onPress={this.navigate.bind(this, "ExpoDeviceInfoView")} title={"调用expo的api"}/>
          <Button onPress={this.navigate.bind(this, "NativeDeviceInfoView")} title={"调用native module的api"}/>
          <Button onPress={this.navigate.bind(this, "ExpoVideoPlayer")} title={"调用expo的播放器"}/>
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

// 定义导航菜单
const Navigator = createStackNavigator({
    Home: { screen: App },
    ExpoDeviceInfoView: { screen: ExpoDeviceInfoView },
    NativeDeviceInfoView: { screen: NativeDeviceInfoView },
    ExpoVideoPlayer: { screen: ExpoVideoPlayer },
});

export default createAppContainer(Navigator);
