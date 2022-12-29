import React from 'react';
import { View } from 'react-native';

import { KeyPad } from 'components/KeyPad';

import { styles } from 'screens/CalculatorCCScreen/style';

export class CalculatorCCScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = { value: '', operator: '', nextValue: '', isEqual: false };
    }

    render() {
        return (
            <View style={[styles.rootContainer]}>
                <View style={{ height: 300 }} />
                <KeyPad setState={this.setState} />
            </View>
        );
    }
}
