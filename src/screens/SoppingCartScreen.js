import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, selectTotalQuantity } from '../redux/cartSlice';
import styled from 'styled-components/native';
import { useTheme } from '../Theme/themeProvider';

const ShoppingCartScreen = () => {
    const dispatch = useDispatch();
    const { theme, toggleTheme } = useTheme();
    const cartItems = useSelector(state => state.cart.cartItems);

    const Container = styled.View`
        flex: 1;
        background-color: ${(props) => props.theme.background};
    `;
    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
    `;
    const ThemedButton = styled.TouchableOpacity`
        background-color: ${(props) => props.theme.button};
    `;


    const renderItem = ({ item }) => {
        const { id, HotMerchImg, MerchIntro, Price, count, selectedButton } = item;

        const handleRemoveItem = () => {
            dispatch(removeFromCart({ id, selectedButton }));
        };

        return (
            <View style={styles.itemContainer}>
                <Image source={{ uri: HotMerchImg }} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                    <ThemedText style={styles.itemText}>{MerchIntro}</ThemedText>
                    <ThemedText style={styles.CountText}>Size: {selectedButton}</ThemedText>
                    <ThemedText style={styles.PriceText}>Price: $ {Price * count}</ThemedText>
                    <ThemedText style={styles.CountText}>Count: {count}</ThemedText>

                </View>
                <MaterialCommunityIcons
                    name={'trash-can-outline'}
                    size={30}
                    color={theme.text}
                    onPress={handleRemoveItem}
                    style={styles.removeButton}
                />
            </View>
        );
    };

    return (
        <Container style={styles.container}>
            {cartItems.length === 0 ? (

                <ThemedText style={styles.emptyCartText}>Shooping cart is empty！！</ThemedText>

            ) : (
                <View>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                    <ThemedButton style={styles.checkOutButton}>
                        <ThemedText style={styles.checkOutText}>Checkout</ThemedText>
                    </ThemedButton>
                </View>
            )}
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    emptyCartText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
        marginBottom: 10,
    },
    itemImage: {
        width: 100,
        height: 100,
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
    PriceText: {
        fontSize: 24,
        marginBottom: 5,
    },
    CountText: {
        fontSize: 24,
        marginBottom: 5,
    },
    removeButton: {
        alignSelf: 'flex-end'
    },
    removeButtonText: {
        color: '#fff',
    },
    checkOutButton: {
        width: 277,
        alignSelf: 'center',
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 5
    },
    checkOutText: {
        textAlign: 'center',
        fontSize: 20
    },
});

export default ShoppingCartScreen;
