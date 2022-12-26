import { StyleSheet, ViewStyle } from 'react-native';

export type CalculatorScreenStyleType = {
    rootContainer: ViewStyle;
};

export const styles = StyleSheet.create<CalculatorScreenStyleType>({
    rootContainer: {
        marginHorizontal: 48,
    },
});
