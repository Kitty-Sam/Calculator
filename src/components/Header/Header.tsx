import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from '~components/Header/style';
import { useTheme } from '@react-navigation/native';
import { HeaderPropsType } from '~components/Header/type';

export const Header: FC<HeaderPropsType> = ({ title }) => {
    const { colors } = useTheme();
    return <Text style={[styles.headerText, { color: colors.text }]}>{title}</Text>;
};
