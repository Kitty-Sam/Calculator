import React, { FC } from 'react';
import { View } from 'react-native';

import { Button } from 'components/Button';
import { styles } from 'components/KeyPad/style';
import { ButtonShape } from 'components/Button/type';

let labels: string[][] = [
    ['e', 'micro', 'sin', 'deg'],
    ['Ac', 'del', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3'],
    ['0', '.', '='],
];
export type KeyPadType = {
    // setItem: (item: string) => string;
    setItem: any;
};

export const KeyPad: FC<KeyPadType> = ({ setItem }) => {
    const onPressHandler = (item: string) => {
        setItem((prev: string) => prev + item);
    };

    return (
        <>
            {labels.map((row, index) => {
                return (
                    <React.Fragment key={row[1]}>
                        {index === 4 ? (
                            <View key={row[1]} style={[styles.buttonsContainer, { width: '74%' }]}>
                                {row.map((item) => {
                                    return (
                                        <Button
                                            shape={ButtonShape.SQUARE}
                                            onPress={() => onPressHandler(item)}
                                            title={item}
                                            key={item}
                                        />
                                    );
                                })}
                            </View>
                        ) : (
                            <View key={row[1]} style={styles.buttonsContainer}>
                                {row.map((item) => {
                                    if (index === 0) {
                                        return (
                                            <Button
                                                shape={ButtonShape.ROUND}
                                                onPress={() => onPressHandler(item)}
                                                title={item}
                                                key={item}
                                            />
                                        );
                                    }
                                    if (item === '+' || item === '=') {
                                        return (
                                            <Button
                                                shape={ButtonShape.SQUARE}
                                                onPress={() => onPressHandler(item)}
                                                title={item}
                                                key={item}
                                            />
                                        );
                                    }
                                    if (item === '0') {
                                        return (
                                            <Button
                                                shape={ButtonShape.RECTANGULAR}
                                                onPress={() => console.log(item)}
                                                title={item}
                                                key={item}
                                            />
                                        );
                                    }
                                    return (
                                        <Button
                                            shape={ButtonShape.SQUARE}
                                            onPress={() => onPressHandler(item)}
                                            title={item}
                                            key={item}
                                        />
                                    );
                                })}
                            </View>
                        )}
                    </React.Fragment>
                );
            })}
        </>
    );
};
