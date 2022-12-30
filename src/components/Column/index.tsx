import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from '~components/Column/style';

export type ColumnPropsType = {
    children: any;
};

export const Column: FC<ColumnPropsType> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};
