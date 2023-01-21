import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useContext } from 'react';

import { DarkTheme, LightTheme } from '~constants/Theme/Theme';
import { ThemeContext } from '~context/ThemeContext';
import { CalculatorStackParamList } from '~navigation/CalculatorStack/type';
import CalculatorCCScreen from '~screens/CalculatorCCScreen';
import { CalculatorFCScreen } from '~screens/CalculatorFCScreen';

export enum CalculatorNavigationName {
    CALCULATOR_FC = 'Calculator FC',
    CALCULATOR_CC = 'Calculator CC',
}

const Calculator = createMaterialTopTabNavigator<CalculatorStackParamList>();

export const CalculatorStack = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Calculator.Navigator
            sceneContainerStyle={{
                backgroundColor: theme === 'light' ? LightTheme.colors.background : DarkTheme.colors.background,
            }}
        >
            <Calculator.Screen name={CalculatorNavigationName.CALCULATOR_FC} component={CalculatorFCScreen} />
            <Calculator.Screen name={CalculatorNavigationName.CALCULATOR_CC} component={CalculatorCCScreen} />
        </Calculator.Navigator>
    );
};
