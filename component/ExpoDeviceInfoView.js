import React from "react";
import * as Device from 'expo-device';
import {Text, View} from "react-native";

class ExpoDeviceInfoView extends React.Component{
    state = {
        deviceInfo: {},
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
