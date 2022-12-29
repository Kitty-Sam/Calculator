import React, { FC, useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonPropsType } from 'components/Button/type';
import { styles } from 'components/Button/style';
import { ThemeContext } from 'utils/ThemeContext/ThemeContext';

export const Button: FC<ButtonPropsType> = ({ onPress, text, size, appearance }) => {
    const { theme } = useContext(ThemeContext);

    const buttonContainerStyles = [styles.buttonContainer];
    const textStyles = [styles.buttonText];

    if (size === 'wide') {
        buttonContainerStyles.push(styles.buttonWide);
    }
    if (size === 'tall') {
        buttonContainerStyles.push(styles.buttonTall);
    }

    if (theme === 'light') {
        if (appearance === 'secondary') {
            buttonContainerStyles.push(styles.buttonSecondary);
            textStyles.push(styles.textSecondary);
        }
        if (appearance === 'accent') {
            buttonContainerStyles.push(styles.buttonAccent);
        }
    } else {
        if (appearance === 'primary') {
            buttonContainerStyles.push(styles.buttonDarkContainer);
        }
        if (appearance === 'secondary') {
            buttonContainerStyles.push(styles.buttonDarkSecondary);
            textStyles.push(styles.buttonText);
        }
        if (appearance === 'accent') {
            buttonContainerStyles.push(styles.buttonDarkAccent);
            textStyles.push(styles.textDarkSecondary);
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonContainerStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};
