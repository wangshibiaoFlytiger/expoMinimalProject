import React from 'react';
import {Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

class NativeDeviceInfoView extends React.Component {
    state = {
        deviceInfo: {},
    };

    constructor(props) {
        super(props);
    }

    async componentDidMount(): void {
        this.setState({
            deviceInfo: {
                androidId: await DeviceInfo.getAndroidId(),
                applicationName: DeviceInfo.getApplicationName(),
                brand: DeviceInfo.getBrand(),
                totalMem: await DeviceInfo.getTotalMemory(),
            },
        });

        console.log(this.state.deviceInfo)
    }

    render() {
        return (
            <View>
                <Text>{this.state.deviceInfo.androidId}</Text>
                <Text>{this.state.deviceInfo.applicationName}</Text>
                <Text>{this.state.deviceInfo.brand}</Text>
                <Text>{this.state.deviceInfo.totalMem}</Text>
            </View>
        );
    }
}

export default NativeDeviceInfoView;
