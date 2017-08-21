module.exports = {
    "env":{
        "node":true,
        "mocha":true,
        "es6":true,
        "commonjs":true
    },
    "parserOptions": {
        "ecmaVersion" : 8,
        "sourceType": "script"
    },
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
    'rules':{
        'strict' : [2,'global']
    }
};