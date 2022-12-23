import React from 'react';
import { View } from 'react-native';
import { buttonSize, SquareButton } from '../Buttons/SquareButton';
import { RoundButton } from '../Buttons/RoundButton';
import { styles } from './style';

let labels: string[][] = [
  ['e', 'micro', 'sin', 'deg'],
  ['Ac', 'del', '/', '*'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3'],
  ['0', '.', '='],
];

export const KeyPad = () => {
  return (
    <>
      {labels.map((row, index) => {
        return (
          <React.Fragment key={row[1]}>
            {index === 4 ? (
              <View key={row[1]} style={[styles.buttonsContainer, { width: '74%' }]}>
                {row.map(item => {
                  return <SquareButton item={item} key={item} size={buttonSize.regular} />;
                })}
              </View>
            ) : (
              <View key={row[1]} style={styles.buttonsContainer}>
                {row.map(item => {
                  if (index === 0) {
                    return <RoundButton item={item} key={item} />;
                  }
                  if (item === '+' || item === '=') {
                    return <SquareButton item={item} key={item} size={buttonSize.regular} />;
                  }
                  if (item === '0') {
                    return <SquareButton item={item} key={item} size={buttonSize.wide} />;
                  }
                  return <SquareButton item={item} key={item} size={buttonSize.regular} />;
                })}
              </View>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};
