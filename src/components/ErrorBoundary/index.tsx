import React, { Component } from 'react';
import { Text } from 'react-native';

import { ErrorBoundaryPropsType, ErrorBoundaryStateType } from '~components/ErrorBoundary/type';

export class ErrorBoundary extends Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
    constructor(props: ErrorBoundaryPropsType) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <Text>Something goes wrong</Text>;
        }

        return this.props.children;
    }
}
