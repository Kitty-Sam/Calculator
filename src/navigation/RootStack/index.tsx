import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, TouchableOpacity } from 'react-native';
import { CalculatorScreen } from 'screens/CalculatorScreen';
import { HistoryScreen } from 'screens/HistoryScreen';

export const enum RootNavigationName {
    CALCULATOR = 'Calculator',
    HISTORY = 'History',
}

export type RootStackParamList = {
    [RootNavigationName.CALCULATOR]: undefined;
    [RootNavigationName.HISTORY]: undefined;
};

const Root = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <Root.Navigator>
            <Root.Screen
                name={RootNavigationName.CALCULATOR}
                component={CalculatorScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate(RootNavigationName.HISTORY)}>
                            <Text>history</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Root.Screen
                name={RootNavigationName.HISTORY}
                component={HistoryScreen}
                options={{
                    headerBackTitle: 'Back',
                }}
            />
        </Root.Navigator>
    );
};
