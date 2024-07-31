const config = { presets: ['@babel/preset-env'] };

// export default config;

module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        "@babel/preset-typescript"
    ]
};