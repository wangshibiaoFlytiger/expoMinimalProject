import React from "react";
import * as Device from 'expo-device';
import {Text, ScrollView} from "react-native";


class ExpoDeviceInfoView extends React.Component{
    state = {
        deviceInfo: {},
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <Text>brand:{Device.brand}</Text>
                <Text>totalMem:{Device.totalMemory}</Text>
            </ScrollView>
        );
    }
}

export default ExpoDeviceInfoView;
