import { StyleSheet, ViewStyle } from 'react-native';

export type AppStyleType = {
    root: ViewStyle;
};

export const styles = StyleSheet.create<AppStyleType>({
    root: {
        flex: 1,
    },
});
