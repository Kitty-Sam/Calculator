import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from 'navigation/RootStack';

const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar />
                <RootStack />
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
