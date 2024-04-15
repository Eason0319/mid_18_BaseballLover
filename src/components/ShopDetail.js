import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const ShopDetail = props => {
    let { Merch, navigation } = props;
    return(
        <View>
            <View style={styles.MerchContent}>
            <Pressable onPress={() => navigation.navigate('MerchDetail', Merch)}>
                <Image
                    style={styles.MerchImg}
                    source={{ uri: Merch.HotMerchImg}}
                />
            </Pressable>
                <Text style={styles.PriceText}>${Merch.Price}</Text>
                <Text style={styles.MerchIntro}>{Merch.MerchIntro}</Text>
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