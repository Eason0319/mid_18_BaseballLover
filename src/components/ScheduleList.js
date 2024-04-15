import React from "react";
import { View, Text, FlatList, StyleSheet, Image, SectionList, ScrollView } from "react-native";
import ScheduleDetail from "./ScheduleDetail";
import NLScheduleDetail from "./NLScheduleDetail";
import Schedule from "../json/Schedule.json";
import NLSchedule from "../json/NLSchedule";


const ScheduleList = () => {
    return (
            <SectionList
                sections={Schedule}

                renderSectionHeader={({ section }) => (
                    <Text style={styles.ActualDate}>{section.date}</Text>
                )}
                renderItem={({ item }) => <ScheduleDetail Schedule={item} />}
                keyExtractor={item => item.key}
            />
    );
}

const NLScheduleList = () => {
    return (
        <SectionList
            sections={NLSchedule}
            renderSectionHeader={({ section }) => (
                <Text style={styles.ActualDate}>{section.date}</Text>
            )}
            renderItem={({ item }) => <NLScheduleDetail NLSchedule={item} />}
            keyExtractor={item => item.key}
        />
    );
}

const styles = StyleSheet.create({
    ActualDate: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 15
    },
})

export default ScheduleList;
export { NLScheduleList };