module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        env: {
            production: {
                plugins: [
                    'react-native-paper/babel',
                    [
                        'module-resolver',
                        {
                            alias: {
                                '@components': './src/common/components',
                            },
                        },
                    ],
                ],
            },
        },
    };
};
