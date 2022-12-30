import { StyleSheet, ViewStyle } from 'react-native';

export type DisplayStyleType = {
    container: ViewStyle;
};

export const styles = StyleSheet.create<DisplayStyleType>({
    container: {
        height: '39%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
