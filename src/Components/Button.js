import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";


const AppButton = ({ active, img, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={active ? styles.activebtn : styles.btn}>
                <Image
                    source={img}
                    resizeMode="contain"
                    style={{ width: 25, height: 25 }}
                />
                <Text style={{ color: 'black', fontSize: 16 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    activebtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3FAAB',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        gap: 5
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        gap: 5
    },
});

export default AppButton;