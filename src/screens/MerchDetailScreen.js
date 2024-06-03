import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../redux/cartSlice";
import styled from 'styled-components/native';

import { incrementCount, decrementCount, setSelectedButton } from "../redux/merchCountSlice";

const MerchDetailScreen = ({ route }) => {
    const dispatch = useDispatch();

    const count = useSelector(state => state.merchCount.count); // 使用 useSelector 獲取全域變數 count
    const selectedButton = useSelector(state => state.merchCount.selectedButton);


    const handleAddToCart = () => {
        const { id, HotMerchImg, MerchIntro, Price, } = route.params;
        dispatch(addToCart({ id, HotMerchImg, MerchIntro, Price, count, selectedButton, }));

    };

    const handleButtonPress = (buttonName) => {
        dispatch(setSelectedButton(buttonName));
    };

    const Container = styled.View`
        flex: 1;
        background-color: ${(props) => props.theme.background};
    `;
    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
        border-color: ${(props) => props.theme.ButtonBorder};
    `;
    const Button = styled.TouchableOpacity`
        border-color: ${(props) => props.theme.ButtonBorder};
    `;
    const ThemedButton = styled.TouchableOpacity`
        background-color: ${(props) => props.theme.button};
    `;

    const { id, HotMerchImg, MerchIntro, Price } = route.params;

    return (
        <Container>
            <Image
                style={styles.MerchImg}
                source={{ uri: HotMerchImg }}
            />
            <ThemedText style={styles.MerchIntroText}>{MerchIntro}</ThemedText>
            <ThemedText style={styles.PriceText}>Price: ${Price}</ThemedText>
            <ThemedText style={styles.SizeText}>Size：</ThemedText>
            <View style={styles.SizeButton}>
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <Button
                        key={size}
                        style={[styles.button, selectedButton === size && styles.selectedButton]}
                        onPress={() => handleButtonPress(size)}>
                        <ThemedText style={[styles.buttonText, selectedButton === size && styles.selectedButtonText]}>{size}</ThemedText>
                    </Button>
                ))}
            </View>
            <View style={styles.MerchCount}>
                <Button style={styles.countButton} onPress={() => dispatch(decrementCount())}>
                    <ThemedText style={styles.countButtonText}>-</ThemedText>
                </Button>
                <Button>
                    <ThemedText style={styles.countText}>{count}</ThemedText>
                </Button>
                <Button style={styles.countButton} onPress={() => dispatch(incrementCount())}>
                    <ThemedText style={styles.countButtonText}>+</ThemedText>
                </Button>
            </View>
            <ThemedButton style={styles.AddButton}
                onPress={handleAddToCart}
            >
                <ThemedText style={styles.AddText}>Add To Cart</ThemedText>
            </ThemedButton>
        </Container>
    );
}

const styles = StyleSheet.create({
    MerchImg: {
        width: 377,
        height: 377,
        marginTop: 8,
        marginLeft: 17,
    },
    MerchIntroText: {
        fontSize: 20,
        marginTop: 17,
        marginLeft: 17,
    },
    PriceText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 17
    },
    SizeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 17,
        marginTop: 20,
        marginBottom: 10
    },
    SizeButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        borderWidth: 2,
        width: 41,
        height: 32,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    selectedButton: {
        // Change color to indicate selection
        borderColor: 'black'
    },
    selectedButtonText: {
        color: 'black'
    },

    MerchCount: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 18,
    },
    countButton: {
        borderWidth: 2,
        width: 41,
        height: 32,
        borderRadius: 5,
    },
    countButtonText: {
        fontSize: 20,
        textAlign: 'center'
    },
    countText: {
        fontSize: 20,
        borderWidth: 2,
        width: 41,
        height: 32,
        borderRadius: 5,
        textAlign: 'center'
    },
    AddButton: {
        width: 277,
        alignSelf: 'center',
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 5
    },
    AddText: {
        textAlign: 'center',
        fontSize: 20
    }
})

export default MerchDetailScreen;