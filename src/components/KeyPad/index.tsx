import React, { FC, memo } from 'react';
import { FlatList, ScrollView, View } from 'react-native';

import { Button } from '~components/Button';
import { Column } from '~components/Column';
import { KeyPadType } from '~components/KeyPad/type';
import { Row } from '~components/Row';
import { ItemsType, leftButtonsLabels, rightButtonsLabels } from '~constants/buttonsLabels/buttonsLabels';

import { styles } from './style';

const numberOfRows = 6;

export const KeyPad: FC<KeyPadType> = memo(({ onPressHandler }) => {
    const renderItem = ({ item: { shape, title, type } }: { item: ItemsType }) => (
        <Button onPress={onPressHandler} title={title} shape={shape} type={type} />
    );

    return (
        <View style={styles.rootContainer}>
            <Row>
                <View style={styles.leftButtonsContainer}>
                    <FlatList
                        numColumns={numberOfRows}
                        data={leftButtonsLabels}
                        renderItem={renderItem}
                        columnWrapperStyle={styles.columnWrapper}
                    />
                </View>
                <ScrollView></ScrollView>
                <Column>
                    <FlatList data={rightButtonsLabels} renderItem={renderItem} />
                </Column>
            </Row>
        </View>
    );
});
