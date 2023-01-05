import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from '~components/Row/style';
import { RowPropsType } from '~components/Row/type';

export const Row: FC<RowPropsType> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};
