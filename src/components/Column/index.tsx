import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from '~components/Column/style';
import { ColumnPropsType } from '~components/Column/type';

export const Column: FC<ColumnPropsType> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};
