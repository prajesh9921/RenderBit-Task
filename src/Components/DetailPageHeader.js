import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";

const DetailHeader = ({navigation}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 }}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image
                    source={require('../assets/leftarrow.png')}
                    resizeMode='contain'
                    style={{ height: 24, width: 24 }}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Image
                    source={require('../assets/share.png')}
                    resizeMode='contain'
                    style={{ height: 24, width: 24 }}
                />
                <Image
                    source={require('../assets/heart.png')}
                    resizeMode='contain'
                    style={{ height: 24, width: 24 }}
                />
            </View>
        </View>
    );
}

export default DetailHeader;