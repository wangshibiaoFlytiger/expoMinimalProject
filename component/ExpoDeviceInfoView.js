import React from "react";
import * as Device from 'expo-device';
import {Text, View} from "react-native";

class ExpoDeviceInfoView extends React.Component{
    state = {
        deviceInfo: {},
    };

    // 导航参数
    static navigationOptions = {
        title: '调用expo的api',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>brand:{Device.brand}</Text>
                <Text>totalMem:{Device.totalMemory}</Text>
            </View>
        );
    }
}

export default ExpoDeviceInfoView;
