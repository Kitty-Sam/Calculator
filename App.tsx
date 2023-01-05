import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '~navigation/RootStack';
import { DarkTheme, LightTheme } from '~constants/Theme/Theme';
import { ThemeContext, THEMES } from '~context/ThemeContext';
import { HistoryContext } from '~context/HistoryContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
    const [theme, setTheme] = useState(THEMES.light);
    const [history, setHistory] = useState<string[]>([]);

    const getTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme) {
                const resultedTheme = await JSON.parse(savedTheme);
                setTheme(resultedTheme);
            } else {
                return THEMES.light;
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTheme();
    }, []);

    const toggleTheme = () => {
        setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark);
    };

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <NavigationContainer theme={theme === THEMES.light ? LightTheme : DarkTheme}>
                    <View style={{ flex: 1 }}>
                        <StatusBar />
                        <RootStack />
                    </View>
                </NavigationContainer>
            </ThemeContext.Provider>
        </HistoryContext.Provider>
    );
};

export default App;
