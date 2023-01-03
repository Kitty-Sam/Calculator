import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Alert, View } from 'react-native';
import { styles } from './style';
import { Display } from '~components/Display';
import { KeyPad } from '~components/KeyPad';
import { calculateInputData, evalForInput } from '~utils/Calculate/calculate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryContext } from '~context/HistoryContext';

export const CalculatorFCScreen = () => {
    const [input, setInput] = useState('');
    const [isEqual, setIsEqual] = useState(false);
    const [result, setResult] = useState('');

    const { history, setHistory } = useContext(HistoryContext);

    const getHistory = async () => {
        try {
            const savedHistory = await AsyncStorage.getItem('history');
            if (savedHistory) {
                const resultedHistory = await JSON.parse(savedHistory);
                setHistory(resultedHistory);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getHistory();
    }, []);

    const storeHistory = async (value: string[]) => {
        try {
            await AsyncStorage.setItem('history', JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setIsEqual(false);
        storeHistory(history);
    }, [history]);

    const onPressHandler = useCallback(
        (key: string) => {
            if (!input) {
                setInput(key);
            }
            if (input) {
                switch (key) {
                    case 'Ac': {
                        setInput('');
                        setResult('');
                        break;
                    }
                    case '%': {
                        setInput((expression) => {
                            return String(+expression / 100);
                        });
                        break;
                    }
                    case 'del': {
                        setInput(input.slice(0, input.length - 1));
                        break;
                    }
                    case '=': {
                        setIsEqual(true);
                        try {
                            setResult(calculateInputData(evalForInput(input)));
                            setHistory(history.concat([input + '=' + calculateInputData(evalForInput(input))]));
                            setInput(calculateInputData(evalForInput(input)));
                        } catch (error: any) {
                            Alert.alert(error.message);
                        }
                        break;
                    }
                    case '+/-':
                        setInput((lastKey) => {
                            return lastKey.slice(0, -1) + key;
                        });

                        break;
                    default:
                        setInput(`${input}${key}`);
                }
            }
        },
        [input, history],
    );

    return (
        <View style={styles.rootContainer}>
            <Display input={input} result={result} isEqual={isEqual} />
            <KeyPad onPressHandler={onPressHandler} />
        </View>
    );
};
