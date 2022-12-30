import { StyleSheet, ViewStyle } from 'react-native';

export type HistoryCCScreenStyleType = {
    fab: ViewStyle;
};

export const styles = StyleSheet.create<HistoryCCScreenStyleType>({
    fab: {
        position: 'absolute',
        margin: 48,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
    },
});
