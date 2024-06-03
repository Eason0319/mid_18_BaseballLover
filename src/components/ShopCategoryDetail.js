import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import styled from 'styled-components/native';


const ShopCategoryDetail = props => {
    let { Merch } = props;
    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
    `;
    
    return(
        <View>
            <View style={styles.MerchContent}>
                <Image
                    style={styles.MerchImg}
                    source={{ uri: Merch.HotMerchImg}}
                />
                <ThemedText style={styles.MerchTypeText}>{Merch.type}</ThemedText>
            </View>
        </View>
    );
}

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
    MerchTypeText: {
        fontSize: 15,
        textAlign: 'center'
    }
})


export default ShopCategoryDetail;