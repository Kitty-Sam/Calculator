import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from '~components/Button/style';
import { ButtonPropsType } from '~components/Button/type';

export const Button: FC<ButtonPropsType> = ({ onPress, title, shape, type }) => {
    const { colors } = useTheme();

    const resultedHeight = () => {
        switch (shape) {
            case 'tall':
                return 95;
            case 'small':
                return 40;
            default:
                return 60;
        }
    };

    const onButtonPress = () => {
        onPress(title);
    };

    return (
        <TouchableOpacity
            onPress={onButtonPress}
            style={[
                styles.buttonContainer,
                {
                    width: shape === 'wide' ? 145 : 60,
                    height: resultedHeight(),
                    borderRadius: shape === 'small' ? 20 : 10,
                    backgroundColor: type ? colors.primary : colors.notification,
                },
            ]}
        >
            <Text style={[styles.buttonText, { color: colors.border }]}>{title}</Text>
        </TouchableOpacity>
    );
};
