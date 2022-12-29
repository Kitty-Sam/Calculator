import { StyleSheet, ViewStyle } from 'react-native';

export type DisplayStyleType = {
    container: ViewStyle;
};

export const styles = StyleSheet.create<DisplayStyleType>({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
