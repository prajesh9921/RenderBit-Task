import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from "react-native";
import DetailHeader from '../Components/DetailPageHeader';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ExpertCard from '../Components/ExpertCard';
import Rating from '../Components/Rating';
import LikeCard from '../Components/Youmaylikecard';

const DetailPage = ({ navigation, route }) => {

    const {text, subtext} = route.params;

    const [activeSlide, setActiveSlide] = useState(0);
    const entries = [
        { id: 1, image: require('../assets/product.png') },
        { id: 2, image: require('../assets/product.png') },
        { id: 3, image: require('../assets/product.png') },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
            </View>
        );
    };

    return (
        <View>
            <DetailHeader navigation={navigation} />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={{ marginHorizontal: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Carousel
                        data={entries}
                        renderItem={renderItem}
                        onSnapToItem={(index) => setActiveSlide(index)}
                        sliderWidth={300}
                        itemWidth={300}
                    />
                    <Pagination
                        dotsLength={entries.length}
                        activeDotIndex={activeSlide}
                        containerStyle={styles.paginationContainer}
                        dotStyle={styles.paginationDot}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={1}
                    />
                </View>

                <View style={{ gap: 10 }}>
                    <Text style={{ color: '#7B7B7B', fontSize: 14, fontWeight: '600', paddingHorizontal: 10 }}>{text}</Text>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10 }}>{subtext}</Text>
                    <View style={{ flexDirection: 'row', gap: 5, paddingHorizontal: 10, marginTop: 30 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 25, height: 50, borderColor: 'black', borderWidth: 1 }}>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>view brand</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 25, height: 50, backgroundColor: 'black' }}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>view brand</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 40 }}>
                    <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold', marginHorizontal: 10, marginBottom: 20 }}>key benefits</Text>
                    <View style={{ borderRadius: 20, borderColor: 'black', opacity: 0.5, borderWidth: 1, padding: 15, marginHorizontal: 10 }}>
                        {/* Card */}
                        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10, alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: "#E2E2E2", borderWidth: 2 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>17</Text>
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>users 3 this </Text>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, opacity: 0.5 }}>and we think you will too</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10, alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: "#E2E2E2", borderWidth: 2 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>8</Text>
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>experts recommend this</Text>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, opacity: 0.5 }}>for your face profile</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10, alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: "#E2E2E2", borderWidth: 2 }}>
                                <Image
                                    source={require('../assets/water.png')}
                                    resizeMode='contain'
                                    style={{ height: 20, width: 20 }}
                                />
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>waterproof</Text>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, opacity: 0.5 }}>splash away, makeup stays safe</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10, alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: "#E2E2E2", borderWidth: 2 }}>
                                <Image
                                    source={require('../assets/water.png')}
                                    resizeMode='contain'
                                    style={{ height: 20, width: 20 }}
                                />
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>moisturising</Text>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, opacity: 0.5 }}>bye-bye dryness!</Text>
                            </View>
                        </View>

                        <Text style={{ color: 'black', fontSize: 12, opacity: 0.6 }}>product recommendations are based on your skin profile.  to know more about my process, data privacy and other things read our terms & conditions. to know  why this specific product is a match, tap below. </Text>

                    </View>
                </View>

                {/* EXPERT VIEWS */}
                <Text style={{ marginVertical: 30, marginHorizontal: 10, fontSize: 24, color: 'black', fontWeight: 'bold', marginBottom: 20 }}>expert reviews</Text>
                <ScrollView
                    horizontal={true}
                >
                    {entries.map((item) => <ExpertCard />)}
                </ScrollView>

                {/* RATING */}
                <View style={{ marginHorizontal: 10, marginVertical: 30, borderColor: 'black', borderWidth: 1, borderRadius: 30, alignItems: 'center', gap: 20, padding: 30 }}>
                    <Rating />
                    <View style={{ width: '100%', height: 60, borderRadius: 30, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>rate this product</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ marginHorizontal: 10, fontSize: 24, color: 'black', fontWeight: 'bold', marginBottom: 20 }}>you may also like</Text>
                    <ScrollView horizontal={true}>
                        {entries.map(item => <LikeCard/>)}
                    </ScrollView>
                </View>

            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    slide: {
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#E9E9E9',
        borderColor: 'black',
        borderWidth: 1,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 250,
        width: 250,
        resizeMode: 'contain',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor: 'black',
    },
});

export default DetailPage;