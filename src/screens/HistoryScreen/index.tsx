import React, { FC } from 'react';
import { Text } from 'react-native';
import { StackScreenNavigationProps } from 'navigation/type';
import { RootNavigationName, RootStackParamList } from 'navigation/RootStack';

export type HistoryScreenPropsType = StackScreenNavigationProps<RootNavigationName.HISTORY, RootStackParamList>;

export const HistoryScreen: FC<HistoryScreenPropsType> = () => {
  return <Text>History</Text>;
};
