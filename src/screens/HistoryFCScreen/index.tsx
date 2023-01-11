import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { FAB } from 'react-native-paper';

import { HistoryContext } from '~context/HistoryContext';
import { styles } from '~screens/HistoryFCScreen/style';

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

    const removeItemFromStorage = (key: string) => async () => {
        try {
            await AsyncStorage.removeItem(key);
            setHistory([]);
            return true;
        } catch (exception) {
            return false;
        }
    };

    useEffect(() => {
        getHistory();
    }, []);

    return (
        <>
            {history.length > 0 ? (
                <FlatList
                    contentContainerStyle={styles.block}
                    data={history}
                    renderItem={({ item }) => (
                        <Text key={Date.now() + item} style={[styles.text, { color: colors.border }]}>
                            {item}
                        </Text>
                    )}
                />
            ) : (
                <Text style={[styles.text, { color: colors.border, margin: 16 }]}>empty history</Text>
            )}
            <FAB
                icon={'trash-can-outline'}
                style={styles.fab}
                size="medium"
                onPress={removeItemFromStorage('history')}
            />
        </>
    );
};
