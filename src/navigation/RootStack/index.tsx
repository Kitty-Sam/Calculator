import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { CalculatorStack } from '~navigation/CalculatorStack';
import { HistoryStack } from '~navigation/HistoryStack';
import { Header } from '~components/Header/Header';
import { ThemeContext } from '~context/ThemeContext';
import { useTheme } from '@react-navigation/native';

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
    const { toggleTheme } = useContext(ThemeContext);
    const { colors } = useTheme();

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
                    headerTitle: () => <Header header={'Calculator'} />,
                })}
            />
            <Root.Screen
                name={RootNavigationName.HISTORY_STACK}
                component={HistoryStack}
                options={({}) => ({
                    headerRight: () => (
                        <Icon name={'moon-outline'} size={24} onPress={toggleTheme} color={colors.text} />
                    ),
                    headerBackTitle: '',
                    headerTitleAlign: 'center',
                    headerTitle: () => <Header header={'History'} />,
                })}
            />
        </Root.Navigator>
    );
};
