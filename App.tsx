import React from 'react';
import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '~navigation/RootStack';

const App = () => {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <StatusBar />
                <RootStack />
            </View>
        </NavigationContainer>
    );
};

export default App;
