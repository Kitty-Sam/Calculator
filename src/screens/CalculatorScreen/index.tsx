import React, { FC, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StackScreenNavigationProps } from 'navigation/type';
import { RootNavigationName, RootStackParamList } from 'navigation/RootStack';

import { Display } from 'components/Display';
import { KeyPad } from 'components/KeyPad';
import { styles } from 'screens/CalculatorScreen/style';

export type CalculatorScreenPropsType = StackScreenNavigationProps<RootNavigationName.CALCULATOR, RootStackParamList>;

export const CalculatorScreen: FC<CalculatorScreenPropsType> = ({}) => {
    const [item, setItem] = useState('');
    return (
        <SafeAreaView style={styles.rootContainer}>
            <Display data={item} />
            <KeyPad setItem={setItem} />
        </SafeAreaView>
    );
};
