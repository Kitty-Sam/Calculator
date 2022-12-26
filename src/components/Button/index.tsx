import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonPropsType, buttonShape } from 'components/Button/type';
import { styles } from 'components/Button/style';

export const Button: FC<ButtonPropsType> = props => {
  const { onPress, title, disabled, backgroundColor = 'grey', shape = buttonShape.SQUARE } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.4}
      style={[
        styles.buttonContainer,
        {
          width: shape === buttonShape.SQUARE || shape === buttonShape.ROUND ? 60 : 140,
          height: shape === buttonShape.ROUND ? 20 : 60,
          backgroundColor:
            shape === buttonShape.SQUARE || shape === buttonShape.RECTANGULAR ? backgroundColor : 'yellow',
        },
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
