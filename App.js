import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import ExpoDeviceInfoView from "./component/ExpoDeviceInfoView";
import NativeDeviceInfoView from "./component/NativeDeviceInfoView";
import ExpoVideoPlayer from "./component/ExpoVideoPlayer";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import NewsListView from "./component/NewsListView";
import {createStackNavigator} from "react-navigation-stack";
import NewsDetailView from "./component/NewsDetailView";

class App extends Component {
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

// 定义新闻页面导航菜单
const newsNavigator = createStackNavigator({
    NewsList: {
        screen: NewsListView,
        navigationOptions: {
            title: "新闻列表"
        }
    },
    NewsDetail: {
        screen: NewsDetailView,
        navigationOptions: {
            title: "新闻详情"
        }
    }
})

// 定义主导航菜单
const Navigator = createBottomTabNavigator({
    Home: {
        screen: App,
        navigationOptions: {
            title: "主页",
            tabBarIcon: ({tintColor, focused}) => (
                <Image style={{ width: 24, height: 24 }}
                source={{ uri: 'http://img.taopic.com/uploads/allimg/120712/201731-120G2144H051.jpg' }}
                />
            ),
        }},
    News: {
        // 嵌套新闻页面导航
        screen: newsNavigator,
        navigationOptions: {
            title: "新闻",
            tabBarIcon: ({tintColor, focused}) => (
                <Image style={{ width: 24, height: 24 }}
                source={{ uri: 'http://img.taopic.com/uploads/allimg/120712/201731-120G2144H051.jpg' }}
                />
            ),
        }},
    ExpoDeviceInfoView: {
        screen: ExpoDeviceInfoView,
        navigationOptions: {
            title: "调用expo的api",
            tabBarIcon: ({tintColor, focused}) => (
                <Image style={{ width: 24, height: 24 }}
                       source={{ uri: 'http://bpic.588ku.com/element_origin_min_pic/16/08/24/2257bdb209b22b0.jpg!/fwfh/804x764/quality/90/unsharp/true/compress/true' }}
                />
            ),
        }
    },
    NativeDeviceInfoView: {
        screen: NativeDeviceInfoView,
        navigationOptions: {
            title: "调用native module的api",
            tabBarIcon: ({tintColor, focused}) => (
                <Image style={{ width: 24, height: 24 }}
                       source={{ uri: 'http://pic02.1sucai.com/190315/330828-1Z3151S03945-lp.jpg' }}
                />
            ),
        }
    },
    ExpoVideoPlayer: {
        screen: ExpoVideoPlayer,
        navigationOptions: {
            title: "调用expo的播放器3",
            tabBarIcon: ({tintColor, focused}) => (
                <Image style={{ width: 24, height: 24 }}
                       source={{ uri: 'https://pic02.taopic.com/191005/240494-1910051K05353-lp.jpg' }}
                />
            ),
        }
    },
});

export default createAppContainer(Navigator);
