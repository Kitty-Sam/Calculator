import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native';
import { HistoryScreen } from 'screens/HistoryScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from 'utils/ThemeContext/ThemeContext';
import { DarkTheme, LightTheme } from 'constants/Theme/Theme';
import { CalculatorStack } from 'navigation/CalculatorStack';

export const enum RootNavigationName {
    CALCULATOR_STACK = 'Modsen Calculator',
    HISTORY = 'History',
}

export type RootStackParamList = {
    [RootNavigationName.CALCULATOR_STACK]: undefined;
    [RootNavigationName.HISTORY]: undefined;
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
                            <TouchableOpacity onPress={() => navigation.navigate(RootNavigationName.HISTORY)}>
                                <Icon name={'settings-outline'} size={24} />
                            </TouchableOpacity>
                        ),
                        headerTitleAlign: 'left',
                    })}
                />
                <Root.Screen
                    name={RootNavigationName.HISTORY}
                    component={HistoryScreen}
                    options={({}) => ({
                        headerRight: () => (
                            <>
                                <TouchableOpacity onPress={() => console.log('change theme')}>
                                    <Icon
                                        name={'moon-outline'}
                                        size={24}
                                        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log('clear history')}>
                                    <Icon name={'trash-outline'} size={24} />
                                </TouchableOpacity>
                            </>
                        ),
                        headerBackTitle: 'Back',
                        headerTitleAlign: 'left',
                    })}
                />
            </Root.Navigator>
        </ThemeContext.Provider>
    );
};
