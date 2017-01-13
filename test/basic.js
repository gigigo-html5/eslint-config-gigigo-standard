'use strict';

var config = require('../');
var assert = require('assert')
var eslint = require('eslint');

describe('working config',()=>{

  it('load config in eslint to validate all rule syntax is correct', function () {
    var CLIEngine = eslint.CLIEngine;
    var code = 'var foo = 1;\nvar bar = function() {};\nbar(foo);\n';

    var cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json'
    });


    assert(cli.executeOnText(code).errorCount === 0);
  })
  
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null;
}


