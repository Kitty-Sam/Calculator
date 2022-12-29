import { StyleSheet, ViewStyle } from 'react-native';

export type RowStyleType = {
    container: ViewStyle;
};

export const styles = StyleSheet.create<RowStyleType>({
    container: {
        flexDirection: 'row',
    },
});
