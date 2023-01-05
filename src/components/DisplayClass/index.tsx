import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '~components/Display/style';
import { ErrorBoundary } from '~components/ErrorBoundary';
import { DarkTheme } from '~constants/Theme/Theme';

export interface DisplayClassPropsType {
    input: string;
    result: string;
    isEqual: boolean;
}
export interface DisplayClassStateType {}

export default class DisplayClass extends React.Component<DisplayClassPropsType, DisplayClassStateType> {
    render() {
        const { input, result, isEqual } = this.props;
        return (
            <ErrorBoundary>
                <View style={styles.container}>
                    {!isEqual && isEqual !== undefined ? (
                        <Text style={[styles.text, { color: DarkTheme.colors.primary }]}>{input}</Text>
                    ) : (
                        <></>
                    )}
                    {!this.props.input ? (
                        <Text style={[styles.text, { color: DarkTheme.colors.primary }]}>{result}</Text>
                    ) : (
                        <></>
                    )}
                </View>
            </ErrorBoundary>
        );
    }
}
