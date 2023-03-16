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

const numberOfRows = 6;

export default class KeyPadClass extends PureComponent<KeyPadClassPropsType> {
    onPressHandler: (text: string) => void;

    constructor(props: KeyPadClassPropsType) {
        super(props);
        const { onPressHandler } = props;
        this.onPressHandler = onPressHandler;
    }

    renderItem = ({ item: { shape, title, type } }: { item: ItemsType }) => (
        <Button onPress={this.onPressHandler} title={title} shape={shape} type={type} />
    );

    render() {
        return (
            <View style={styles.rootContainer}>
                <Row>
                    <View style={styles.leftButtonsContainer}>
                        <FlatList
                            numColumns={numberOfRows}
                            data={leftButtonsLabels}
                            renderItem={this.renderItem}
                            columnWrapperStyle={styles.columnWrapper}
                        />
                    </View>
                    <Column>
                        <FlatList data={rightButtonsLabels} renderItem={this.renderItem} />
                    </Column>
                </Row>
            </View>
        );
    }
}
