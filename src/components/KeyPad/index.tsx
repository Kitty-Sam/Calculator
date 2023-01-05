import React, { FC, memo } from 'react';
import { Row } from '~components/Row';
import { Column } from '~components/Column';
import { FlatList, View } from 'react-native';
import { leftButtonsLabels, rightButtonsLabels } from '~constants/buttonsLabels/buttonsLabels';
import { styles } from './style';
import { Button } from '~components/Button';
import { KeyPadType } from '~components/KeyPad/type';

export const KeyPad: FC<KeyPadType> = memo(({ onPressHandler }) => {
    return (
        <View style={styles.rootContainer}>
            <Row>
                <View style={styles.leftButtonsContainer}>
                    {leftButtonsLabels.map(({ title, shape, type }) => (
                        <Button
                            key={title}
                            title={title}
                            shape={shape}
                            onPress={() => onPressHandler(title)}
                            type={type}
                        />
                    ))}
                </View>
                <Column>
                    <FlatList
                        data={rightButtonsLabels}
                        renderItem={({ item: { shape, title, type } }) => (
                            <Button onPress={() => onPressHandler(title)} title={title} shape={shape} type={type} />
                        )}
                    />
                </Column>
            </Row>
        </View>
    );
});
