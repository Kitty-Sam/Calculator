import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from 'components/Display/style';
import { ErrorBoundary } from 'components/ErrorBoundary';

export type DisplayPropsType = {
    state: {
        value: string;
        nextValue: string;
        operator: string;
    };
};

const previewDisplayResult = (operator: string, operand: number, nextOperand: number) => {
    if (!operand) {
        return;
    }
    if (!nextOperand) {
        return operand + operator;
    }

    switch (operator) {
        case '+':
            return operand + nextOperand;
        case '-':
            return operand - nextOperand;
        case '*':
            return operand * nextOperand;
        case '/':
            return operand / nextOperand;
    }
};

export const Display: FC<DisplayPropsType> = ({ state }) => {
    return (
        <ErrorBoundary>
            <View style={styles.container}>
                <Text>{state.value + state.operator + state.nextValue}</Text>
                <Text>{previewDisplayResult(state.operator, Number(state.value), Number(state.nextValue))}</Text>
            </View>
        </ErrorBoundary>
    );
};
