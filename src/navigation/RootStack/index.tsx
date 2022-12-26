import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native';
import { CalculatorScreen } from 'screens/CalculatorScreen';
import { HistoryScreen } from 'screens/HistoryScreen';

import Icon from 'react-native-vector-icons/Ionicons';

export const enum RootNavigationName {
    CALCULATOR = 'Modeson Calculator',
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
                                <Icon name={'moon-outline'} size={24} />
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
    );
};
