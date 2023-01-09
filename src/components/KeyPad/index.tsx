import React, { FC, memo } from 'react';
import { FlatList, View } from 'react-native';

import { Button } from '~components/Button';
import { Column } from '~components/Column';
import { KeyPadType } from '~components/KeyPad/type';
import { Row } from '~components/Row';
import { ItemsType, leftButtonsLabels, rightButtonsLabels } from '~constants/buttonsLabels/buttonsLabels';

import { styles } from './style';

export const KeyPad: FC<KeyPadType> = memo(({ onPressHandler }) => {
    const renderItem = ({ item: { shape, title, type } }: { item: ItemsType }) => (
        <Button onPress={onPressHandler} title={title} shape={shape} type={type} />
    );

    return (
        <View style={styles.rootContainer}>
            <Row>
                <View style={styles.leftButtonsContainer}>
                    {leftButtonsLabels.map(({ title, shape, type }) => (
                        <Button key={title} title={title} shape={shape} onPress={onPressHandler} type={type} />
                    ))}
                </View>
                <Column>
                    <FlatList data={rightButtonsLabels} renderItem={renderItem} />
                </Column>
            </Row>
        </View>
    );
});
