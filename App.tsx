import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '~navigation/RootStack';
import { DarkTheme, LightTheme } from '~constants/Theme/Theme';
import { ThemeContext, THEMES } from '~context/ThemeContext';

const App = () => {
    const [theme, setTheme] = useState(THEMES.light);

    const toggleTheme = () => {
        setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <NavigationContainer theme={theme === THEMES.light ? LightTheme : DarkTheme}>
                <View style={{ flex: 1 }}>
                    <StatusBar />
                    <RootStack />
                </View>
            </NavigationContainer>
        </ThemeContext.Provider>
    );
};

export default App;
