import { StyleSheet, ViewStyle } from 'react-native';

export type ColumnStyleType = {
    container: ViewStyle;
};

export const styles = StyleSheet.create<ColumnStyleType>({
    container: {
        flexDirection: 'column',
        marginLeft: 8,
    },
});
