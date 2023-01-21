import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DisplayStyleType = {
    container: ViewStyle;
    text: TextStyle;
};

export const styles = StyleSheet.create<DisplayStyleType>({
    container: {
        height: '39%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
    },
});
