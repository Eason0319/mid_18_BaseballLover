import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScheduleList from "../components/ScheduleList";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const AlScheduleScreen = () => {

    const [showPicker, setShowPicker] = useState(false);
    const [datevalue, setdatevalue] = useState(new Date());

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.DateBar}>
                <MaterialCommunityIcons
                    name="chevron-left"
                    color='black'
                    size={35}
                    style={styles.chevronIcon}
                />
                <Text style={styles.DateText}>{datevalue.toDateString()}</Text>
                <MaterialCommunityIcons
                    name="chevron-right"
                    color='black'
                    size={35}
                    style={styles.chevronIcon}
                />
                <MaterialCommunityIcons
                    name="calendar"
                    color='black'
                    size={35}
                    style={styles.chevronIcon}
                    onPress={() => setShowPicker(!showPicker)}
                />
            </View>
            {showPicker && (
                <RNDateTimePicker
                    mode="date"
                    value={datevalue}
                    locale="zh-tw"
                    is24Hour={true} //Android Only
                    onChange={(event, date) => {
                        setdatevalue(date);
                        setShowPicker(false);
                    }}
                    themeVariant="light"
                />
            )}
            <ScheduleList />
        </View>
    );
}

const styles = StyleSheet.create({
    DateBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10
    },
    chevronIcon: {
        alignSelf: 'center'
    },
    DateText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
})

export default AlScheduleScreen;