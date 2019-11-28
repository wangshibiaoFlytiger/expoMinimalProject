import React from "react";
import {View} from "react-native";
import {Video} from "expo-av";

class ExpoVideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Video
                    source={{ uri: 'http://video-src.opgirl.cn/5cf56e54dfb440cfa2e94b4e021e452a/ef06b1b42bbf2e05869889aeb3b4c19f/ef06b1b42bbf2e05869889aeb3b4c19f_h264_aac.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: 300, height: 300 }}
                />
            </View>
        );
    }
}

export default ExpoVideoPlayer;
