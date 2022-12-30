import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '~context/ThemeContext';
import { DarkTheme, LightTheme } from '~constants/Theme/Theme';
import { CalculatorStack } from '~navigation/CalculatorStack';
import { HistoryStack } from '~navigation/HistoryStack';
import { Header } from '~components/Header/Header';

export const enum RootNavigationName {
    CALCULATOR_STACK = 'Calculator',
    HISTORY_STACK = 'History',
}

export type RootStackParamList = {
    [RootNavigationName.CALCULATOR_STACK]: undefined;
    [RootNavigationName.HISTORY_STACK]: undefined;
};

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme }}>
            <Root.Navigator
                screenOptions={{
                    contentStyle: { backgroundColor: theme === 'light' ? LightTheme.background : DarkTheme.background },
                }}
            >
                <Root.Screen
                    name={RootNavigationName.CALCULATOR_STACK}
                    component={CalculatorStack}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Icon
                                name={'list'}
                                size={24}
                                onPress={() => navigation.navigate(RootNavigationName.HISTORY_STACK)}
                            />
                        ),
                        headerTitleAlign: 'center',
                        headerTitle: () => <Header header={'Calculator'} />,
                    })}
                />
                <Root.Screen
                    name={RootNavigationName.HISTORY_STACK}
                    component={HistoryStack}
                    options={({}) => ({
                        headerRight: () => (
                            <Icon
                                name={'moon-outline'}
                                size={24}
                                onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            />
                        ),
                        headerBackTitle: '',
                        headerTitleAlign: 'center',
                        headerTitle: () => <Header header={'History'} />,
                    })}
                />
            </Root.Navigator>
        </ThemeContext.Provider>
    );
};
