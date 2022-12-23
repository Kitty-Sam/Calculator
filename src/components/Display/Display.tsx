import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export type DisplayPropsType = {
  data: string;
};

export const Display: FC<DisplayPropsType> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
    </View>
  );
};
