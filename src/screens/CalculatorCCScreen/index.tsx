import React, { useState } from 'react';

import { View } from 'react-native';
import { styles } from './style';
import { Display } from '~components/Display';
import { KeyPad } from '~components/KeyPad';

export const CalculatorCCScreen = () => {
    const onPressHandler = () => {};
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [isEqual, setIsEqual] = useState(false);

    return (
        <View style={styles.rootContainer}>
            <Display input={input} result={result} isEqual={isEqual} />
            <KeyPad onPressHandler={onPressHandler} />
        </View>
    );
};
