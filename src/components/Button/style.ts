import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type ButtonStyleType = {
    buttonContainer: ViewStyle;
    buttonText: TextStyle;
};

export const styles = StyleSheet.create<ButtonStyleType>({
    buttonContainer: {
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
