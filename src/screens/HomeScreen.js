import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import API from '../API';
import Header from './Header';
import ProductCard from '../Components/ProductCard';
import FlatListHeader from '../Components/FlatlistHeader';
import FlatListFooter from '../Components/FlatlistFooter';

const HomeScreen = ({navigation}) => {
    const { GetData } = API();
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(true);


    useEffect(() => {
        GetData(setData, setLoading);
    }, []);

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header />

            {
                active ? (
                    <FlatList
                        ListHeaderComponent={FlatListHeader(setActive)}
                        ListFooterComponent={FlatListFooter}
                        numColumns={2}
                        data={Data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ProductCard title={item.name} description={item.email} navigation={navigation}/>
                        )}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        columnWrapperStyle={{ gap: 10 }}
                    />
                ) : (
                    <FlatList
                        ListHeaderComponent={FlatListHeader(setActive)}
                        ListFooterComponent={FlatListFooter}
                        numColumns={2}
                        data={Data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ProductCard title={item.company.name} description={item.company.bs} navigation={navigation}/>
                        )}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        columnWrapperStyle={{ gap: 10 }}
                    />
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    activebtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3FAAB',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
    },
});

export default HomeScreen;
