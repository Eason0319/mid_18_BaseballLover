import React, { useState } from 'react';
import { Text, Center, Button } from "@gluestack-ui/themed"
import { useTheme } from '../Theme/themeProvider';
import styled from 'styled-components/native';
import { StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Switch, } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { lightTheme, darkTheme } from '../Theme';


const SettingScreen = () => {

    const [form, setForm] = useState({
        darkMode: false,
        emailNotifications: true,
        pushNotifications: false,
    });

    const { theme, toggleTheme } = useTheme();
    const [isEnabled, setIsEnabled] = useState(theme === darkTheme);

    const handleToggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        toggleTheme();
    };

    const Container = styled.View`
        flex: 1;
        background-color: ${(props) => props.theme.background};
    `;
    const ThemedText = styled.Text`
        color: ${(props) => props.theme.text};
    `;
    const ThemedSettingBar = styled.TouchableOpacity`
        background-color: ${(props) => props.theme.settingBar};
    `;

    const styles = StyleSheet.create({
        /** Section */
        section: {
            paddingHorizontal: 24,
        },
        sectionTitle: {
            paddingVertical: 12,
            fontSize: 12,
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: 1.1,
        },
        /** Row */
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 50,
            backgroundColor: theme.settingBar,
            borderRadius: 8,
            marginBottom: 12,
            paddingLeft: 12,
            paddingRight: 12,
        },
        rowIcon: {
            width: 32,
            height: 32,
            borderRadius: 9999,
            marginRight: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        rowLabel: {
            fontSize: 17,
            fontWeight: '400',
        },
        rowSpacer: {
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
        },
    });

    return (
        <Container>
            <ScrollView>
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>Preferences</ThemedText>
                    <ThemedSettingBar
                        onPress={() => {
                            // handle onPress
                        }}
                        style={styles.row}>
                        <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                            <FeatherIcon color="#fff" name="globe" size={20} />
                        </View>
                        <ThemedText style={styles.rowLabel}>Language</ThemedText>
                        <View style={styles.rowSpacer} />
                        <FeatherIcon
                            color="#C6C6C6"
                            name="chevron-right"
                            size={20} />
                    </ThemedSettingBar>
                    <View style={styles.row}>
                        <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                            <FeatherIcon color="#fff" name="moon" size={20} />
                        </View>
                        <ThemedText style={styles.rowLabel}>Dark Mode</ThemedText>
                        <View style={styles.rowSpacer} />
                        <Switch
                            onValueChange={handleToggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <ThemedSettingBar
                        onPress={() => {
                            // handle onPress
                        }}
                        style={styles.row}>
                        <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                            <FeatherIcon
                                color="#fff"
                                name="navigation"
                                size={20} />
                        </View>
                        <ThemedText style={styles.rowLabel}>Location</ThemedText>
                        <View style={styles.rowSpacer} />
                        <FeatherIcon
                            color="#C6C6C6"
                            name="chevron-right"
                            size={20} />
                    </ThemedSettingBar>
                    <View style={styles.row}>
                        <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                            <FeatherIcon
                                color="#fff"
                                name="at-sign"
                                size={20} />
                        </View>
                        <ThemedText style={styles.rowLabel}>Email Notifications</ThemedText>
                        <View style={styles.rowSpacer} />
                        <Switch
                            onValueChange={emailNotifications =>
                                setForm({ ...form, emailNotifications })
                            }
                            value={form.emailNotifications} />
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                            <FeatherIcon color="#fff" name="bell" size={20} />
                        </View>
                        <ThemedText style={styles.rowLabel}>Push Notifications</ThemedText>
                        <View style={styles.rowSpacer} />
                        <Switch
                            onValueChange={pushNotifications =>
                                setForm({ ...form, pushNotifications })
                            }
                            value={form.pushNotifications} />
                    </View>
                </View>
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>Resources</ThemedText>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}
                        style={styles.row}>
                        <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
                            <FeatherIcon color="#fff" name="flag" size={20} />
                        </View>
                        <ThemedText style={styles.rowLabel}>Report Bug</ThemedText>
                        <View style={styles.rowSpacer} />
                        <FeatherIcon
                            color="#C6C6C6"
                            name="chevron-right"
                            size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}
                        style={styles.row}>
                        <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                            <FeatherIcon color="#fff" name="mail" size={20} />
                        </View>
                        <ThemedText style={styles.rowLabel}>Contact Us</ThemedText>
                        <View style={styles.rowSpacer} />
                        <FeatherIcon
                            color="#C6C6C6"
                            name="chevron-right"
                            size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}
                        style={styles.row}>
                        <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                            <FeatherIcon color="#fff" name="star" size={20} />
                        </View>
                        <ThemedText style={styles.rowLabel}>Rate in App Store</ThemedText>
                        <View style={styles.rowSpacer} />
                        <FeatherIcon
                            color="#C6C6C6"
                            name="chevron-right"
                            size={20} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    );
}



export default SettingScreen;