import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';


const ExpertCard = () => {
    return (
        <View style={{marginHorizontal: 10}}>
            <View>
                <ImageBackground
                    source={require('../assets/photo.png')}
                    resizeMode='contain'
                    style={{ height: 250, width: 150, paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'space-between' }}
                >
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <Image
                            source={require('../assets/play.png')}
                            resizeMode='contain'
                            style={{ height: 15, width: 15 }}
                        />
                        <Text>30s</Text>
                    </View>

                    <Text style={{ color: 'white', flexWrap: 'wrap' }}>Aliquam dignissim a tellus eu egestas.</Text>
                </ImageBackground>
            </View>
        </View>
    )
}

export default ExpertCard;