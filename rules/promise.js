module.exports = {
    'plugins':[
        'promise'
    ],
    'rules': {
        "promise/always-return"          : 0,
        "promise/no-return-wrap"         : 1,
        "promise/param-names"            : 1,
        "promise/catch-or-return"        : 0,
        "promise/no-native"              : 0,
        "promise/no-nesting"             : 1,
        "promise/no-promise-in-callback" : 0,
        "promise/no-callback-in-promise" : 0,
        "promise/avoid-new"              : 0
    }
};