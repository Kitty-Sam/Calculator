import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { LightTheme, DarkTheme } from 'constants/Theme/Theme';

type ButtonStyleType = {
    buttonContainer: ViewStyle;
    buttonDarkContainer: ViewStyle;
    buttonWide: ViewStyle;
    buttonTall: ViewStyle;
    buttonSecondary: ViewStyle;
    buttonDarkSecondary: ViewStyle;
    buttonAccent: ViewStyle;
    buttonDarkAccent: ViewStyle;
    buttonText: TextStyle;
    buttonDarkText: TextStyle;
    textSecondary: TextStyle;
    textDarkSecondary: TextStyle;
};
const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

export const styles = StyleSheet.create<ButtonStyleType>({
    buttonContainer: {
        backgroundColor: LightTheme.primaryButtonsBackground,
        flex: 1,
        height: Math.floor(buttonWidth - 45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
    },
    buttonText: {
        color: LightTheme.textColor,
        fontSize: 24,
    },
    buttonWide: {
        width: screen.width / 2 - 10,
        flex: 0,
    },
    textSecondary: {
        color: LightTheme.accentTextColor,
    },

    buttonTall: {
        // height: screen.width / 2 - 10,
    },
    buttonSecondary: {
        backgroundColor: LightTheme.secondaryButtonsBackground,
    },
    buttonAccent: {
        backgroundColor: LightTheme.accentButtonsBackground,
    },
    buttonDarkSecondary: {
        backgroundColor: DarkTheme.secondaryButtonsBackground,
    },
    buttonDarkAccent: {
        backgroundColor: DarkTheme.accentButtonsBackground,
    },
    buttonDarkContainer: {
        backgroundColor: DarkTheme.primaryButtonsBackground,
    },
    buttonDarkText: {
        color: DarkTheme.textColor,
    },
    textDarkSecondary: {
        color: DarkTheme.accentTextColor,
    },
});
