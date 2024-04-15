import React from 'react';
import { StyleSheet, Divider, Image, Text, View } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor: "#E4E4E4"}}>
                    <Image
                        source={require('../img/UserImg.png')}
                        style={{
                            width: 127,
                            height: 127,
                            marginLeft: 30,
                            marginTop: 19
                        }}
                    />
                    <Text style={styles.user}>Username</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    user: {
        fontSize: 36,
        textAlign: 'left',
        fontWeight: '500',
        marginLeft: 40,
        marginBottom: 30,
    }
})

export default CustomDrawerContent;