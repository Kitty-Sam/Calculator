import { StyleSheet, TextStyle } from 'react-native';

export type HeaderStyleType = {
    headerText: TextStyle;
};

export const styles = StyleSheet.create<HeaderStyleType>({
    headerText: { fontSize: 16, fontWeight: '400' },
});
