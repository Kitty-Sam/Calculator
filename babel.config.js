module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '~src': './src',
                    '~components': './src/components',
                    '~screens': './src/screens',
                    '~navigation': './src/navigation',
                    '~utils': './src/utils',
                    '~constants': './src/constants',
                    '~context': './src/context',
                },
            },
        ],
    ],
};
