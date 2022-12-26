import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type ButtonStyleType = {
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
};

export const styles = StyleSheet.create<ButtonStyleType>({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 4,
  },
  buttonText: {},
});
