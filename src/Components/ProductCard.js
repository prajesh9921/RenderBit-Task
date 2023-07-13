import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import makeup from '../assets/makeup.png';
import skincare from "../assets/skincare.png";
import Heart from './Heart';

const ProductCard = ({ title, description, navigation }) => {

    return (
        <View style={{ borderRadius: 10, borderColor: 'black', borderWidth: 1, flex: 1, marginBottom: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "#E9E9E9", borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: 'black', borderBottomWidth: 1 }}>
                <Image
                    source={require('../assets/product.png')}
                    resizeMode='contain'
                    style={{ height: 150, width: 150, marginTop: 5 }}
                />
            </View>

            <Text style={{ fontSize: 16, fontWeight: 700, color: 'black', marginLeft: 10, marginVertical: 10 }}>{title}</Text>
            <Text style={{ color: '#6B6C6C', fontSize: 16, marginLeft: 10, flexWrap: 'wrap', marginBottom: 50, maxWidth: "90%" }}>{description}</Text>

            <View style={{ marginHorizontal: 10, marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailPage', { text: title, subtext: description })}>
                    <View style={{ borderColor: 'black', borderWidth: 1, height: 40, width: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#6B6C6C', fontSize: 16 }}>view</Text>
                    </View>
                </TouchableOpacity>
                {/* <Image
                    source={require('../assets/heart.png')}
                    resizeMode='contain'
                    style={{ height: 30, width: 30 }}
                /> */}
                <Heart showHeart={false}/>
                <View style={{ borderColor: '#1E2121', borderWidth: 1, height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                    <Image
                        source={require('../assets/3dot.png')}
                        resizeMode='contain'
                        style={{ height: 20, width: 20 }}
                    />
                </View>
            </View>

            <View style={{ alignSelf: 'center', width: '80%', position: 'absolute', top: -15, overflow: 'visible', backgroundColor: 'black', borderRadius: 15, height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                <Image
                    source={require('../assets/super.png')}
                    resizeMode='contain'
                    style={{ height: 20, width: 20 }}
                />
                <Text style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>super match</Text>
            </View>
        </View>
    )
}

export default ProductCard;