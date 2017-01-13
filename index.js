module.exports = {
    "env":{
        "browser":true,
        "node":true,
        "mocha":true,
        "es6":true,
        "commonjs":true
    },
    "parserOptions": {
        "ecmaVersion" : 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        }
    },
    "plugins" : [
        "html"
    ],
    'extends': [
        './rules/best-practices',
        './rules/errors',
        './rules/es6',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/variables',
        './rules/promise',
    ].map(require.resolve),
};