import React, {useState} from 'react'
import { View, Text } from "react-native";
import AppButton from './Button';
import makeup from '../assets/makeup.png';
import skincare from "../assets/skincare.png";

const FlatListHeader = (setActive) => {

    const [makeupActive, setMakeUpActive] = useState(true);
    const [skincareActive, setSkinCareActive] = useState(false);

    const handleMakeUp = () => {
        setMakeUpActive(true);
        setSkinCareActive(false);
        setActive(true);
    }

    const handleSkinCare = () => {
        setMakeUpActive(false);
        setSkinCareActive(true);
        setActive(false);
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', gap: 10, marginVertical: 30 }}>
                <AppButton
                    active={makeupActive}
                    img={makeup}
                    title='makeup'
                    onPress={handleMakeUp}
                />
                <AppButton
                    active={skincareActive}
                    img={skincare}
                    title='skincare'
                    onPress={handleSkinCare}
                />
            </View>
            <View style={{ marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: 600, color: 'black' }}>
                    Weekly Top 4
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>
                    Perfect-for-you based on your goals!
                </Text>
            </View>
        </View>
    )
}

export default FlatListHeader;