import { StyleSheet, ViewStyle } from 'react-native';

export type RoundButtonStyleType = {
  buttonContainer: ViewStyle;
};

export const styles = StyleSheet.create<RoundButtonStyleType>({
  buttonContainer: {
    width: 60,
    height: 20,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 4,
  },
});
