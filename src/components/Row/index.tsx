import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from '~components/Row/style';

export type RowPropsType = {
    children: any;
};

export const Row: FC<RowPropsType> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};
