import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonPropsType, ButtonShape } from 'components/Button/type';
import { styles } from 'components/Button/style';

export const Button: FC<ButtonPropsType> = (props) => {
    const { onPress, title, disabled, backgroundColor = 'grey', shape = ButtonShape.SQUARE } = props;

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            activeOpacity={0.4}
            style={[
                styles.buttonContainer,
                {
                    width: shape === ButtonShape.SQUARE || shape === ButtonShape.ROUND ? 60 : 140,
                    height: shape === ButtonShape.ROUND ? 20 : 60,
                    backgroundColor:
                        shape === ButtonShape.SQUARE || shape === ButtonShape.RECTANGULAR ? backgroundColor : 'yellow',
                },
            ]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};
