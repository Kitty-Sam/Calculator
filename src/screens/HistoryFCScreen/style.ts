import { StyleSheet, ViewStyle } from 'react-native';

export type HistoryFCScreenStyleType = {
    fab: ViewStyle;
};

export const styles = StyleSheet.create<HistoryFCScreenStyleType>({
    fab: {
        position: 'absolute',
        margin: 48,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
    },
});
