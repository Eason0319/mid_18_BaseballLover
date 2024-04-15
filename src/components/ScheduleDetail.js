import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScheduleDetail = props => {
    let { Schedule } = props;
    return (
        <View style={{flex: 1}}>
            <Text style={styles.ActualDate}>{Schedule.date}</Text>
            <View style={styles.MatchBar}>
                <Image
                    style={styles.TeamImg}
                    source={{ uri: Schedule.Team1Img }}
                />
                <Text style={{ fontSize: 20, alignSelf: 'center' }}>@</Text>
                <Image
                    style={styles.TeamImg}
                    source={{ uri: Schedule.Team2Img }}
                />
                <View style={styles.MatchContentText}>
                    <Text style={{ fontSize: 16 }}>{Schedule.MatchTime}</Text>
                    <Text style={{ fontSize: 16, color: '#ACACAC' }}>{Schedule.Broadcast}</Text>
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

export default ScheduleDetail;