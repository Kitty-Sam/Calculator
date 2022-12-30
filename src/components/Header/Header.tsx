import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from '~components/Header/style';
import { useTheme } from '@react-navigation/native';

export type HeaderPropsType = { header: string };

export const Header: FC<HeaderPropsType> = ({ header }) => {
    const { colors } = useTheme();
    return <Text style={[styles.headerText, { color: colors.text }]}>{header}</Text>;
};
