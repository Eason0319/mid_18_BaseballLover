import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const MerchDetailScreen = ({ route }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [count, setCount] = useState(0);

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const { HotMerchImg, MerchIntro, Price } = route.params;
    return (
        <View>
            <Image
                style={styles.MerchImg}
                source={{ uri: HotMerchImg }}
            />
            <Text style={styles.MerchIntroText}>{MerchIntro}</Text>
            <Text style={styles.PriceText}>Price: ${Price}</Text>
            <Text style={styles.SizeText}>Size</Text>
            <View style={styles.SizeButton}>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 'XS' && styles.selectedButton]}
                    onPress={() => handleButtonPress('XS')}>
                    <Text style={[styles.buttonText, selectedButton === 'XS' && styles.selectedButtonText]}>XS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 'S' && styles.selectedButton]}
                    onPress={() => handleButtonPress('S')}>
                    <Text style={[styles.buttonText, selectedButton === 'S' && styles.selectedButtonText]}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 'M' && styles.selectedButton]}
                    onPress={() => handleButtonPress('M')}>
                    <Text style={[styles.buttonText, selectedButton === 'M' && styles.selectedButtonText]}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 'L' && styles.selectedButton]}
                    onPress={() => handleButtonPress('L')}>
                    <Text style={[styles.buttonText, selectedButton === 'L' && styles.selectedButtonText]}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 'XL' && styles.selectedButton]}
                    onPress={() => handleButtonPress('XL')}>
                    <Text style={[styles.buttonText, selectedButton === 'XL' && styles.selectedButtonText]}>XL</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.MerchCount}>
                <TouchableOpacity style={styles.countButton} onPress={decreaseCount}>
                    <Text style={styles.countButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity style={styles.countButton} onPress={increaseCount}>
                    <Text style={styles.countButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.AddButton}>
                <Text style={styles.AddText}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
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
        width: 41,
        height: 32,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ACACAC'
    },
    selectedButton: {
        // Change color to indicate selection
        borderColor: 'black'
    },
    selectedButtonText: {
        color: 'black'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ACACAC'
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
        borderColor: 'black'
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
        backgroundColor: '#9D9D9D',
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