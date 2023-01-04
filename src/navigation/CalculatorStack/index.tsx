import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemeContext } from '~context/ThemeContext';
import { DarkTheme, LightTheme } from '~constants/Theme/Theme';
import { CalculatorFCScreen } from '~screens/CalculatorFCScreen';
import CalculatorCCScreen from '~screens/CalculatorCCScreen';

export const enum CalculatorNavigationName {
    CALCULATOR_FC = 'Calculator FC',
    CALCULATOR_CC = 'Calculator CC',
}

export type CalculatorStackParamList = {
    [CalculatorNavigationName.CALCULATOR_FC]: undefined;
    [CalculatorNavigationName.CALCULATOR_CC]: undefined;
};

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
