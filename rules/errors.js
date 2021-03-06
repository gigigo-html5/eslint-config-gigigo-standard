module.exports = {
    'rules': {
        'no-await-in-loop'            : 2,
        'no-cond-assign'              : 2,
        'no-console'                  : 1,
        'no-constant-condition'       : 1,
        'no-control-regex'            : 2,
        'no-debugger'                 : 1,
        'no-dupe-args'                : 2,
        'no-dupe-keys'                : 2,
        'no-duplicate-case'           : 2,
        'no-empty-character-class'    : 2,
        'no-empty'                    : [2,{
                                            allowEmptyCatch: true
                                        }],
        'no-ex-assign'                : 2,
        'no-extra-boolean-cast'       : 2,
        'no-extra-parens'             : ['off', 'all', {
                                            conditionalAssign: true,
                                            nestedBinaryExpressions: false,
                                            returnAssign: false,
                                        }],
        'no-extra-semi'               : 2,
        'no-func-assign'              : 2,
        'no-inner-declarations'       : 2,
        'no-invalid-regexp'           : 2,
        'no-irregular-whitespace'     : 2,
        'no-obj-calls'                : 2,
        'no-prototype-builtins'       : 2,
        'no-regex-spaces'             : 2,
        'no-sparse-arrays'            : 2,
        'no-template-curly-in-string' : 2,
        'no-unexpected-multiline'     : 2,
        'no-unreachable'              : 2,
        'no-unsafe-finally'           : 2,
        'no-unsafe-negation'          : 2,
        'use-isnan'                   : 2,
        'valid-jsdoc'                 : 0,
        'valid-typeof'                : 2
    }
};