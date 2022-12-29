import React, { FC } from 'react';

import { Button } from 'components/Button';
import { Row } from 'components/Row';
import { calculate } from 'utils/Calculate/calculate';
import { View } from 'react-native';
export type KeyPadType = {
    // setState: () => void;
    setState: any;
};

export const KeyPad: FC<KeyPadType> = ({ setState }) => {
    const onPressHandler = (type: string, value: string | number | null) => {
        setState((state: string) => calculate(type, value, state));
    };

    return (
        <View>
            <Row>
                <Button text="+/-" appearance="primary" onPress={() => onPressHandler('change_operator', null)} />
                <Button text="(" appearance="primary" onPress={() => onPressHandler('bracket_open', null)} />
                <Button text=")" appearance="primary" onPress={() => onPressHandler('bracket_close', null)} />
                <Button text="%" appearance="primary" onPress={() => onPressHandler('percent', null)} />
            </Row>

            <Row>
                <Button text="Ac" appearance="secondary" onPress={() => onPressHandler('clean', null)} />
                <Button text="del" appearance="secondary" onPress={() => onPressHandler('delete', null)} />
                <Button text="/" appearance="accent" onPress={() => onPressHandler('operator', '/')} />
                <Button text="*" appearance="accent" onPress={() => onPressHandler('operator', '*')} />
            </Row>

            <Row>
                <Button text="7" appearance="primary" onPress={() => onPressHandler('number', 7)} />
                <Button text="8" appearance="primary" onPress={() => onPressHandler('number', 8)} />
                <Button text="9" appearance="primary" onPress={() => onPressHandler('number', 9)} />
                <Button text="-" appearance="accent" onPress={() => onPressHandler('operator', '-')} />
            </Row>

            <Row>
                <Button text="4" appearance="primary" onPress={() => onPressHandler('number', 4)} />
                <Button text="5" appearance="primary" onPress={() => onPressHandler('number', 5)} />
                <Button text="6" appearance="primary" onPress={() => onPressHandler('number', 6)} />
                <Button text="+" appearance="accent" onPress={() => onPressHandler('operator', '+')} />
            </Row>

            <Row>
                <Button text="1" appearance="primary" onPress={() => onPressHandler('number', 1)} />
                <Button text="2" appearance="primary" onPress={() => onPressHandler('number', 2)} />
                <Button text="3" appearance="primary" onPress={() => onPressHandler('number', 3)} />
            </Row>

            <Row>
                <Button text="0" appearance="primary" onPress={() => onPressHandler('number', 0)} />
                <Button text="." appearance="primary" onPress={() => onPressHandler('number', '.')} />
                <Button text="=" appearance="secondary" onPress={() => onPressHandler('equal', '=')} />
            </Row>
        </View>
    );
};
