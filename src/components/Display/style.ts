import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DisplayStyleType = {
    container: ViewStyle;
    text: TextStyle;
};

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create<DisplayStyleType>({
    container: {
        height: height * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
    },
});
