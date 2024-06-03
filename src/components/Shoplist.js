import React from "react";
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import ShopDetail from "./ShopDetail";
import ShopCategoryDetail from "./ShopCategoryDetail";
import Merch from "../json/Merch.json";
import styled from 'styled-components/native';

const Shoplist = ({ navigation }) => {

    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
    `;

    return (
        <ScrollView>
            <View style={styles.HotMerchBar}>
                <ThemedText style={styles.HotMerchText}>Hot Merch</ThemedText>
            </View>
            <FlatList
                horizontal={true}
                data={Merch[0].data}
                renderItem={({ item }) => <ShopDetail Merch={item} navigation={navigation} />}
                keyExtractor={item => item.title}
            />
            <View style={styles.HotMerchBar}>
                <ThemedText style={styles.HotMerchText}>What's New</ThemedText>
            </View>
            <FlatList
                horizontal={true}
                data={Merch[1].data}
                renderItem={({ item }) => <ShopDetail Merch={item} navigation={navigation} />}
                keyExtractor={item => item.title}
            />
            <View style={styles.HotMerchBar}>
                <ThemedText style={styles.HotMerchText}>Category</ThemedText>
            </View>
            <FlatList
                horizontal={true}
                data={Merch[2].data}
                renderItem={({ item }) => <ShopCategoryDetail Merch={item} />}
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