import React from 'react';
import { FlatList, Platform, Text } from 'react-native';

import { FAB } from 'react-native-paper';
import { styles } from '~screens/HistoryCCScreen/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryCCScreenPropsType, HistoryStateType } from '~screens/HistoryCCScreen/type';
import { DarkTheme } from '~constants/Theme/Theme';

export default class HistoryCCScreen extends React.Component<HistoryCCScreenPropsType, HistoryStateType> {
    constructor(props: HistoryCCScreenPropsType) {
        super(props);
        this.state = {
            history: [],
        };
    }

    clearHistory = async () => {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
            if (Platform.OS === 'android') {
                await AsyncStorage.clear();
                this.setState({
                    history: [],
                });
            }
            if (Platform.OS === 'ios') {
                await AsyncStorage.multiRemove(asyncStorageKeys);
                this.setState({
                    history: [],
                });
            }
        }
    };

    getHistory = async () => {
        try {
            const savedHistory = await AsyncStorage.getItem('classHistory');
            if (savedHistory) {
                const resultedHistory = await JSON.parse(savedHistory);
                this.setState({
                    history: resultedHistory,
                });
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.getHistory();
    }

    render() {
        return (
            <>
                {this.state.history.length > 0 ? (
                    <FlatList
                        contentContainerStyle={styles.block}
                        data={this.state.history}
                        renderItem={({ item }) => (
                            <Text key={Date.now() + item} style={[styles.text, { color: DarkTheme.colors.primary }]}>
                                {item}
                            </Text>
                        )}
                    />
                ) : (
                    <Text style={[styles.text, { color: DarkTheme.colors.primary, margin: 16 }]}>empty history</Text>
                )}
                <FAB icon={'trash-can-outline'} style={styles.fab} size="medium" onPress={this.clearHistory} />
            </>
        );
    }
}
