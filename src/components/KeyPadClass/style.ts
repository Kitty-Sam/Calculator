import { Dimensions, StyleSheet, ViewStyle } from 'react-native';

export type KeyPadStyleType = {
    rootContainer: ViewStyle;
    leftButtonsContainer: ViewStyle;
    columnWrapper: ViewStyle;
};

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create<KeyPadStyleType>({
    rootContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: -height * 0.65,
    },
    leftButtonsContainer: {
        flexDirection: 'row',
        width: 250,
    },
    columnWrapper: {
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
});
