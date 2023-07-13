import React from 'react'
import {View, Text, Image} from "react-native";


const Rating = () => {

    const array = [1,2,3,4,5];

    return (
        <View style={{flexDirection: 'row', gap: 10}}>
            {array.map(item => <Image
            source={require('../assets/star.png')}
            resizeMode='contain'
            style={{height: 30, width: 30}} 
        />)}
        </View>
    )
}

export default Rating;