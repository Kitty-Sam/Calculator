import React, { FC } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenNavigationProps } from '../../navigation/type';
import { RootNavigationName, RootStackParamList } from '../../RootStack';

export type CalculatorScreenPropsType = StackScreenNavigationProps<RootNavigationName.CALCULATOR, RootStackParamList>;

export const CalculatorScreen: FC<CalculatorScreenPropsType> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Calculator</Text>
      <Text onPress={() => navigation.navigate(RootNavigationName.HISTORY)}>history</Text>
    </SafeAreaView>
  );
};
