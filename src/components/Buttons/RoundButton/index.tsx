import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export type RoundButtonPropsType = {
  item: string;
};

export const RoundButton: FC<RoundButtonPropsType> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};
