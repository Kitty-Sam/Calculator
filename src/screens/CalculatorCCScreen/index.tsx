import React, { useState } from 'react';

import { View } from 'react-native';
import { initialState } from '~utils/Calculate/calculate';
import { styles } from './style';
import { Display } from '~components/Display';
import { KeyPad } from '~components/KeyPad';

export const CalculatorCCScreen = () => {
    const [state, setState] = useState(initialState);

    return (
        <View style={styles.rootContainer}>
            <Display state={state} />
            <KeyPad setState={setState} />
        </View>
    );
};
