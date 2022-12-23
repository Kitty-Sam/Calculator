import React, { FC } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenNavigationProps } from '../../navigation/type';
import { RootNavigationName, RootStackParamList } from '../../RootStack';

import { KeyPad } from '../../components/KeyPad/KeyPad';
import { Display } from '../../components/Display/Display';
import { styles } from './style';

export type CalculatorScreenPropsType = StackScreenNavigationProps<RootNavigationName.CALCULATOR, RootStackParamList>;

export const CalculatorScreen: FC<CalculatorScreenPropsType> = ({}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Display data={'hello world'} />
      <KeyPad />
    </SafeAreaView>
  );
};
