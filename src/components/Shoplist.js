import React from "react";
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import ShopDetail from "./ShopDetail";
import ShopCategoryDetail from "./ShopCategoryDetail";
import Merch from "../json/Merch.json";

const Shoplist = ({navigation}) => {


    return (
        <ScrollView>
            <View style={styles.HotMerchBar}>
                <Text style={styles.HotMerchText}>Hot Merch</Text>
            </View>
            <FlatList
                horizontal={true}
                data={Merch[0].data}
                renderItem={({ item }) => <ShopDetail Merch={item} navigation={navigation}/>}
                keyExtractor={item => item.title}
            />
            <View style={styles.HotMerchBar}>
                <Text style={styles.HotMerchText}>What's New</Text>
            </View>
            <FlatList
                horizontal={true}
                data={Merch[1].data}
                renderItem={({ item }) => <ShopDetail Merch={item} navigation={navigation}/>}
                keyExtractor={item => item.title}
            />
            <View style={styles.HotMerchBar}>
                <Text style={styles.HotMerchText}>Category</Text>
            </View>
            <FlatList
                horizontal={true}
                data={Merch[2].data}
                renderItem={({ item }) => <ShopCategoryDetail Merch={item}/>}
                keyExtractor={item => item.title}
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    HotMerchBar: {
        marginTop: 22,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    HotMerchText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})

export default Shoplist;