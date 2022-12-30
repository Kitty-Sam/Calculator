import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type ButtonStyleType = {
    buttonContainer: ViewStyle;
    buttonText: TextStyle;
};

export const styles = StyleSheet.create<ButtonStyleType>({
    buttonContainer: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
    },
});
