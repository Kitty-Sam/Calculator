import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Header } from '~components/Header/Header';
import { ThemeContext } from '~context/ThemeContext';
import { CalculatorStack } from '~navigation/CalculatorStack';
import { HistoryStack } from '~navigation/HistoryStack';
import { RootStackParamList } from '~navigation/RootStack/type';

export enum RootNavigationName {
    CALCULATOR_STACK = 'Calculator',
    HISTORY_STACK = 'History',
}

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
    const navigation = useNavigation<any>();

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { colors } = useTheme();

    const storeTheme = async (value: string) => {
        try {
            await AsyncStorage.setItem('theme', JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    const toggleAndStore = () => {
        toggleTheme();
        storeTheme(theme === 'light' ? 'dark' : 'light');
    };

    const onHistoryStackPress = () => {
        navigation.navigate(RootNavigationName.HISTORY_STACK);
    };

    return (
        <Root.Navigator>
            <Root.Screen
                name={RootNavigationName.CALCULATOR_STACK}
                component={CalculatorStack}
                options={() => ({
                    headerRight: () => (
                        <Icon name={'list'} size={24} color={colors.text} onPress={onHistoryStackPress} />
                    ),
                    headerTitleAlign: 'center',
                    headerTitle: () => <Header title={'Calculator'} />,
                })}
            />
            <Root.Screen
                name={RootNavigationName.HISTORY_STACK}
                component={HistoryStack}
                options={({}) => ({
                    headerRight: () => (
                        <Icon name={'moon-outline'} size={24} onPress={toggleAndStore} color={colors.text} />
                    ),
                    headerBackTitle: '',
                    headerTitleAlign: 'center',
                    headerTitle: () => <Header title={'History'} />,
                })}
            />
        </Root.Navigator>
    );
};
