import { Dimensions, StyleSheet, ViewStyle } from 'react-native';

export type KeyPadStyleType = {
    rootContainer: ViewStyle;
    leftButtonsContainer: ViewStyle;
};

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create<KeyPadStyleType>({
    rootContainer: { alignItems: 'center', position: 'absolute', bottom: -height * 0.65 },
    leftButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: 250,
    },
});
