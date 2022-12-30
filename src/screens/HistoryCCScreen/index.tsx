import React from 'react';
import { Alert } from 'react-native';

import { FAB } from 'react-native-paper';
import { styles } from '~screens/HistoryCCScreen/style';

export const HistoryCCScreen = () => {
    return (
        <>
            <FAB
                icon={'trash-can-outline'}
                style={styles.fab}
                size="medium"
                onPress={() => Alert.alert('clear history')}
            />
        </>
    );
};
