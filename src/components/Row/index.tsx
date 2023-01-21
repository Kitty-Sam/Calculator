import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import { styles } from '~components/Row/style';

export const Row: FC<PropsWithChildren> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};
