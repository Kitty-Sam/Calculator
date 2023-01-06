import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styles } from '~components/Column/style';

export const Column: FC<PropsWithChildren> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};
