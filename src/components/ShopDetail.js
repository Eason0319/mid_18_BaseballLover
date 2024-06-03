import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import styled from 'styled-components/native';

const ShopDetail = props => {
    let { Merch, navigation } = props;
    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
    `;

    return(
        <View>
            <View style={styles.MerchContent}>
            <Pressable onPress={() => navigation.navigate('MerchDetail', Merch)}>
                <Image
                    style={styles.MerchImg}
                    source={{ uri: Merch.HotMerchImg}}
                />
            </Pressable>
                <ThemedText style={styles.PriceText}>${Merch.Price}</ThemedText>
                <ThemedText style={styles.MerchIntro}>{Merch.MerchIntro}</ThemedText>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    MerchContent:{
        marginLeft: 34,
        marginTop: 17,
        marginBottom: 3,
        width: 110,
        hight: 48,
    },
    MerchImg:{
        width: 110,
        height: 110,
    },
    PriceText:{
        fontSize: 15,
    },
    MerchIntro:{
        fontSize: 10
    }
})

export default ShopDetail;