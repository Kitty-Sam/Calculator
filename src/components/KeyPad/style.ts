import { StyleSheet, ViewStyle } from 'react-native';

export type KeyPadStyleType = {
    rootContainer: ViewStyle;
    leftButtonsContainer: ViewStyle;
};

export const styles = StyleSheet.create<KeyPadStyleType>({
    rootContainer: { alignItems: 'center' },
    leftButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: 250,
    },
});
