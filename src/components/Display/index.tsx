import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from '~components/Display/style';
import { ErrorBoundary } from '~components/ErrorBoundary';
import { useTheme } from '@react-navigation/native';
import { DisplayPropsType } from '~components/Display/type';

export const Display: FC<DisplayPropsType> = ({ input, result, isEqual }) => {
    const { colors } = useTheme();
    return (
        <ErrorBoundary>
            <View style={styles.container}>
                {!isEqual && isEqual !== undefined ? (
                    <Text style={[styles.text, { color: colors.border }]}>{input}</Text>
                ) : (
                    <></>
                )}
                {!input ? <Text style={[styles.text, { color: colors.border }]}>{result}</Text> : <></>}
            </View>
        </ErrorBoundary>
    );
};
