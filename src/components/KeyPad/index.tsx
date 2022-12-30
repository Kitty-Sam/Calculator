import React, { FC } from 'react';
import { Row } from '~components/Row';
import { Column } from '~components/Column';
import { View } from 'react-native';
import { leftButtonsLabels, rightButtonsLabels } from '~constants/buttonsLabels/buttonsLabels';
import { styles } from './style';
import { Button } from '~components/Button';

export type KeyPadType = {
    setState: any;
};

export const KeyPad: FC<KeyPadType> = () => {
    const onPressHandler = (title: string) => () => {
        console.log(title);
    };

    return (
        <View style={styles.rootContainer}>
            <Row>
                <View style={styles.leftButtonsContainer}>
                    {leftButtonsLabels.map(({ title, shape }) => (
                        <Button key={title} title={title} shape={shape} onPress={onPressHandler(title)} />
                    ))}
                </View>
                <Column>
                    {rightButtonsLabels.map(({ title, shape }) => (
                        <Button key={title} title={title} shape={shape} onPress={onPressHandler(title)} />
                    ))}
                </Column>
            </Row>
        </View>
    );
};
