import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from 'components/Display/style';
import { ErrorBoundary } from 'components/ErrorBoundary';

export type DisplayPropsType = {
    data: string;
};

export const Display: FC<DisplayPropsType> = ({ data }) => {
    return (
        <ErrorBoundary>
            <View style={styles.container}>
                <Text>{data}</Text>
            </View>
        </ErrorBoundary>
    );
};
