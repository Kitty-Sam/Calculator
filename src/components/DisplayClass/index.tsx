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

export default class DisplayClass extends React.Component<DisplayClassPropsType> {
    input: string;

    result: string;

    isEqual: boolean;

    constructor(props: DisplayClassPropsType) {
        super(props);
        const { input, isEqual, result } = props;
        this.input = input;
        this.isEqual = isEqual;
        this.result = result;
    }

    render() {
        return (
            <ErrorBoundary>
                <View style={styles.container}>
                    {!this.isEqual && this.isEqual !== undefined && (
                        <Text style={[styles.text, { color: DarkTheme.colors.primary }]}>{this.input}</Text>
                    )}
                    {!this.props.input && (
                        <Text style={[styles.text, { color: DarkTheme.colors.primary }]}>{this.result}</Text>
                    )}
                </View>
            </ErrorBoundary>
        );
    }
}
