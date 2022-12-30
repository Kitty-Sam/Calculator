import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from '~components/Header/style';

export type HeaderPropsType = { header: string };

export const Header: FC<HeaderPropsType> = ({ header }) => {
    return <Text style={styles.headerText}>{header}</Text>;
};
