import { StyleSheet, ViewStyle } from 'react-native';

export type KeyPadStyleType = {
  buttonsContainer: ViewStyle;
};

export const styles = StyleSheet.create<KeyPadStyleType>({
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
