import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScheduleList from "../components/ScheduleList";
import { NLScheduleList } from "../components/ScheduleList";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import styled from 'styled-components/native';
import { useTheme } from '../Theme/themeProvider';

const NlScheduleScreen = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [datevalue, setdatevalue] = useState(new Date());
    const { theme, toggleTheme } = useTheme();

    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
    `;

    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.DateBar}>
                <MaterialCommunityIcons
                    name="chevron-left"
                    color={theme.text}
                    size={35}
                    style={styles.chevronIcon}
                    onPress={() => setdatevalue(addDays(datevalue, -1))}
                />
                <ThemedText style={styles.DateText}>{datevalue.toDateString()}</ThemedText>
                <MaterialCommunityIcons
                    name="chevron-right"
                    color={theme.text}
                    size={35}
                    style={styles.chevronIcon}
                    onPress={() => setdatevalue(addDays(datevalue, 1))}
                />
                <MaterialCommunityIcons
                    name="calendar"
                    color={theme.text}
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
            <NLScheduleList />
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

export default NlScheduleScreen;