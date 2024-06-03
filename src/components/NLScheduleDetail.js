import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const NLScheduleDetail = props => {
    let { NLSchedule } = props;
    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
        `;

    return (
        <View style={{flex: 1}}>
            <ThemedText style={styles.ActualDate}>{NLSchedule.date}</ThemedText>
            <View style={styles.MatchBar}>
                <Image
                    style={styles.TeamImg}
                    source={{ uri: NLSchedule.Team1Img }}
                />
                <ThemedText style={{ fontSize: 20, alignSelf: 'center' }}>@</ThemedText>
                <Image
                    style={styles.TeamImg}
                    source={{ uri: NLSchedule.Team2Img }}
                />
                <View style={styles.MatchContentText}>
                    <ThemedText style={{ fontSize: 16 }}>{NLSchedule.MatchTime}</ThemedText>
                    <Text style={{ fontSize: 16, color: '#ACACAC' }}>{NLSchedule.Broadcast}</Text>
                </View>
                <MaterialCommunityIcons
                    name="ticket-confirmation"
                    color='#ACACAC'
                    size={35}
                    style={styles.ticket}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    MatchBar: {
        flexDirection: 'row',
        marginHorizontal: 30,
        position: 'relative',
    },
    TeamImg: {
        width: 30,
        height: 30,
        margin: 5,
    },
    MatchContentText: {
        flexDirection: 'column',
        marginLeft: 10
    },
    ticket: {
        position: 'absolute',
        right: 0
    },
    ActualDate: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 30,
    },
})

export default NLScheduleDetail;