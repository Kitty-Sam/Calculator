import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { CalculatorStack } from '~navigation/CalculatorStack';
import { HistoryStack } from '~navigation/HistoryStack';
import { Header } from '~components/Header/Header';
import { ThemeContext } from '~context/ThemeContext';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '~navigation/RootStack/type';

export const enum RootNavigationName {
    CALCULATOR_STACK = 'Calculator',
    HISTORY_STACK = 'History',
}

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
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

    return (
        <Root.Navigator>
            <Root.Screen
                name={RootNavigationName.CALCULATOR_STACK}
                component={CalculatorStack}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <Icon
                            name={'list'}
                            size={24}
                            color={colors.text}
                            onPress={() => navigation.navigate(RootNavigationName.HISTORY_STACK)}
                        />
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
