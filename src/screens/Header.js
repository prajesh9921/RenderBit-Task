import React from 'react'
import {View, Text, Image} from 'react-native'

const Header = () => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <View>
                <Text style={{ color: 'black', fontSize: 14 }} >Hi, Aishwarya!</Text>
                <Text style={{ color: 'black', fontSize: 22, fontWeight: 600 }}>beauty starts here</Text>
            </View>
            <Image
                source={require('../assets/burgerMenu.png')}
                resizeMode='contain'
                style={{ width: 30, height: 30 }}
            />
        </View>
    )
}

export default Header;