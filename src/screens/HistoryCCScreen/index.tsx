import React from 'react';
import { Platform, ScrollView, Text } from 'react-native';

import { FAB } from 'react-native-paper';
import { styles } from '~screens/HistoryCCScreen/style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type HistoryStateType = {};

export type HistoryCCScreenPropsType = {};

export default class HistoryCCScreen extends React.Component<HistoryCCScreenPropsType, HistoryStateType> {
    clearHistory = async () => {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
            if (Platform.OS === 'android') {
                await AsyncStorage.clear();
                // setHistory([]);
            }
            if (Platform.OS === 'ios') {
                await AsyncStorage.multiRemove(asyncStorageKeys);
                // setHistory([]);
            }
        }
    };

    getHistory = async () => {
        try {
            const savedHistory = await AsyncStorage.getItem('history');
            if (savedHistory) {
                const resultedHistory = await JSON.parse(savedHistory);
                // setHistory(resultedHistory);
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
                {/*<ScrollView style={styles.block}>*/}
                {/*    {history.length > 0 ? (*/}
                {/*        history.map((el) => (*/}
                {/*            <Text key={Date.now() + el} style={[styles.text, { color: colors.border }]}>*/}
                {/*                {el}*/}
                {/*            </Text>*/}
                {/*        ))*/}
                {/*    ) : (*/}
                {/*        <Text style={[styles.text, { color: colors.border }]}>empty history</Text>*/}
                {/*    )}*/}
                {/*</ScrollView>*/}
                <FAB icon={'trash-can-outline'} style={styles.fab} size="medium" onPress={this.clearHistory} />
            </>
        );
    }
}
