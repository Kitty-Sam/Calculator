import React, { useContext, useEffect } from 'react';
import { Platform, ScrollView, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import { styles } from '~screens/HistoryFCScreen/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import { HistoryContext } from '~context/HistoryContext';

export const HistoryFCScreen = () => {
    const { colors } = useTheme();
    const { history, setHistory } = useContext(HistoryContext);

    const getHistory = async () => {
        try {
            const savedHistory = await AsyncStorage.getItem('history');
            if (savedHistory) {
                const resultedHistory = await JSON.parse(savedHistory);
                setHistory(resultedHistory);
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    };

    const clearHistory = async () => {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
            if (Platform.OS === 'android') {
                await AsyncStorage.clear();
                setHistory([]);
            }
            if (Platform.OS === 'ios') {
                await AsyncStorage.multiRemove(asyncStorageKeys);
                setHistory([]);
            }
        }
    };

    useEffect(() => {
        getHistory();
    }, []);

    return (
        <>
            <ScrollView style={styles.block}>
                {history.length > 0 ? (
                    history.map((el) => (
                        <Text key={Date.now() + el} style={[styles.text, { color: colors.border }]}>
                            {el}
                        </Text>
                    ))
                ) : (
                    <Text style={[styles.text, { color: colors.border }]}>empty history</Text>
                )}
            </ScrollView>
            <FAB icon={'trash-can-outline'} style={styles.fab} size="medium" onPress={clearHistory} />
        </>
    );
};
