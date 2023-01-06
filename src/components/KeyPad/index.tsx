import React, { FC, memo } from 'react';
import { Row } from '~components/Row';
import { Column } from '~components/Column';
import { FlatList, View } from 'react-native';
import { ItemsType, leftButtonsLabels, rightButtonsLabels } from '~constants/buttonsLabels/buttonsLabels';
import { styles } from './style';
import { Button } from '~components/Button';
import { KeyPadType } from '~components/KeyPad/type';

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
