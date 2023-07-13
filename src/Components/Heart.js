import React, { useState, useEffect } from 'react';
import { View, Image, TouchableWithoutFeedback } from "react-native";

const Heart = ({showHeart}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(showHeart);
    }, [showHeart]);

    return (
        <TouchableWithoutFeedback onPress={() => setShow(!show)}>
            {show ?
                <Image
                    source={require('../assets/redheart.png')}
                    resizeMode='contain'
                    style={{ height: 30, width: 30 }}
                />
                :
                <Image
                    source={require('../assets/heart.png')}
                    resizeMode='contain'
                    style={{ height: 30, width: 30 }}
                />}
        </TouchableWithoutFeedback>
    )
}

export default Heart;