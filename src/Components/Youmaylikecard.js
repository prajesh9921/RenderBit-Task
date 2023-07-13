import React from 'react'
import { View, Text, Image } from 'react-native';
import Heart from './Heart';

const LikeCard = () => {
    return (
        <View style={{ flexDirection: 'row', borderColor: 'black', borderWidth: 1, borderRadius: 15, padding: 10, marginHorizontal: 10 }}>
            <View style={{ gap: 10, width: 150 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>NYKAA</Text>
                <Text style={{ color: 'black' }}>Bath & Body Works Pineapple Coconut...</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <View style={{ borderColor: 'black', borderWidth: 1, height: 40, width: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#6B6C6C', fontSize: 16 }}>view</Text>
                    </View>
                    <Heart showHeart={false}/>
                </View>
            </View>

            <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }} >
                <Image
                    source={require('../assets/product.png')}
                    resizeMode='contain'
                    style={{ height: 100, width: 100 }}
                />
            </View>

        </View>
    )
}

export default LikeCard;