import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type HistoryFCScreenStyleType = {
    fab: ViewStyle;
    text: TextStyle;
    additionalText: TextStyle;
    block: ViewStyle;
};

export const styles = StyleSheet.create<HistoryFCScreenStyleType>({
    fab: {
        position: 'absolute',
        margin: 48,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
    },
    additionalText: { margin: 16 },
    block: {
        margin: 16,
    },
});
