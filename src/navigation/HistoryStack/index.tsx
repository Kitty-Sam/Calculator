import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemeContext } from '~context/ThemeContext';
import { DarkTheme, LightTheme } from '~constants/Theme/Theme';
import { HistoryFCScreen } from '~screens/HistoryFCScreen';
import HistoryCCScreen from '~screens/HistoryCCScreen';
import { HistoryStackParamList } from '~navigation/HistoryStack/type';

export const enum HistoryNavigationName {
    HISTORY_FC = 'History FC',
    HISTORY_CC = 'History CC',
}

const History = createMaterialTopTabNavigator<HistoryStackParamList>();

export const HistoryStack = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <History.Navigator
            sceneContainerStyle={{
                backgroundColor: theme === 'light' ? LightTheme.colors.background : DarkTheme.colors.background,
            }}
        >
            <History.Screen name={HistoryNavigationName.HISTORY_FC} component={HistoryFCScreen} />
            <History.Screen name={HistoryNavigationName.HISTORY_CC} component={HistoryCCScreen} />
        </History.Navigator>
    );
};
