module.exports = {
    'rules': {
        'init-declarations'          : 0,
        'no-catch-shadow'            : 0,
        'no-delete-var'              : 2,
        'no-label-var'               : 2,
        'no-restricted-globals'      : 0,
        'no-shadow-restricted-names' : 2,
        'no-shadow'                  : 0,
        'no-undef-init'              : 2,
        'no-undef'                   : 2,
        'no-undefined'               : 0,
        'no-unused-vars'             : [1,{vars:'local'}],
        'no-use-before-define'       : [2,{functions:false,classes:false}]
    }
};