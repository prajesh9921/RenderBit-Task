import React, {useState} from 'react'
import { View, Text, Image } from "react-native";
import AppButton from './Button';
import stars3 from '../assets/3stars.png';

const FlatListFooter = () => {

    return (
        <View style={{flexDirection: 'row', borderColor: 'black', borderRadius: 10, padding: 20, borderWidth: 1, marginBottom: 10}}>
            <View style={{alignItems: 'flex-start', gap: 10, flex: 3}}>
                <Text style={{fontSize: 25, fontWeight: 500, color: 'black'}}>say goodbye to guesswork</Text>
                <Text style={{fontSize: 12, fontWeight: 400, color: 'black'}}>want even more smudgtastic matches?tap the button below to discover!</Text>
                <View style={{paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 40, borderRadius: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 600, color: 'white'}}>discover</Text>
                </View>
            </View>
            <Image
                source={stars3}
                resizeMode='contain'
                style={{height: 100, width: 100, flex: 2, alignSelf: 'flex-end'}}
            />
        </View>
    )
}

export default FlatListFooter;