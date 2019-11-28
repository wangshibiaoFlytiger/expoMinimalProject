import React from "react";
import * as Device from 'expo-device';
import {Text, ScrollView} from "react-native";
import View from "react-native-web/dist/exports/View";


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
