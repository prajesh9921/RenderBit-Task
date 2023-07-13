import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Carousal = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const entries = [
        {id: 1, name: "dasdas"},
        {id: 2, name: "dasdas"},
        {id: 3, name: "dasdas"},
        {id: 4, name: "dasdas"},
        {id: 5, name: "dasdas"}
    ]; 

    const renderItem = ({ item, index }) => {
        return <Text>{item.name}</Text>
    };

    const renderPagination = () => {
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    };

    return (
        <View>
            <Carousel
                data={entries}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            {renderPagination()}
        </View>
    );
};

export default Carousal;