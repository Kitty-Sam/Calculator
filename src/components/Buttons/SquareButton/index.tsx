import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export enum buttonSize {
  regular = 'regular',
  wide = 'wide',
}

export type SquareButtonPropsType = {
  item: string;
  size: buttonSize;
};

export const SquareButton: FC<SquareButtonPropsType> = ({ item, size }) => {
  return (
    <TouchableOpacity
      style={{
        width: size === buttonSize.regular ? 60 : 140,
        height: 60,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 4,
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};
