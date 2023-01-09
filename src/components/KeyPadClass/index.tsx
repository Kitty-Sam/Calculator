import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';

import { Button } from '~components/Button';
import { Column } from '~components/Column';
import { Row } from '~components/Row';
import { ItemsType, leftButtonsLabels, rightButtonsLabels } from '~constants/buttonsLabels/buttonsLabels';

import { styles } from './style';

export interface KeyPadClassPropsType {
    onPressHandler: (text: string) => void;
}

export default class KeyPadClass extends PureComponent<KeyPadClassPropsType> {
    renderItem = ({ item: { shape, title, type } }: { item: ItemsType }) => (
        <Button onPress={this.props.onPressHandler} title={title} shape={shape} type={type} />
    );

    render() {
        const { onPressHandler } = this.props;
        return (
            <View style={styles.rootContainer}>
                <Row>
                    <View style={styles.leftButtonsContainer}>
                        {leftButtonsLabels.map(({ title, shape, type }) => (
                            <Button key={title} title={title} shape={shape} onPress={onPressHandler} type={type} />
                        ))}
                    </View>
                    <Column>
                        <FlatList data={rightButtonsLabels} renderItem={this.renderItem} />
                    </Column>
                </Row>
            </View>
        );
    }
}
