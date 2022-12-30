import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonPropsType } from '~components/Button/type';
import { styles } from '~components/Button/style';
import { useTheme } from '@react-navigation/native';

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

    return (
        <TouchableOpacity
            onPress={onPress}
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
